import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Alert, CircularProgress, Snackbar } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { API_URL, getCookie } from '../../constants';
import OtpInput from 'react-otp-input';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Enrollment({ open = false, setOpen, id, refresh }) {

    const [str, setStr] = React.useState(["", "", "", "", "", ""]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [stage, setStage] = React.useState(0);
    const [error, setError] = React.useState("");
    const [otp, setOtp] = React.useState("");
    const titles = ["Enroll new Beneficiary", "Verify Enrollment", "Success"];
    const nicRef = React.useRef(null);
    const contactRef = React.useRef(null);
    const foolhumaRef = React.useRef(null);

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            refresh();
            setOpen(null);
            setStage(0);
        } else {
            if (stage === 0 || stage === 2) {
                refresh();
                setOpen(null);
            }
            setStage(0);
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
        setError("");
        fetch(await API_URL() + 'api/validateEnroll', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
            body: JSON.stringify({
                id,
                otp: `${otp}`
            })
        })
            .then(res => res.json())
            .then(out => {
                if (out.success === true) {
                    setStage(2);
                } else {
                    setError(out.errorMessage.message);
                }
                setIsLoading(false);
            })
            .catch(err => {
                console.log("Error Catch", err);
                setIsLoading(false);
                setError('OTP verification unsuccessful');
            })
    }

    const OtpBox = { padding: 5, width: '1.5em', height: '1.5em', fontSize: '1.5em', textAlign: 'center', border: '1px solid #344966', borderRadius: 5, margin: 2 };
    const TxtBox = { padding: 5, width: '-webkit-fill-available', height: '1.5em', fontSize: '1em', textAlign: 'left', border: '1px solid #344966', borderRadius: 5, margin: 2 };

    const Register = () => (<>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <DialogContent>
                <p style={{ color: '#344966', margin: 5, fontSize: '0.8em' }}>Beneficiary National ID</p>
                <input type="text" size="small" style={TxtBox} placeholder="Beneficiary National ID" ref={nicRef} />
                <p style={{ color: '#344966', margin: 5, fontSize: '0.8em' }}>Beneficiary Contact No</p>
                <input type="number" size="small" style={TxtBox} placeholder="Contact No" ref={contactRef} />
                {/* <p style={{ color: '#344966', margin: 5, fontSize: '0.8em' }}>Foolhuma Form Number (Optional)</p> */}
                <input type="hidden" size="small" style={TxtBox} placeholder="Foolhuma Form Number" ref={foolhumaRef} />
                {/* <p style={{ color: '#ff3582', margin: 5, fontSize: '0.8em' }}>{error}</p> */}
            </DialogContent>
            <DialogActions>
                {!isLoading ? <Button onClick={handleClose} style={{ fontSize: '0.8em', background: '#ff3582', color: 'white' }}>Dismiss</Button> : null}
                <LoadingButton onClick={async () => {
                    if (nicRef.current.value === "") {
                        setError("Beneficiary National ID Required");
                    } else {
                        const bodyContent = {
                            beneficiary: nicRef.current.value,
                            contact: contactRef.current.value,
                            foolhuma: foolhumaRef.current.value
                        };
                        setError("");
                        setIsLoading(true);
                        try {
                            fetch(await API_URL() + 'api/enrollChild', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'x-token': getCookie()
                                },
                                body: JSON.stringify(bodyContent)
                            })
                                .then(res => res.json())
                                .then(out => {
                                    if (out.code == 200) {
                                        setOtp(out.data.otp);
                                        setStage(1);
                                        setIsLoading(false);
                                    } else {
                                        setStage(0);
                                        setError(out.errorMessage.message);
                                        setIsLoading(false);
                                    }
                                })
                                .catch(e => {
                                    console.log("Error", e);
                                    setStage(0);
                                    setError(e.errorMessage.message);
                                    setIsLoading(false);
                                })
                        } catch (err) {
                            console.log("Catch Error", err);
                            setError(err.toString());
                            setStage(0);
                            setIsLoading(false);
                        }
                    }
                }} loading={isLoading} variant="contained" style={{ fontSize: '0.8em' }}>Enroll</LoadingButton>
            </DialogActions>
        </div>
    </>);

    const Otp = () => (<>
        <DialogContent>
            <p style={{ color: '#344966', textAlign: 'center', margin: 5, fontSize: '0.8em' }}>Enter OTP({otp}) to verify enrollment</p>
            {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                <input type="number" style={OtpBox} maxLength={1} value={str[0]} onChange={(e) => changeText(e, 0)} />
                <input type="number" style={OtpBox} maxLength={1} value={str[1]} onChange={(e) => changeText(e, 1)} />
                <input type="number" style={OtpBox} maxLength={1} value={str[2]} onChange={(e) => changeText(e, 2)} />
                <input type="number" style={OtpBox} maxLength={1} value={str[3]} onChange={(e) => changeText(e, 3)} />
                <input type="number" style={OtpBox} maxLength={1} value={str[4]} onChange={(e) => changeText(e, 4)} />
                <input type="number" style={OtpBox} maxLength={1} value={str[5]} onChange={(e) => changeText(e, 5)} />
            </div> */}
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                inputStyle={{ width: '2em', height: '2em' }}
                containerStyle={{ justifyContent: 'center' }}
                separator={<span>&nbsp;&nbsp;</span>}
            />
            <p style={{ color: '#ff3582', margin: 5, fontSize: '0.8em' }}>{error}</p>
        </DialogContent>
        <DialogActions>
            <LoadingButton loading={isLoading} onClick={submitOtp} variant="contained" style={{ fontSize: '0.8em' }}>Verify</LoadingButton>
        </DialogActions>
    </>);

    const Confirmed = () => (<>
        <div style={{ display: 'flex', height: '30vh', width: '30vw', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <CheckCircleRoundedIcon style={{ color: '#2ff498', fontSize: '3em' }} />
            <p style={{ color: '#7A918D', textAlign: 'center', margin: 5, fontSize: '0.8em' }}>
                Enroll verified
            </p>
        </div>
        <DialogActions>
            <Button onClick={handleClose} style={{ fontSize: '0.8em', background: '#7A918D', color: 'white' }}>Done</Button>
        </DialogActions>
    </>);

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle style={{ background: '#344966', color: '#B4CDED' }}>
                    <h6 style={{ margin: 0, textAlign: 'center' }}>{titles[stage]}</h6>
                </DialogTitle>
                <div style={{ minWidth: '30vw' }}>
                    {stage === 0 ? <Register /> : null}

                    {stage === 1 ? <div><Otp /></div> : null}

                    {stage === 2 ? <div><Confirmed /></div> : null}
                </div>
            </Dialog>
            <Snackbar open={error !== ""} onClose={()=>setError("")}>
                <Alert onClose={()=>setError("")} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </>
    );
}