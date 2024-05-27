import { Button, Dialog, DialogContent } from "@mui/material";
import DeleteSweepTwoToneIcon from '@mui/icons-material/DeleteSweepTwoTone';
import { LoadingButton } from "@mui/lab";
import { API_URL, getCookie } from "../../constants";
import { useState } from "react";

const Delete = ({ open, setClose, user, refresh }) => {
    const [loading,setLoading] = useState(false);
    return <Dialog open={open} onClose={setClose}>
        <DialogContent>
            <div style={{ textAlign: 'center' }}>
                <DeleteSweepTwoToneIcon style={{ color: '#FE6D73', padding: 5, borderRadius: '1em', border: '1px solid #FE6D73' }} />
                <h5 style={{ margin: 0 }}>Unenroll {user.name}</h5>
                <p style={{ fontSize: '0.7em', marginTop: '2em' }}>
                    Do you want to un-enroll {user.epi} - {user.name} from your enrollments?
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2em' }}>
                    <LoadingButton variant="contained" size="small" style={{ margin: 2, background: '#344966' }}
                        loading={loading}
                        onClick={async () => {
                            setLoading(true);
                            try {
                                fetch(await API_URL() + 'api/deletePatient', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'x-token': getCookie()
                                    },
                                    body: JSON.stringify({
                                        epi: user.epi,
                                        beneficiary: user.nic,
                                        foolhuma: user.foolhuma ?? "TEST"
                                    })
                                })
                                    .then(res => res.json())
                                    .then(out => {
                                        if (out.code == 200) {
                                            console.log("Deletion", out);
                                            setLoading(false);
                                            setClose();
                                            refresh();
                                        } else {
                                            setLoading(false);
                                        }
                                    })
                                    .catch(e => {
                                        console.log("Error", e);
                                        setLoading(false);
                                    })
                            } catch (err) {
                                console.log("Catch Error", err);
                                setLoading(false);
                            }
                        }}>Yes</LoadingButton>
                    <Button variant="outlined" size="small" style={{ margin: 2, color: '#344966', borderColor: '#344966' }} onClick={setClose}>No</Button>
                </div>
            </div>
        </DialogContent>
    </Dialog>
}

export default Delete;