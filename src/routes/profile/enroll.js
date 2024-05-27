import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert } from '@mui/material';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { API_URL, getCookie } from '../../constants';

export default function EnrollForm({ open, setOpen, refresh }) {
  // 0 - input, 1 - invalid input, 2 - otp, 3 - success, 4 - retry
  const [stage, setStage] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [otp, setOtp] = React.useState("");
  const [error, setError] = React.useState(null);
  const epiRef = React.useRef("");
  const beneficiaryRef = React.useRef("");
  const foolhumaRef = React.useRef("");
  const otpRef = React.useRef("");

  const handleClose = () => {
    setOpen(false);
    setStage(0);
  };

  const InputScreen = () => (<>
    <DialogContent>
      <label>EPI No</label>
      <TextField
        autoFocus
        margin="dense"
        id="epi"
        fullWidth
        variant='outlined'
        size='small'
        inputRef={epiRef}
      />
      <label>Beneficiary ID</label>
      <TextField
        autoFocus
        margin="dense"
        id="beneficiary"
        fullWidth
        variant='outlined'
        size='small'
        inputRef={beneficiaryRef}
      />
      <label>Foolhuma ID</label>
      <TextField
        autoFocus
        margin="dense"
        id="foolhuma"
        fullWidth
        variant='outlined'
        size='small'
        inputRef={foolhumaRef}
      />
      {stage === 1 ? <Alert style={{ marginTop: 20 }} severity="error">Invalid combination of entries</Alert> : null}
      {stage === 5 ? <Alert style={{ marginTop: 20 }} severity="error">Patient Not Found</Alert> : null}
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button variant='contained' onClick={async () => {
        const epiVal = epiRef.current.value;
        const beneficiaryVal = beneficiaryRef.current.value;
        const foolhumaVal = foolhumaRef.current.value;
        if (epiVal === "" || beneficiaryVal === "" || foolhumaVal === "") {
          setStage(1);
        } else {
          setIsLoading(true);
          console.log("EPI",epiVal);
          try {
            fetch(await API_URL() + 'api/enrollPatient', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
              },
              body: JSON.stringify({
                epi: epiVal,
                beneficiary: beneficiaryVal,
                foolhuma: foolhumaVal
              })
            })
              .then(res => res.json())
              .then(out => {
                if (out.code == 200) {
                  console.log("ENROLL OTP",out);
                  setOtp(out.data.otp);
                  setStage(2);
                  setIsLoading(false);
                } else {
                  setStage(5);
                  setIsLoading(false);
                }
              })
              .catch(e => {
                console.log("Error", e);
                setStage(1);
                setIsLoading(false);
              })
          } catch (err) {
            console.log("Catch Error", err);
            setStage(1);
            setIsLoading(false);
          }
        }
      }}>Submit</Button>
    </DialogActions>
  </>)

  const OTPScreen = () => (<>
    <DialogContent>
      <DialogContentText>
        {stage !== 3 ? `Enter OTP(Temporary OTP is ${otp})` : ''}
      </DialogContentText>
      {stage !== 3 ? <TextField
        autoFocus
        margin="dense"
        id="otp"
        type="text"
        fullWidth
        variant='outlined'
        size='small'
        inputRef={otpRef}
      /> : null}
      {stage === 3 ? <div className='centered'><CheckCircleOutlinedIcon style={{ fontSize: '8rem', color: '#00eda6' }} /></div> : null}
      {stage === 4 ? <Alert style={{ marginTop: 20 }} severity="error">{error}</Alert> : null}
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>{stage === 3 ? 'Done' : 'Cancel'}</Button>
      {stage !== 3 ? <Button variant='contained' onClick={async () => {
        setIsLoading(true);
        const otp = otpRef.current.value;
        fetch(await API_URL() + 'api/validateEnroll', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-token': getCookie()
          },
          body: JSON.stringify({
            otp
          })
        })
          .then(res => res.json())
          .then(async out => {
            if (out.code == 200) {
              setStage(3);
              setIsLoading(false);
              refresh();
            } else {
              setStage(4);
              setError(out.errorMessage);
              setIsLoading(false);
            }
          })
          .catch(e => {
            console.log("Error", e);
            setError(e.toString());
            setStage(4);
            setIsLoading(false);
          })
      }}>Confirm</Button> : null}
    </DialogActions>
  </>)

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Enroll New Patient</DialogTitle>
      <div className='modal-container'>
        {isLoading ? <div className='centered' style={{ minHeight: '30vh' }}><img src='dhis_loading.svg' style={{ width: '50px', height: '50px' }} alt='loading' /></div> : <>{stage === 0 || stage === 1 || stage === 5 ? <InputScreen /> : <OTPScreen />}</>}
      </div>
    </Dialog>
  );
}