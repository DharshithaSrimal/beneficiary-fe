import { Fab } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";
import { useReactToPrint } from 'react-to-print';
import { API_URL, childhood, getCookie, hpv, optionalVaccines, pregnancyVaccines, tdv, travellerVaccines, vaccineMap } from "../../constants";
import PrintIcon from '@mui/icons-material/Print';

const Public = () => {
    const { id } = useParams();
    const [fetchStatus, setFetchStatus] = useState(0);
    const [profile, setProfile] = useState(null);
    const [optionalVaccines, setOptionalVaccines] = useState([]);
    const [pregnancyVaccines, setPregnancyVaccines] = useState([]);
    const [travellerVaccines, setTravellerVaccines] = useState([]);

    const HeaderItem = ({ text }) => <div style={{
        background: '#dce2e6', border: '1px solid #377aac', display: 'flex', fontWeight: 'bold',
        justifyContent: 'center', alignContent: 'center', padding: '0.5em', width: 'calc(100%/9)'
    }}>
        {text}
    </div>

    const DataBox = ({ text }) => <div style={{
        border: '1px solid #377aac', display: 'flex',
        justifyContent: 'center', alignContent: 'center', padding: '0.5em', width: 'calc(100%/9)', color: text !== 'DD/MM/YYYY' ? '#344966' : '#a7a7a7'
    }}>
        {text}
    </div>

    const VaccineBox = ({ text }) => <div style={{
        background: 'white', border: '1px solid #377aac', display: 'flex', fontWeight: 'bold',
        justifyContent: 'center', alignContent: 'center', padding: '0.5em', width: 'calc(100%/9)'
    }}>
        {text}
    </div>

    const EmptyBox = () => <div style={{
        background: '#e6e7e9', display: 'flex', justifyContent: 'center',
        alignContent: 'center', padding: 'calc(0.5em + 1px)', width: 'calc(100%/9)'
    }}>
        &nbsp;
    </div>

    const retrieveDate = (list, vaccine) => {
        const vac = list.filter((item) => item.dataElement === vaccine);
        if (vac && vac.length > 0) {
            return new Date(vac[0].date).toLocaleDateString();
        }
        return "-";
    }

    const checkAvailability = (list, vaccines) => {
        const full = list.map((item) => item.dataElement);
        for (let i = 0; i < vaccines.length; i++) {
            if (full.includes(vaccines[i])) {
                return true;
            }
        }
        return false;
    }

    const checkOptionals = (list) => {
        const vaccs = [];
        optionalVaccines.forEach((vac) => {
            const out = list.filter((item) => item.dataElement === vac.id);
            if (out && out.length > 0) {
                vac.date = new Date(out[0].date).toLocaleDateString();
                vaccs.push(vac);
            }
        })
        return vaccs;
    }

    const checkPregnancy = (list) => {
        const vaccs = [];
        pregnancyVaccines.forEach((vac) => {
            const out = list.filter((item) => item.dataElement === vac.id);
            if (out && out.length > 0) {
                vac.date = new Date(out[0].date).toLocaleDateString();
                vaccs.push(vac);
            }
        })
        return vaccs;
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

    const getVaccines = (list, vaccines) => {
        const vaccs = [];
        vaccines.forEach((vac) => {
            const out = list.filter((item) => item.dataElement === vac.id);
            if (out && out.length > 0 && out[0].value === 'true') {
                vac.date = new Date(out[0].date).toLocaleDateString();
                vaccs.push(vac);
            }
        })
        return vaccs;
    }

    useEffect(() => {
        setFetchStatus(0);
        fetchVaccineCard()
    }, []);

    const printRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    const ReportContent = React.forwardRef((props, ref) => {
        return (<div ref={ref} style={{ width: '100%', height: '100%', minHeight: '100vh', backgroundImage: `url('/vac_bg.png')`, backgroundRepeat: 'repeat', backgroundSize: '75px 75px' }}>
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
            <h2 style={{ textAlign: 'center' }}>Digital Vaccination Record</h2>

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
                    {profile ? <QRCode value={`${window.location.origin}/public/${profile.qr}`} size={100} /> : null}
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

            <div style={{ fontSize: '13px' }}>
                {fetchStatus === 1 && profile && checkAvailability(profile.events, childhood.map((i) => i.id)) > 0 ? <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <h5>Childhood Immunization (EPI):</h5>
                    <div className="desktop">
                        <table style={{ width: '100%' }}>
                            <tr>
                                <th style={{ width: '12.5%' }} className="filled">Vaccines</th>
                                <th style={{ width: '12.5%' }} className="filled">At Birth</th>
                                <th style={{ width: '12.5%' }} className="filled">2 Month</th>
                                <th style={{ width: '12.5%' }} className="filled">4 Month</th>
                                <th style={{ width: '12.5%' }} className="filled">6 Month</th>
                                <th style={{ width: '12.5%' }} className="filled">9 Month</th>
                                <th style={{ width: '12.5%' }} className="filled">18 Month</th>
                                <th style={{ width: '12.5%' }} className="filled">4 Years</th>
                            </tr>
                            <tr><td style={{ textAlign: 'left' }}>BCG</td><td>{retrieveDate(profile.events, "bpBUOvqy1Jn")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                            <tr><td style={{ textAlign: 'left' }}>Hepatitis B</td><td>{retrieveDate(profile.events, "qEtgKXZlMLE")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                            <tr><td style={{ textAlign: 'left' }}>OPV</td><td className="filled"></td><td>{retrieveDate(profile.events, "sDORmAKh32v")}</td><td>{retrieveDate(profile.events, "y6rSBDtdDcJ")}</td><td>{retrieveDate(profile.events, "OnlLh4TE6Zs")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                            <tr><td style={{ textAlign: 'left' }}>Pentavelant</td><td className="filled"></td><td>{retrieveDate(profile.events, "K3TcJM1ySQA")}</td><td>{retrieveDate(profile.events, "GPOoPDqle3V")}</td><td>{retrieveDate(profile.events, "pxCZNoqDVJC")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                            <tr><td style={{ textAlign: 'left' }}>IPV</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td>{retrieveDate(profile.events, "Fu83xQ4NKuQ")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                            <tr><td style={{ textAlign: 'left' }}>MR</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td>{retrieveDate(profile.events, "OKhx1HFPhRs")}</td><td className="filled"></td><td className="filled"></td></tr>
                            <tr><td style={{ textAlign: 'left' }}>MMR</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td>{retrieveDate(profile.events, "wpadSrcnZsO")}</td><td className="filled"></td></tr>
                            <tr><td style={{ textAlign: 'left' }}>DPT Booster</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td>{retrieveDate(profile.events, "zh5oKBRevny")}</td></tr>
                        </table>
                    </div>
                    <div className="mobile">
                        <table style={{ width: '100%' }}>
                            <tr>
                                <th className="filled">Vaccines</th>
                                <th className="filled">Period</th>
                                <th className="filled">Date Given</th>
                            </tr>
                            <tr><td style={{ textAlign: 'left' }}>BCG</td><td className="filled">At Birth</td><td>{retrieveDate(profile.events, "bpBUOvqy1Jn")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>Hepatitis B</td><td className="filled">At Birth</td><td>{retrieveDate(profile.events, "qEtgKXZlMLE")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>OPV 1</td><td className="filled">2 Months</td><td>{retrieveDate(profile.events, "sDORmAKh32v")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>OPV 2</td><td className="filled">4 Months</td><td>{retrieveDate(profile.events, "y6rSBDtdDcJ")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>OPV 3</td><td className="filled">6 Months</td><td>{retrieveDate(profile.events, "OnlLh4TE6Zs")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>Pentavelant 1</td><td className="filled">2 Months</td><td>{retrieveDate(profile.events, "K3TcJM1ySQA")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>Pentavelant 2</td><td className="filled">4 Months</td><td>{retrieveDate(profile.events, "GPOoPDqle3V")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>Pentavelant 3</td><td className="filled">6 Months</td><td>{retrieveDate(profile.events, "pxCZNoqDVJC")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>IPV</td><td className="filled">6 Months</td><td>{retrieveDate(profile.events, "Fu83xQ4NKuQ")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>MR</td><td className="filled">9 Months</td><td>{retrieveDate(profile.events, "OKhx1HFPhRs")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>MMR</td><td className="filled">18 Months</td><td>{retrieveDate(profile.events, "wpadSrcnZsO")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>DPT Booster</td><td className="filled">4 Years</td><td>{retrieveDate(profile.events, "zh5oKBRevny")}</td></tr>
                        </table>
                    </div>
                </div> : null}

                {fetchStatus === 1 && profile && checkAvailability(profile.events, hpv.map((i) => i.id)) ? <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <h5>HPV Vaccination:</h5>
                    <div>
                        <table style={{ width: '100%' }}>
                            <tr><td style={{ textAlign: 'left' }}>Dose 1</td><td>{retrieveDate(profile.events, "ZYsq1NLl1Vu")}</td><td style={{ textAlign: 'left' }}>Dose 2</td><td>{retrieveDate(profile.events, "IiLBbswLevW")}</td></tr>
                        </table>
                    </div>
                </div> : null}

                {fetchStatus === 1 && profile && checkAvailability(profile.events, tdv.map((i) => i.id)) ? <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <h5>TD Vaccination:</h5>
                    <div>
                        <table style={{ width: '100%' }}>
                            <tr><td style={{ textAlign: 'left' }}>Dose 1</td><td>{retrieveDate(profile.events, "J4WseLneG4k")}</td><td style={{ textAlign: 'left' }}>Dose 2</td><td>{retrieveDate(profile.events, "LHeNPTmC6RW")}</td><td>Dose 3</td><td>{retrieveDate(profile.events, "Ctucf2qbeZO")}</td></tr>
                            <tr><td style={{ textAlign: 'left' }}>Dose 4</td><td>{retrieveDate(profile.events, "wBsQ6OsAOBx")}</td><td style={{ textAlign: 'left' }}>Dose 5</td><td>{retrieveDate(profile.events, "lo5L11lJW0k")}</td><td>Dose 6</td><td>{retrieveDate(profile.events, "RWHNe8OmxXm")}</td></tr>
                        </table>
                    </div>
                </div> : null}

                {fetchStatus === 1 && profile && checkAvailability(profile.events, profile.optionals.map((i) => i.id)) ? <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <h5>Optional Immunizations:</h5>
                    <div>
                        <table style={{ width: '100%' }}>
                            {
                                getVaccines(profile.events, profile.optionals).map((item) => {
                                    return <tr>
                                        <td style={{ textAlign: 'left' }}>{item.name}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                </div> : null}

                {fetchStatus === 1 && profile && checkAvailability(profile.events, profile.pregnancy.map((i) => i.id)) ? <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <h5>Pregnancy Vaccines:</h5>
                    <div>
                        <table style={{ width: '100%' }}>
                            {
                                getVaccines(profile.events, profile.pregnancy).map((item) => {
                                    return <tr>
                                        <td style={{ textAlign: 'left' }}>{item.name}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                </div> : null}

                {fetchStatus === 1 && profile && profile.travellers ? <div style={{ marginLeft: 50, marginRight: 50 }}>
                    <h5>Traveller Vaccines:</h5>
                    <div className="desktop">
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
                    <div className="mobile">
                        <table style={{ width: '100%' }}>
                            <tr>
                                <th style={{ width: '30%' }} className="filled">Vaccine or Prophylaxis</th>
                                <th style={{ width: '10%' }} className="filled">Date of Vaccination</th>
                            </tr>
                            {
                                checkTravellers(profile.events, profile.travellers).map((item) => {
                                    return <tr>
                                        <td style={{ textAlign: 'left' }}>{item.name}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                })
                            }
                        </table>
                    </div>
                </div> : null}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 50, marginRight: 50 }}>
                <h6>Contact P: +960 123 123 | E: email@domain.com</h6>
                <h6 style={{ fontStyle: 'italic' }}>This certificate is generated on {new Date().getDate()}-{new Date().getMonth() + 1}-{new Date().getFullYear()}</h6>
            </div>
        </div>);
    })

    return <div>
        <ReportContent ref={printRef} />
        <Fab color="primary" aria-label="add" style={{ position: 'sticky', bottom: 20, left: '90%' }} onClick={handlePrint}>
            <PrintIcon />
        </Fab>
    </div>
}

export default Public;