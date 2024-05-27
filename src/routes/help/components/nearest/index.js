import { Button } from "@mui/material"
import './styles.css';
import Map from "../../../../components/map";

const Nearest = () => {
    return <div className="nearest-container">
        <div className="nearest-side left-container">
            <h2>Check nearest Vaccination Center</h2>
            <Button className="nearest-side">
                Nearest
            </Button>
            <Button className="nearest-side">
                All
            </Button>
        </div>
        <div className="nearest-side">
            <Map position={[0, 0]} />
        </div>
    </div>
}

export default Nearest;