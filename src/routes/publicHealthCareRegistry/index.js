import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../../components/header';
import './styles.css';

const PublicHealthCareRegistry = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div className='dashboard-container'>
        <Header />
        <div className='dashboard-wrapper'>
            <div className='content-wrapper help-centered'>
                <h4>Public Health Care Registry</h4>
            </div>
            <div className='content-section content-wrapper'>
                <Box sx={{ width: '100%', typography: 'body1' }} className='spread'>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Diagnosis" value="1" />
                                <Tab label="Visits" value="2" />
                                <Tab label="Examinations" value="3" />
                                <Tab label="Investigations" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" className='overflow full-height'>Diagnosis</TabPanel>
                        <TabPanel value="2" className='overflow full-height'>Visits</TabPanel>
                        <TabPanel value="3" className='overflow full-height'>Examinations</TabPanel>
                        <TabPanel value="4" className='overflow full-height'>Investigations</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    </div>
}

export default PublicHealthCareRegistry;