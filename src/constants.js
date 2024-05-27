export const API_URL = async () => (await (await fetch('/server.json')).json()).url;

export function getCookie() {
    const cname = 'dhis_token';
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function parsePatient(arr) {
    const getParam = (key) => {
        const filtered = arr.filter(row => row.key === key);
        if (filtered && filtered.length > 0) {
            return filtered[0].value;
        }
        return null;
    }

    return {
        id: getParam("KSr2yTdu1AI"),
        epi: getParam("KSr2yTdu1AI"),
        name: getParam("NdU9jrO6kjC"),
        dob: getParam("NI0QRzJvQ0k"),
        sex: getParam("cZqQ60pyFqE"),
        resident: getParam("lvrCLQO9M67"),
        qr: getParam("qr"),
        nic: getParam("Ewi7FUfcHAD"),
        foolhuma: getParam("qjOUpJYoZmK"),
        mothers_name: getParam("ro0cJo9ViK0"),
        mother_contact: getParam("pjexi5YaAPa"),
        mother_nic: getParam("pqM2VmAUQHs"),
        residential_island: getParam("xsxMR7crjZ6"),
        residential_no: getParam("MRWUBBhVOF4"),
        caregiver: getParam("ojJhLyWFZF8"),
        caregiver_id: getParam("rJsMjaXm5Ku"),
        other_contact: getParam("KnQryoomh60"),
        entityInstance: getParam("entityInstance")
    }
}

export const vaccineMap = {
    bcg: 'bpBUOvqy1Jn',
    hepatitis: 'qEtgKXZlMLE',
    opv1: 'sDORmAKh32v',
    opv2: 'y6rSBDtdDcJ',
    opv3: 'OnlLh4TE6Zs',
    pentavalent1: 'K3TcJM1ySQA',
    pentavalent2: 'GPOoPDqle3V',
    pentavalent3: 'pxCZNoqDVJC',
    ipv: 'Fu83xQ4NKuQ',
    mr: 'OKhx1HFPhRs',
    mmr: 'wpadSrcnZsO',
    dpt: 'zh5oKBRevny',
    hpv1: 'ZYsq1NLl1Vu',
    hpv2: 'IiLBbswLevW',
    vitaA1: 'QRgWlyDKCR1',
    vitaA2: 'L6qISENXT3L',
    td1: 'J4WseLneG4k',
    td2: 'LHeNPTmC6RW',
    td3: 'Ctucf2qbeZO',
    td4: 'wBsQ6OsAOBx',
    td5: 'lo5L11lJW0k',
    td6: 'RWHNe8OmxXm'
};

export const childhood = [
    {
        name: "BCG",
        id: "bpBUOvqy1Jn"
    },
    {
        name: "Hepatitis B",
        id: "qEtgKXZlMLE"
    },
    {
        name: "OPV 1",
        id: "sDORmAKh32v"
    },
    {
        name: "OPV 2",
        id: "y6rSBDtdDcJ"
    },
    {
        name: "OPV 3",
        id: "OnlLh4TE6Zs"
    },
    {
        name: "Pentavelant 1",
        id: "K3TcJM1ySQA"
    },
    {
        name: "Pentavelant 2",
        id: "GPOoPDqle3V"
    },
    {
        name: "Pentavelant 3",
        id: "pxCZNoqDVJC"
    },
    {
        name: "IPV",
        id: "Fu83xQ4NKuQ"
    },
    {
        name: "MR",
        id: "OKhx1HFPhRs"
    },
    {
        name: "MMR",
        id: "wpadSrcnZsO"
    },
    {
        name: "DPT Booster",
        id: "zh5oKBRevny"
    },
];
export const hpv = [
    {
        name: "Dose 1",
        id: "ZYsq1NLl1Vu"
    },
    {
        name: "Dose 2",
        id: "IiLBbswLevW"
    },
];
export const tdv = [
    {
        name: "Dose 1",
        id: "J4WseLneG4k"
    },
    {
        name: "Dose 2",
        id: "LHeNPTmC6RW"
    },
    {
        name: "Dose 3",
        id: "Ctucf2qbeZO"
    },
    {
        name: "Dose 4",
        id: "wBsQ6OsAOBx"
    },
    {
        name: "Dose 5",
        id: "lo5L11lJW0k"
    },
    {
        name: "Dose 6",
        id: "RWHNe8OmxXm"
    },
];

export const travellerVaccines = [
    {
        name: "Yellow traveler vaccine",
        id: "mH9watsYzvq"
    },
    {
        name: "OPV Traveller",
        id: "y6rSBDtdDcJ"
    },
    {
        name: "IPV Traveller Vaccine",
        id: "NrP0oETTFsX"
    }
];

export const pregnancyVaccines = [
];

export const optionalVaccines = [
];

export const vaccineArray = [
    'bpBUOvqy1Jn', 'qEtgKXZlMLE', 'sDORmAKh32v', 'y6rSBDtdDcJ', 'OnlLh4TE6Zs',
    'K3TcJM1ySQA', 'GPOoPDqle3V', 'pxCZNoqDVJC', 'Fu83xQ4NKuQ', 'OKhx1HFPhRs',
    'wpadSrcnZsO', 'zh5oKBRevny', 'ZYsq1NLl1Vu', 'QRgWlyDKCR1', 'L6qISENXT3L'
];