import { LoadingButton } from '@mui/lab';
import { Alert, Snackbar, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { API_URL } from '../../constants';
import './styles.css';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return <div className='login-container'>
        <img src='/logo512.png' className='login-img' alt='Logo' />
        <h1 className='title'>Electronic Immunization Registry Beneficiary Portal</h1>
        <div className='login-form'>
            <div className='input-row'>
                <label>Email/Mobile</label>
                <TextField placeholder='Email/Mobile' type="email" size='small' inputRef={emailRef} />
            </div>
            <div className='input-row'>
                <label>Password</label>
                <TextField placeholder='Password' size='small' type='password' inputRef={passwordRef} />
            </div>
            <div className='login-btn'>
                <LoadingButton variant="outlined" loading={isLoading} size="small" onClick={async () => {
                    setIsLoading(true);
                    if (emailRef.current.value && passwordRef.current.value) {
                        var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
                        var mobileformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
                        if (emailRef.current.value.match(mailformat) || emailRef.current.value.match(mobileformat)) {
                            const out = await (await fetch(`${await API_URL()}pub/login`, {
                                method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
                                    email: emailRef.current.value,
                                    mobile: emailRef.current.value,
                                    password: passwordRef.current.value,
                                })
                            })).json();
                            if(out.code === 200) {
                                setMessage({ text: "Login Successful", status: 200 });
                                // document.cookie = `dhis_token=${out.data.token};Secure;`;
                                document.cookie = `dhis_token=${out.data.token};`;
                                localStorage.setItem('dhis_user',JSON.stringify(out.data.user));
                                setTimeout(()=>window.location.href = '/',2000);
                            } else {
                                setMessage({ text: out.errorMessage, status: 400 });
                            }
                        } else {
                            setMessage({ text: "Invalid Email/Mobile", status: 400 });
                        }
                    } else {
                        setMessage({ text: "Email/Mobile and password required", status: 400 });
                    }
                    setIsLoading(false);
                }}>Login</LoadingButton>
            </div>
        </div>
        <Snackbar open={message} autoHideDuration={3000} onClose={() => setMessage(null)}>
            <Alert onClose={() => setMessage(null)} severity={message && message.status === 200 ? "success" : "error"} sx={{ width: '100%' }}>
                {message ? message.text : ''}
            </Alert>
        </Snackbar>
        {/* <a className='link' href='/loginAdmin'>Admin Portal</a> */}
        <a style={{ marginTop: 10 }} className='link' href='/register'>Register</a>
    </div>
}

export default Login;