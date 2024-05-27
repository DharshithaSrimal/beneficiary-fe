import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { CircularProgress } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { API_URL, getCookie } from '../../constants';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function OTPScreen({ open = false, setOpen, id, refresh }) {

    const [str, setStr] = React.useState(["", "", "", "", "", ""]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [completed, setCompleted] = React.useState(false);
    const [message, setMessage] = React.useState(null);

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            refresh();
            setOpen(null);
        }
    };

    const changeText = (e, pos) => {
        const tempStr = [...str];
        if (e.target.value.length < 2) {
            tempStr[pos] = e.target.value;
        }
        setStr(tempStr);
    }

    const submitOtp = async () => {
        setIsLoading(true);
        fetch(await API_URL() + 'api/verifyAppointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
            body: JSON.stringify({
                id,
                otp: `${str[0]}${str[1]}${str[2]}${str[3]}${str[4]}${str[5]}`
            })
        })
        .then(res => res.json())
        .then(out => {
            console.log("Appointment OUT", out);
            if(out.success === true) {
                setCompleted(true);
            } else {
                setMessage(out.errorMessage.message);
                setCompleted(false);
            }
            setIsLoading(false);
        })
        .catch(err => {
            console.log("Error Catch", err);
            setIsLoading(false);
            setMessage({ status: 400, text: 'OTP verification unsuccessful' })
        })
    }

    const OtpBox = { padding: 5, width: '1.5em', height: '1.5em', fontSize: '1.5em', textAlign: 'center', border: '1px solid #344966', borderRadius: 5, margin: 2 };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            {isLoading ? <div style={{ display: 'flex', height: '30vh', width: '30vw', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></div>
                : (completed ? <div><div style={{ display: 'flex', height: '30vh', width: '30vw', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <CheckCircleRoundedIcon style={{ color: '#2ff498', fontSize: '5em' }} />
                    <p style={{ color: '#7A918D', textAlign: 'center', margin: 5, fontSize: '0.8em' }}>
                        Appointment verified
                    </p>
                </div>
                    <DialogActions>
                        <Button onClick={handleClose} style={{ fontSize: '0.8em', background: '#7A918D', color: 'white' }}>Done</Button>
                    </DialogActions>
                </div>
                    : <><DialogTitle style={{ background: '#344966', color: '#B4CDED' }}>
                        <h6 style={{ margin: 0, textAlign: 'center' }}>Verify Appointment</h6>
                    </DialogTitle>
                        <DialogContent>
                            <p style={{ color: '#344966', textAlign: 'center', margin: 5, fontSize: '0.8em' }}>Enter OTP({open}) to verify appointment</p>
                            <div style={{ display: 'flex' }}>
                                <input type="number" style={OtpBox} maxLength={1} value={str[0]} onChange={(e) => changeText(e, 0)} />
                                <input type="number" style={OtpBox} maxLength={1} value={str[1]} onChange={(e) => changeText(e, 1)} />
                                <input type="number" style={OtpBox} maxLength={1} value={str[2]} onChange={(e) => changeText(e, 2)} />
                                <input type="number" style={OtpBox} maxLength={1} value={str[3]} onChange={(e) => changeText(e, 3)} />
                                <input type="number" style={OtpBox} maxLength={1} value={str[4]} onChange={(e) => changeText(e, 4)} />
                                <input type="number" style={OtpBox} maxLength={1} value={str[5]} onChange={(e) => changeText(e, 5)} />
                            </div>
                            <p style={{ color: 'rgb(254 59 119)', textAlign: 'center', margin: 5, fontSize: '0.8em' }}>{message}</p>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={submitOtp} style={{ fontSize: '0.8em', background: '#7A918D', color: 'white' }}>Verify</Button>
                        </DialogActions></>)}
        </Dialog>
    );
}