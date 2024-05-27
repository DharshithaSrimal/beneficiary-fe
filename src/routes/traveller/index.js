import { Fab } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import { API_URL, childhood, getCookie, hpv, optionalVaccines, pregnancyVaccines, tdv, travellerVaccines, vaccineMap } from "../../constants";
import PrintIcon from '@mui/icons-material/Print';

const Traveller = () => {
    const { id } = useParams();
    const [fullEvents, setFullEvents] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(0);
    const [profile, setProfile] = useState(null);
    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    const checkAvailability = (list, vaccines) => {
        const full = list.map((item) => item.dataElement);
        for (let i = 0; i < vaccines.length; i++) {
            if (full.includes(vaccines[i])) {
                return true;
            }
        }
        return false;
    }

    const checkTravellers = (fullList, travellers) => {
        const vaccs = [];
        travellers.forEach((vac) => {
            const out = fullList.filter((item) => vac.ids.includes(item.dataElement));
            if (out && out.length > 0) {
                let included = false;
                const obj = {};
                vac.elements.forEach((elem) => {
                    const fltr = out.filter((v) => v.dataElement === elem.id);
                    if (fltr) {
                        if (elem.value === 'true') {
                            included = true;
                            obj.name = elem.name;
                        } else {
                            if (elem.id === "d0tPexALmou") {
                                obj.cdesig = elem.value;
                            } else if (elem.id === "u8RWacwNwUU") {
                                obj.cname = elem.value;
                            } else {
                                if (obj.other) {
                                    obj.other += ` ${elem.value} `;
                                } else {
                                    obj.other = elem.value;
                                }
                            }
                        }
                    }
                });
                if (included) {
                    obj.date = new Date(out[0].date).toLocaleDateString();
                    vaccs.push(obj);
                }
            }
        })
        return vaccs;
    }

    const fetchVaccineCard = async () => {
        fetch(await API_URL() + `pub/getPatientProfile/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'x-token': getCookie()
            },
        })
            .then(res => res.json())
            .then(out => {
                console.log("PUBLIC OUT", out);
                setProfile(out.data);
                setFetchStatus(1);
            })
            .catch(err => { console.log("Error Catch", err); setFetchStatus(2); })
    }

    useEffect(() => {
        setFetchStatus(0);
        fetchVaccineCard()
    }, []);

    const ReportContent = React.forwardRef((props, ref) => {
        return (<div ref={ref} style={{ width: '100%', height: 'auto', minHeight: '100vh', backgroundImage: `url('/vac_bg.png')`, backgroundRepeat: 'repeat', backgroundSize: '75px 75px' }}>
            <div className="desktop" style={{ width: '80%', display: 'flex', justifyContent: 'space-between', paddingTop: 30, margin: 'auto', alignItems: 'center' }}>
                <div style={{ width: 150 }}></div>
                <div style={{ display: 'flex' }}>
                    <img style={{ height: 80 }} src="/health_min.png" />
                    <img style={{ height: 80 }} src="/hpa_logo.png" />
                </div>
                <div style={{ width: 150, fontWeight: 'bold' }}>{fetchStatus === 1 && profile && profile.profile ? `No: ${profile.profile.id}` : null}</div>
            </div>
            <div className="mobile" style={{ width: '80%', margin: 'auto', paddingTop: '2em', textAlign: 'center' }}>
                <img style={{ height: 50 }} src="/health_min.png" />
                <img style={{ height: 50 }} src="/hpa_logo.png" />
                <div style={{ width: 150, fontWeight: 'bold', margin: 'auto' }}>{fetchStatus === 1 && profile && profile.profile ? `No: ${profile.profile.id}` : null}</div>
            </div>
            <h2 style={{ textAlign: 'center', maxWidth: '50%', margin: 'auto' }}>INTERNATIONAL CERTIFICATE OF VACCINATION OR PROPHYLAXIS</h2>

            {fetchStatus === 1 ? <div style={{ width: '100%' }}>
                <div className="desktop" style={{ display: 'flex', width: '60%', justifyContent: 'space-between', margin: 'auto', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, width: 200 }}>Name</h5>
                            <p style={{ padding: 0 }}>{profile && profile.profile ? `: ${profile.profile.name}` : ":"}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, width: 200 }}>Gender</h5>
                            <p style={{ padding: 0 }}>{profile && profile.profile ? `: ${profile.profile.sex === "M" ? "Male" : (profile.profile.sex === "F" ? "Female" : profile.profile.sex)}` : ":"}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, width: 200 }}>Date of Birth</h5>
                            <p style={{ padding: 0 }}>{profile && profile.profile ? `: ${profile.profile.dob}` : ":"}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, width: 200 }}>National ID/Passport No.</h5>
                            <p style={{ padding: 0 }}>{profile && profile.profile ? `: ${profile.profile.nic}` : ":"}</p>
                        </div>
                    </div>
                    {profile ? <QRCode value={`${window.location.origin}/traveller/${profile.qr}`} size={100} /> : null}
                </div>
                <div className="mobile" style={{ display: 'flex', width: '90%', justifyContent: 'space-between', margin: 'auto', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, width: 200 }}>Name</h5>
                            <p style={{ padding: 0 }}>{profile && profile.profile ? `: ${profile.profile.name}` : ":"}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, width: 200 }}>Gender</h5>
                            <p style={{ padding: 0 }}>{profile && profile.profile ? `: ${profile.profile.sex === "M" ? "Male" : (profile.profile.sex === "F" ? "Female" : profile.profile.sex)}` : ":"}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, width: 200 }}>Date of Birth</h5>
                            <p style={{ padding: 0 }}>{profile && profile.profile ? `: ${profile.profile.dob}` : ":"}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <h5 style={{ margin: 0, width: 200 }}>National ID/Passport No.</h5>
                            <p style={{ padding: 0 }}>{profile && profile.profile ? `: ${profile.profile.nic}` : ":"}</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
                        {profile ? <QRCode value={`${window.location.origin}/public/${profile.qr}`} size={100} /> : null}
                    </div>
                </div>
            </div> : (fetchStatus === 0 ? <div>Loading Info</div> : <div>QR Validation failed</div>)}

            {fetchStatus === 1 && profile && checkAvailability(profile.events, travellerVaccines.map((i) => i.id)) ? <div style={{ marginLeft: 50, marginRight: 50 }}>
                <h5>Traveller Vaccines:</h5>
                <div>
                    <table style={{ width: '100%' }}>
                        <tr>
                            <th style={{ width: '30%' }} className="filled">Vaccine or Prophylaxis</th>
                            <th style={{ width: '10%' }} className="filled">Date of Vaccination</th>
                            <th style={{ width: '20%' }} className="filled">Manufacturer & Batch Number</th>
                            <th style={{ width: '20%' }} className="filled">Name & Designation of Supervising Clinician</th>
                            <th style={{ width: '20%' }} className="filled">Place of Vaccination</th>
                        </tr>
                        {
                            checkTravellers(profile.events, profile.travellers).map((item) => {
                                console.log("RETURNING", item);
                                return <tr>
                                    <td style={{ textAlign: 'left' }}>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.other}</td>
                                    <td>{item.cname} - {item.cdesig}</td>
                                    <td>&nbsp;</td>
                                </tr>
                            })
                        }
                    </table>
                </div>
            </div> : null}

            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 50, marginRight: 50 }}>
                <h6>Contact P: +960 123 123 | E: email@domain.com</h6>
                <h6 style={{ fontStyle: 'italic' }}>This certificate is generated on {new Date().getDate()}-{new Date().getMonth() + 1}-{new Date().getFullYear()}</h6>
            </div>
        </div>);
    });

    return <div>
        <ReportContent ref={printRef} />
        <Fab color="primary" aria-label="add" style={{ position: 'absolute', bottom: 20, right: 20 }} onClick={handlePrint}>
            <PrintIcon />
        </Fab>
    </div>
}

export default Traveller;