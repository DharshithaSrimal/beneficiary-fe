import { useEffect, useState } from "react"
import { vaccineMap, optionalVaccines, pregnancyVaccines, travellerVaccines, childhood, hpv, tdv } from "../../constants"

export const VaccineCard = ({ basic, full, vacs }) => {

    const [optionalVaccines, setOptionalVaccines] = useState([]);
    const [pregnancyVaccines, setPregnancyVaccines] = useState([]);
    const [travellerVaccines, setTravellerVaccines] = useState([]);

    useEffect(() => {
        setOptionalVaccines(vacs.optionals ?? []);
        setPregnancyVaccines(vacs.pregnancy ?? []);
        setTravellerVaccines(vacs.travellers ?? []);
    }, [vacs])

    const retrieveDate = (list, vaccine) => {
        const vac = list.filter((item) => item.dataElement === vaccine);
        if (vac && vac.length > 0 && vac[0].value === 'true') {
            let newDate = new Date(vac[0].date);
            newDate = newDate.getFullYear() + '-' + newDate.getMonth() + '-' + newDate.getDate();

            // console.log(newDate)

            return newDate;
        }
        return "-";
    }

    const checkOptionals = (list) => {
        const vaccs = [];
        optionalVaccines.forEach((vac) => {
            const out = list.filter((item) => item.dataElement === vac.id);
            if (out && out.length > 0 && out[0].value === 'true') {
                vac.date = new Date(out[0].date).toLocaleDateString();
                vaccs.push(vac);
            }
        })
        return vaccs;
    }

    const checkPregnancy = () => {
        const vaccs = [];
        pregnancyVaccines.forEach((vac) => {
            const out = full.filter((item) => item.dataElement === vac.id);
            if (out && out.length > 0 && out[0].value === 'true') {
                vac.date = new Date(out[0].date).toLocaleDateString();
                vaccs.push(vac);
            }
        })
        return vaccs;
    }

    const checkTravellers = (travellers) => {
        if (travellers && travellers.length > 0) {
            const vaccs = [];
            travellers.forEach((vac) => {
                const out = full.filter((item) => vac.ids.includes(item.dataElement));
                if (out && out.length > 0) {
                    let included = false;
                    const obj = {};
                    vac.elements.forEach((elem) => {
                        const fltr = out.filter((v) => v.dataElement === elem.id);
                        if (fltr && fltr.length > 0) {
                            console.log("FILTER 0", fltr[0]);
                            if (fltr[0].value === 'true') {
                                included = true;
                                obj.name = elem.name;
                                obj.date = new Date(fltr[0].date).toLocaleDateString();
                            } else {
                                if (fltr[0].dataElement === "d0tPexALmou") {
                                    obj.cdesig = fltr[0].value;
                                } else if (fltr[0].dataElement === "u8RWacwNwUU") {
                                    obj.cname = fltr[0].value;
                                } else {
                                    if (obj.other) {
                                        obj.other += ` ${fltr[0].value} `;
                                    } else {
                                        obj.other = fltr[0].value;
                                    }
                                }
                            }
                        }
                    });
                    if (included) {
                        console.log("In included", obj);
                        vaccs.push(obj);
                    }
                }
            })
            console.log("Returning Vacs", vaccs);
            return vaccs;
        } else {
            return [];
        }
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

    useEffect(() => {
        checkOptionals();
        checkPregnancy();
        // checkTravellers();
    }, []);

    return <div style={{ marginBottom: 200 }}>

        {checkAvailability(full, childhood.map((i) => i.id)) > 0 ? <div>
            <h5>Childhood Immunization (EPI):</h5>
            <div className="desktop">
                <table style={{ width: '100%' }}>
                    <tr className="tableheader">
                        <th style={{ width: '12.5%' }} className="filled">Vacciness</th>
                        <th style={{ width: '12.5%' }} className="filled">At Birth</th>
                        <th style={{ width: '12.5%' }} className="filled">2 Month</th>
                        <th style={{ width: '12.5%' }} className="filled">4 Month</th>
                        <th style={{ width: '12.5%' }} className="filled">6 Month</th>
                        <th style={{ width: '12.5%' }} className="filled">9 Month</th>
                        <th style={{ width: '12.5%' }} className="filled">18 Month</th>
                        <th style={{ width: '12.5%' }} className="filled">4 Years</th>
                    </tr>
                    <tr><td style={{ textAlign: 'left' }}>BCG</td><td>{retrieveDate(full, "bpBUOvqy1Jn")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                    <tr><td style={{ textAlign: 'left' }}>Hepatitis B</td><td>{retrieveDate(full, "qEtgKXZlMLE")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                    <tr><td style={{ textAlign: 'left' }}>OPV</td><td className="filled"></td><td>{retrieveDate(full, "sDORmAKh32v")}</td><td>{retrieveDate(full, "y6rSBDtdDcJ")}</td><td>{retrieveDate(full, "OnlLh4TE6Zs")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                    <tr><td style={{ textAlign: 'left' }}>Pentavelant</td><td className="filled"></td><td>{retrieveDate(full, "K3TcJM1ySQA")}</td><td>{retrieveDate(full, "GPOoPDqle3V")}</td><td>{retrieveDate(full, "pxCZNoqDVJC")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                    <tr><td style={{ textAlign: 'left' }}>IPV</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td>{retrieveDate(full, "Fu83xQ4NKuQ")}</td><td className="filled"></td><td className="filled"></td><td className="filled"></td></tr>
                    <tr><td style={{ textAlign: 'left' }}>MR</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td>{retrieveDate(full, "OKhx1HFPhRs")}</td><td className="filled"></td><td className="filled"></td></tr>
                    <tr><td style={{ textAlign: 'left' }}>MMR</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td>{retrieveDate(full, "wpadSrcnZsO")}</td><td className="filled"></td></tr>
                    <tr><td style={{ textAlign: 'left' }}>DPT Booster</td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td className="filled"></td><td>{retrieveDate(full, "zh5oKBRevny")}</td></tr>
                </table>
            </div>
            <div className="mobile">
                <table style={{ width: '100%' }}>
                    <tr>
                        <th className="filled">Vaccines</th>
                        <th className="filled">Period</th>
                        <th className="filled">Given</th>
                    </tr>
                    <tr><td style={{ textAlign: 'left' }}>BCG</td><td className="filled">At Birth</td><td>{retrieveDate(full, "bpBUOvqy1Jn")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>Hepatitis B</td><td className="filled">At Birth</td><td>{retrieveDate(full, "qEtgKXZlMLE")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>OPV 1</td><td className="filled">2 Months</td><td>{retrieveDate(full, "sDORmAKh32v")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>OPV 2</td><td className="filled">4 Months</td><td>{retrieveDate(full, "y6rSBDtdDcJ")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>OPV 3</td><td className="filled">6 Months</td><td>{retrieveDate(full, "OnlLh4TE6Zs")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>Pentavelant 1</td><td className="filled">2 Months</td><td>{retrieveDate(full, "K3TcJM1ySQA")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>Pentavelant 2</td><td className="filled">4 Months</td><td>{retrieveDate(full, "GPOoPDqle3V")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>Pentavelant 3</td><td className="filled">6 Months</td><td>{retrieveDate(full, "pxCZNoqDVJC")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>IPV</td><td className="filled">6 Months</td><td>{retrieveDate(full, "Fu83xQ4NKuQ")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>MR</td><td className="filled">9 Months</td><td>{retrieveDate(full, "OKhx1HFPhRs")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>MMR</td><td className="filled">18 Months</td><td>{retrieveDate(full, "wpadSrcnZsO")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>DPT Booster</td><td className="filled">4 Years</td><td>{retrieveDate(full, "zh5oKBRevny")}</td></tr>
                </table>
            </div>
        </div> : null}

        {checkAvailability(full, hpv.map((i) => i.id)) ? <div>
            <h5>HPV Vaccination:</h5>
            <div>
                <table style={{ width: '100%' }}>
                    <tr><td style={{ textAlign: 'left' }}>Dose 1</td><td>{retrieveDate(full, "ZYsq1NLl1Vu")}</td><td style={{ textAlign: 'left' }}>Dose 2</td><td>{retrieveDate(full, "IiLBbswLevW")}</td></tr>
                </table>
            </div>
        </div> : null}

        {checkAvailability(full, tdv.map((i) => i.id)) ? <div>
            <h5>TD Vaccination:</h5>
            <div>
                <table style={{ width: '100%' }}>
                    <tr><td style={{ textAlign: 'left' }}>Dose 1</td><td>{retrieveDate(full, "J4WseLneG4k")}</td><td style={{ textAlign: 'left' }}>Dose 2</td><td>{retrieveDate(full, "LHeNPTmC6RW")}</td><td>Dose 3</td><td>{retrieveDate(full, "Ctucf2qbeZO")}</td></tr>
                    <tr><td style={{ textAlign: 'left' }}>Dose 4</td><td>{retrieveDate(full, "wBsQ6OsAOBx")}</td><td style={{ textAlign: 'left' }}>Dose 5</td><td>{retrieveDate(full, "lo5L11lJW0k")}</td><td>Dose 6</td><td>{retrieveDate(full, "RWHNe8OmxXm")}</td></tr>
                </table>
            </div>
        </div> : null}

        {checkAvailability(full, optionalVaccines.map((i) => i.id)) ? <div>
            <h5>Optional Immunizations:</h5>
            <div>
                <table style={{ width: '100%' }}>
                    {
                        checkOptionals(full).map((item) => {
                            return <tr>
                                <td style={{ textAlign: 'left' }}>{item.name}</td>
                                <td>{item.date}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
        </div> : null}

        {checkAvailability(full, pregnancyVaccines.map((i) => i.id)) ? <div>
            <h5>Pregnancy Vaccinations:</h5>
            <div>
                <table style={{ width: '100%' }}>
                    {
                        checkPregnancy(full).map((item) => {
                            return <tr>
                                <td style={{ textAlign: 'left' }}>{item.name}</td>
                                <td>{item.date}</td>
                            </tr>
                        })
                    }
                </table>
            </div>
        </div> : null}
        {travellerVaccines && travellerVaccines.length > 0 ? <div>
            <h5>Traveller Vaccinations:</h5>
            <div>
                <table style={{ width: '100%' }}>
                    {
                        checkTravellers(travellerVaccines).map((item) => {
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
}