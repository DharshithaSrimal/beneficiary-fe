import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading";
import { API_URL, getCookie, parsePatient } from "../../constants";
import ChildProfile from "./childProfile";
import './styles.css';
import NotFound from '../../assets/not_found.svg';

const PublicProfile = () => {
    const { id } = useParams();
    const [isLoading,setIsLoading] = useState(true);
    const [user,setUser] = useState(null);

    const fetchProfile = async () => {
        fetch(await API_URL() + `pub/getPatientProfile/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
        })
            .then(res => res.json())
            .then(out => {
                console.log(out);
                setIsLoading(false);
                if(out.code === 200) {
                    setUser(parsePatient(out.data.profile));
                }
            })
            .catch(err => console.log("Error Catch", err))
    }

    useEffect(()=>{
        fetchProfile();
    },[]);

    return <>
        <div className="container centered vertical">
            {isLoading ? <Loading/> : <>
                {user ? <div style={{ margin: '3%', minWidth: '80vw' }}>
                    <ChildProfile user={user} pub/>
                </div> : <>
                <img src={NotFound} alt="No Profile" width={150}/>
                <p>Profile Not Found</p>
                </>}
            </>}
        </div>
    </>
}

export default PublicProfile;