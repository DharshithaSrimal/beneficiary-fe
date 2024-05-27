import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { LoadingButton } from '@mui/lab';

export default function ChangePasswordForm({ open, setOpen }) {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Account Password</DialogTitle>
        <DialogContent>
          <label>Current Password</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="password"
            fullWidth
            size='small'
            variant="outlined"
          />
          <label>New Password</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="password"
            fullWidth
            size='small'
            variant="outlined"
          />
          <label>Re-type New Password</label>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            type="password"
            fullWidth
            size='small'
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <LoadingButton variant='contained' loading={isLoading} onClick={handleClose}>Submit</LoadingButton>
        </DialogActions>
      </Dialog>
  );
}