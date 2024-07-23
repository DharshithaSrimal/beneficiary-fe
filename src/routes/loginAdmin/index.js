import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import Loading from '../../components/loading';
import './styles.css';

const LoginAdmin = () => {
    const [isLoading, setIsLoading] = useState(false);

    return <div className='login-container'>
        <img src='/logo512.png' className='login-img' alt='Logo' />
        <h1 className='title'>Beneficiary Portal</h1>
        <div className='login-form'>
            <div className='input-row'>
                <label>Username</label>
                <TextField placeholder='Username' size='small' />
            </div>
            <div className='input-row'>
                <label>Password</label>
                <TextField placeholder='Password' size='small' type='password' />
            </div>
            <div className='login-btn'>
                { !isLoading ? <Button variant="outlined" size="small" onClick={()=>{
                    setIsLoading(true);
                    setTimeout(()=>{
                        setIsLoading(false);
                        window.sessionStorage.setItem('role','admin');
                        window.location.href = '/';
                    },3000)
                }}>
                    Login
                </Button>
                : <Loading/> }
            </div>
        </div>
        {/* <a className='link' href='/'>Admin Portal</a> */}
    </div>
}

export default LoginAdmin;