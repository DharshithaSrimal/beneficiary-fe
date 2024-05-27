import { Avatar, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Banner from '../../components/banner';
import QRCode from "react-qr-code";
import { forwardRef, PureComponent, useState } from 'react';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

class ChildProfile extends PureComponent {
    render() {
        const { user, pub } = this.props;

        const DetailSection = ({ title = '', fields = [] }) => {
            const [expanded, setExpanded] = useState(true);
            const headerStyle = {
                cursor: 'pointer',
                transform: expanded ? 'rotate(180deg)' : '',
                transition: 'transform 150ms ease',
            }
            return <div style={{ marginBottom: '1em' }}>
                <div style={{ paddingBottom: 3, borderBottom: '1px solid #d7d7d7', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h5 style={{ margin: 0, width: 'fit-content' }}>{title}</h5>
                    <div onClick={() => setExpanded(!expanded)}><ExpandCircleDownTwoToneIcon color='primary' style={headerStyle} /></div>
                </div>
                {expanded ? <div>
                    <Grid container spacing={2} style={{ marginTop: '1em' }}>
                        {fields.map((field) => <Grid item xs={6}><DetailRow title={field.title} prop={field.value} /></Grid>)}
                    </Grid>
                </div> : null}
            </div>
        }

        const DetailRow = ({ title, prop }) => {
            return <div style={{ textAlign: 'start', display: 'flex', justifyContent: 'space-between', margin: '5px 0px 5px 0' }}>
                <p style={{ margin: 0, fontSize: '0.7em', padding: 0 }}>{title}</p>
                <h5 style={{ margin: 0 }}>{user ? user[prop] : ''}</h5>
            </div>
        }

        return <div style={{ margin: '0 2%' }}>
            <Grid container spacing={1} className='centered' style={{ marginTop: '1em' }}>
                <Grid item xs={3} className='no-padding' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <QRCode value={`${window.location.origin}/publicProfile/${user.qr}`} size={80} />
                </Grid>
                <Grid item xs={6} className='no-padding'>
                    <DetailRow title="EPI No." prop="epi" />
                    <DetailRow title="Beneficiary No." prop="nic" />
                    <DetailRow title="Foolhuma No." prop="foolhuma" />
                </Grid>
                <Grid item xs={3} className='no-padding' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar children={user.url ? null : (user.name ? user.name[0] : '')} sx={{ bgcolor: deepPurple[300], width: 70, height: 70, fontSize: 30 }} src={user.url} />
                </Grid>
            </Grid>
            <h4 style={{ textAlign: 'center' }}>{user.name}</h4>
            <DetailSection
                title='Personal Information'
                fields={[
                    { title: 'Child Name :', value: 'name' },
                    { title: 'Firstname :', value: 'firstname' },
                    { title: 'Midname :', value: 'midname' },
                    { title: 'Surname :', value: 'surname' },
                    { title: 'EPI No. :', value: 'epi' },
                    { title: 'Beneficiary NIC :', value: 'nic' },
                    { title: 'Foolhuma No. :', value: 'foolhuma' },
                    { title: 'Child DOB :', value: 'dob' },
                    { title: 'Gender :', value: 'sex' },
                ]}
            />
            <DetailSection
                title='Residential Information'
                fields={[
                    { title: 'Island of Residence :', value: 'residential_island' },
                    { title: 'Residence No :', value: 'residential_no' },
                ]}
            />
            <DetailSection
                title="Mother's Information"
                fields={[
                    { title: "Mother's First Name", value: 'mother_firstname' },
                    { title: "Mother's Last Name", value: 'mother_lastname' },
                    { title: "Mother's NIC", value: 'mother_nic' },
                    { title: "Mother's Contact No.", value: 'mother_contact' },
                ]}
            />
            {!pub ? <DetailSection
                title="Care Giver's Information"
                fields={[
                    { title: "Care Giver's First Name", value: 'careGiver_firstname' },
                    { title: "Care Giver's Last Name", value: 'careGiver_lastname' },
                    { title: "Care Giver's NIC", value: 'careGiver_nic' },
                    { title: "Care Giver's Contact No.", value: 'careGiver_contact' },
                ]}
            /> : null}
        </div>
    }
}

export default ChildProfile;