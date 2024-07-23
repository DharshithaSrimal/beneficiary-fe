import { LoadingButton } from '@mui/lab';
import { Alert, Snackbar, TextField, Backdrop, CircularProgress, Button, FormControl } from '@mui/material';
import { useRef, useState } from 'react';
import { API_URL } from '../../constants';
import './styles.css';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return <div className='login-container'>

        <div>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        </div>
        
        <img src='/logo512.png' className='login-img' alt='Logo' />
        <h1 className='title'>Beneficiary Portal</h1>
        <FormControl className='login-form'>
            <div className='input-row help-centered'>
                <TextField type="email" id="standard-basic" size='small' label="Email / Mobile" variant="standard" inputRef={emailRef}/>
            </div>
            <br/>
            <div className='input-row help-centered'>
                <TextField type="password" id="standard-basic" size='small' label="Password" variant="standard" inputRef={passwordRef}/>
            </div>
            <div className='login-btn'>
                <LoadingButton variant="contained" loading={isLoading} onClick={async () => {
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
                                handleOpen();
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
        </FormControl>
        <Snackbar 
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "center"
            }} 
            open={message} 
            autoHideDuration={3000} 
            onClose={
                () => setMessage(null)
            }
        >

            <Alert variant="filled" onClose={() => setMessage(null)} severity={message && message.status === 200 ? "success" : "error"} sx={{ width: '100%' }}>
                {message ? message.text : ''}
            </Alert>

        </Snackbar>
        {/* <a className='link' href='/loginAdmin'>Admin Portal</a> */}
        <p>Do not have an account?</p>
        <Button variant="outlined" style={{ marginTop: 10 }} className='link' href='/register'>Register</Button>
    </div>
}

export default Login;