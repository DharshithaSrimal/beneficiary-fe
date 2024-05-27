import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Header from '../../components/header';
import './styles.css';
import Nearest from './components/nearest';

const Help = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return <div className='dashboard-container'>
        <Header />
        <div className='dashboard-wrapper'>
            <div className='content-wrapper help-centered'>
                <h4>Help Desk & Information Center</h4>
            </div>
            <div className='content-section content-wrapper'>
                <Box sx={{ width: '100%', typography: 'body1' }} className='spread'>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Nearest Vaccination Center" value="1" />
                                <Tab label="About This Portal" value="2" />
                                <Tab label="About Immunization" value="3" />
                                <Tab label="Contact Information" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1" className='overflow full-height'><Nearest /></TabPanel>
                        <TabPanel value="2" className='overflow full-height'>About this portal</TabPanel>
                        <TabPanel value="3" className='overflow full-height'>About Immunization</TabPanel>
                        <TabPanel value="4" className='overflow full-height'>Contact Information</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>
    </div>
}

export default Help;