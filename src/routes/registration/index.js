import { LoadingButton } from '@mui/lab';
import { TextField, Button, Snackbar, Alert } from '@mui/material';
import { useState } from 'react';
import { API_URL } from '../../constants';
import './styles.css';

const Registration = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [state, setState] = useState({});
    const [message, setMessage] = useState(null);

    const onChangeText = (event) => {
        const target = event.target;
        setState({
            ...state,
            [target.name]: target.value
        });
    }

    return <div className='login-container'>
        <img src='/logo512.png' className='login-img' alt='Logo' />
        <h1 className='title'>Beneficiary Portal</h1>
        <div className='login-form'>
            <div className='input-row'>
                <label>First Name</label>
                <TextField placeholder='First Name' type='text' size='small' name="firstName" onChange={onChangeText} />
            </div>
            <div className='input-row'>
                <label>Last Name</label>
                <TextField placeholder='Last Name' type='text' size='small' name='lastName' onChange={onChangeText} />
            </div>
            <div className='input-row'>
                <label>Email</label>
                <TextField placeholder='Email' type='email' size='small' name='email' onChange={onChangeText} />
            </div>
            <div className='input-row'>
                <label>Mobile</label>
                <TextField placeholder='Mobile No.' type='number' size='small' name='mobile' onChange={onChangeText} />
            </div>
            <div className='input-row'>
                <label>Password</label>
                <TextField placeholder='Password' size='small' type='password' name='password' onChange={onChangeText} />
            </div>
            <div className='input-row'>
                <label>Re-Type Password</label>
                <TextField placeholder='Re-Type Password' size='small' type='password' name='re_password' onChange={onChangeText} />
            </div>
            <div className='login-btn'>
                <LoadingButton variant='outlined' size='small' loading={isLoading} onClick={async () => {
                    setIsLoading(true);
                    if (state.firstName && state.lastName && (state.email || state.mobile) && state.password && state.re_password) {
                        if (state.password && state.password === state.re_password) {
                            if ((state.email || state.mobile) && state.firstName && state.lastName) {
                                var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                                var pwformat = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{4,}$/;
                                var mobileformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                                console.log("MATCKING");
                                console.log(state.email, state.email && state.email.match(mailformat), state.mobile, state.mobile && state.mobile.match(mobileformat));
                                if ((state.email && state.email.match(mailformat)) || (state.mobile && state.mobile.match(mobileformat))) {
                                    if (state.password.match(pwformat)) {
                                        const out = await (await fetch(`${await API_URL()}pub/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(state) })).json();
                                        setIsLoading(false);
                                        if (out.code === 200) {
                                            setMessage({ text: "Registration Successful", status: 200 });
                                            setTimeout(() => window.location.href = '/login', 2000);
                                        } else {
                                            setMessage({ text: out.errorMessage, status: out.code });
                                        }
                                    } else {
                                        setMessage({ text: "Password should contain atleaset a symbol character, uppercase letter, number and a lowercase letter", status: 400 });
                                        setIsLoading(false);
                                    }
                                } else {
                                    setMessage({ text: "Invalid email/mobile", status: 400 });
                                    setIsLoading(false);
                                }
                            } else {
                                setMessage({ text: "Invalid fields", status: 400 });
                                setIsLoading(false);
                            }
                        } else {
                            setMessage({ text: "Passowrds doesn't match", status: 400 });
                            setIsLoading(false);
                        }
                    } else {
                        setMessage({ text: "Found some empty fields", status: 400 });
                        setIsLoading(false);
                    }
                }}>Register</LoadingButton>
            </div>
            <Snackbar open={message} autoHideDuration={3000} onClose={() => setMessage(null)}>
                <Alert onClose={() => setMessage(null)} severity={message && message.status === 200 ? "success" : "error"} sx={{ width: '100%' }}>
                    {message ? message.text : ''}
                </Alert>
            </Snackbar>
        </div>
    </div>
}

export default Registration;