import { Card } from '@mui/material';
import './styles.css'

const Banner = ({ title, value }) => {
    return <Card style={{ background: '#1976d2' }}>
        <h2 className='whited' style={{ paddingTop: 10 }}>{value}</h2>
        <div style={{ lineHeight: 1.125, minHeight: '3.5em' }}>
            <p className='whited'>{title}</p>
        </div>
    </Card>
}

export default Banner;