import './styles.css';
import { useEffect, useState } from 'react';
import { API_URL, getCookie } from '../../constants';
import { Table, Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import {TableBody, Grid} from '@mui/material';
import {styled} from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

import male0 from '../../assets/avatar/male0.png'
import male1 from '../../assets/avatar/male1.png'
import male2 from '../../assets/avatar/male2.png'
import female0 from '../../assets/avatar/female0.png'
import female1 from '../../assets/avatar/female1.png'
import female2 from '../../assets/avatar/female2.png'
import m1 from '../../assets/avatar/m1.JPG'

import m1_0to2_img from '../../assets/avatar/m1_0to2.png'
import m2_0to2_img from '../../assets/avatar/m2_0to2.png'
import m3_0to2_img from '../../assets/avatar/m3_0to2.png'
import m4_0to2_img from '../../assets/avatar/m4_0to2.png'

import m1_2to4_img from '../../assets/avatar/m1_2to4.png'
import m2_2to4_img from '../../assets/avatar/m2_2to4.png'
import m3_2to4_img from '../../assets/avatar/m3_2to4.png'
import m4_2to4_img from '../../assets/avatar/m4_2to4.png'

import m1_4to6_img from '../../assets/avatar/m1_4to6.png'
import m2_4to6_img from '../../assets/avatar/m2_4to6.png'
import m3_4to6_img from '../../assets/avatar/m3_4to6.png'
import m4_4to6_img from '../../assets/avatar/m4_4to6.png'

import m1_6to9_img from '../../assets/avatar/m1_6to9.png'
import m2_6to9_img from '../../assets/avatar/m2_6to9.png'
import m3_6to9_img from '../../assets/avatar/m3_6to9.png'
import m4_6to9_img from '../../assets/avatar/m4_6to9.png'

import m1_9to12_img from '../../assets/avatar/m1_9to12.png'
import m2_9to12_img from '../../assets/avatar/m2_9to12.png'
import m3_9to12_img from '../../assets/avatar/m3_9to12.png'
import m4_9to12_img from '../../assets/avatar/m4_9to12.png'

import m1_12to15_img from '../../assets/avatar/m1_12to15.png'
import m2_12to15_img from '../../assets/avatar/m2_12to15.png'
import m3_12to15_img from '../../assets/avatar/m3_12to15.png'
import m4_12to15_img from '../../assets/avatar/m4_12to15.png'

import m1_15to18_img from '../../assets/avatar/m1_15to18.png'
import m2_15to18_img from '../../assets/avatar/m2_15to18.png'
import m3_15to18_img from '../../assets/avatar/m3_15to18.png'
import m4_15to18_img from '../../assets/avatar/m4_15to18.png'

import m1_18to24_img from '../../assets/avatar/m1_18to24.png'
import m2_18to24_img from '../../assets/avatar/m2_18to24.png'
import m3_18to24_img from '../../assets/avatar/m3_18to24.png'
import m4_18to24_img from '../../assets/avatar/m4_18to24.png'

import m1_24to30_img from '../../assets/avatar/m1_24to30.png'
import m2_24to30_img from '../../assets/avatar/m2_24to30.png'

import m1_30to36_img from '../../assets/avatar/m1_30to36.png'
import m2_30to36_img from '../../assets/avatar/m2_30to36.png'
import m3_30to36_img from '../../assets/avatar/m3_30to36.png'
import m4_30to36_img from '../../assets/avatar/m4_30to36.png'

import m1_36to48_img from '../../assets/avatar/m1_36to48.png'
import m2_36to48_img from '../../assets/avatar/m2_36to48.png'
import m3_36to48_img from '../../assets/avatar/m3_36to48.png'
import m4_36to48_img from '../../assets/avatar/m4_36to48.png'

import m1_48to60_img from '../../assets/avatar/m1_48to60.png'
import m2_48to60_img from '../../assets/avatar/m2_48to60.png'
import m3_48to60_img from '../../assets/avatar/m3_48to60.png'
import m4_48to60_img from '../../assets/avatar/m4_48to60.png'


const srcList = [male0, female0, male1, female1, male2, female2];

const columns = [
    { field: 'vaccine', headerName: 'Vaccine', flex: 1, headerClassName: 'table-header' },
    { field: 'center', headerName: 'Vaccine Center', flex: 3, headerClassName: 'table-header' },
    { field: 'date', headerName: 'Date', flex: 2, headerClassName: 'table-header' },
    { field: 'status', headerName: 'Status', flex: 1, headerClassName: 'table-header' }
];

const rows = [
];

var items = [
    "/banner1.jpg",
    "/banner2.png"
]

const Milestones = ({childData, developmentEvents}) => {

    function monthDiff(dob) {
        // var d2 = 
        var months;
        months = (new Date().getFullYear() - dob.getFullYear()) * 12;
        months -= dob.getMonth();
        months += new Date().getMonth();
        return months <= 0 ? 0 : months;
    }

    var childDob = new Date(childData.dob)
    var ageInMonths = monthDiff(childDob)

    var m1_0to2_1_id = "v6P3nKGeHLL";
    var m1_0to2_2_id = "LiLtoNpzbiU";
    var m1_0to2_3_id = "SN74UaUnfqx";
    var m1_0to2_4_id = "Rsa3kO41gUW";
    var m2_0to2_1_id = "EzOd4SWHTPt";
    var m2_0to2_2_id = "kGvcjLkNHrF";
    var m3_0to2_1_id = "d1ZEgqpvfOC";
    var m3_0to2_2_id = "zhLgObBMGzY";
    var m4_0to2_1_id = "h3MGqOKUhE7";
    var m4_0to2_2_id = "XW3VkvrPKuM";
    var m4_0to2_3_id = "qrGLVpwbNFK";

    var m1_2to4_1_id = "SNXt6LOxMGa";
    var m1_2to4_2_id = "FPeIQMEilIS";
    var m1_2to4_3_id = "ZIZRtoeS72p";
    var m2_2to4_1_id = "jtJj5nh59l3"; 
    var m2_2to4_2_id = "GvqZoeEHoj1";
    var m2_2to4_3_id = "JpMpJvKMzlx";
    var m3_2to4_1_id = "B0r0kl6Va86"; 
    var m3_2to4_2_id = "ClulicDx3kE";
    var m3_4to6_1_id = "hHgo7FgA01O"; 
    var m3_4to6_2_id = "EtL48Crs4D1"; 
    var m3_4to6_3_id = "ImlyTatODld";
    var m4_2to4_1_id = "GLF7L9tWg1x"; 
    var m4_2to4_2_id = "pPSfJI2mdOd"; 
    var m4_2to4_3_id = "s55ijnINENz"; 
    var m4_2to4_4_id = "Vmn1UFdDPql"; 
    var m4_2to4_5_id = "VcgUaRUJ7p5";

    var m1_4to6_1_id = "BFYqEvuYhTb"; 
    var m1_4to6_2_id = "A0lMIsLff0Y"; 
    var m1_4to6_3_id = "S2cDT2ufA1g";
    var m2_4to6_1_id = "nLZnNoHKuWe"; 
    var m2_4to6_2_id = "OECpmFBeRYp"; 
    var m2_4to6_3_id = "KgDJp7Kv1y2";
    var m4_4to6_1_id = "CV1M3clYYLX"; 
    var m4_4to6_2_id = "Yf1qoTRkg1W"; 
    var m4_4to6_3_id = "VNg76wOq1ur";

    var m1_6to9_1_id = "Y3NMYG4m7LP"; 
    var m1_6to9_2_id = "iYHYn2oLwVA"; 
    var m1_6to9_3_id = "EGv20qicP6O";
    var m1_6to9_4_id = "VglBcJspvWO"; 
    var m1_6to9_5_id = "MOpm0R80QQD";
    var m2_6to9_1_id = "BCNkBiGDLgN"; 
    var m2_6to9_2_id = "fXHGJycVIlS";
    var m3_6to9_1_id = "YAux9O5v8UJ"; 
    var m3_6to9_2_id = "dypIsDrn3vR";
    var m4_6to9_1_id = "lzwJckCyzPM"; 
    var m4_6to9_2_id = "rQidZVTSVmv"; 
    var m4_6to9_3_id = "FyRsVdelcXr"; 
    var m4_6to9_4_id = "YzyLBCTUlz6";

    var m1_9to12_1_id = "fAlhbqKrsHl";
    var m2_9to12_1_id = "h49K7aswWGk"; 
    var m2_9to12_2_id = "MEKZaxPmq4N"; 
    var m2_9to12_3_id = "KqY8yOlS5ju2";
    var m3_9to12_1_id = "fsscOTuM2aD"; 
    var m3_9to12_2_id = "tkpnjsWSgnV";
    var m4_9to12_1_id = "YadcF6m2bKP"; 
    var m4_9to12_2_id = "Wm0KOlcv8a7"; 
    var m4_9to12_3_id = "CvT7O2JJQTP"; 
    var m4_9to12_4_id = "hb5AzJ6kBJd";

    var m1_12to15_1_id = "OCsRefg01aH"; 
    var m1_12to15_2_id = "yZjgaEWC7bA"; 
    var m1_12to15_3_id = "yZjgaEWC7bA";
    var m1_12to15_4_id = "pVuu2CsP17m"; 
    var m1_12to15_5_id = "eJpH8Ts59l0";
    var m2_12to15_1_id = "KPFQKGPyd2B"; 
    var m2_12to15_2_id = "tPk14m2iS7g"; 
    var m2_12to15_3_id = "NFSBlWfZWqE"; 
    var m2_12to15_4_id = "UjDWOyppeEd";
    var m3_12to15_1_id = "MlNstzonpb8"; 
    var m3_12to15_2_id = "ZMqt88AXnRU";
    var m4_12to15_1_id = "Q2uHikunQQW"; 
    var m4_12to15_2_id = "RK0V2Zuc13i";

    var m1_15to18_1_id = "OCiEkrxqdZn"; 
    var m1_15to18_2_id = "RKwV1OQzloj"; 
    var m1_15to18_3_id = "ZZmZYXAd8yL";
    var m1_15to18_4_id = "vzw6cZ3lk9W"; 
    var m1_15to18_5_id = "nYklpEt8rHd";
    var m2_15to18_1_id = "SLkF9QoNJRm"; 
    var m2_15to18_2_id = "X7Ne3jsZfCt";
    var m3_15to18_1_id = "ltRsaPtRIdN"; 
    var m3_15to18_2_id = "zTlDIw05LwH";
    var m4_15to18_1_id = "plHOADDXFV0"; 
    var m4_15to18_2_id = "KOo5QdHNNnQ"; 
    var m4_15to18_3_id = "cZdeAkX2d7w"; 
    var m4_15to18_4_id = "aKEIJG9faBS"; 
    var m4_15to18_5_id = "EgLwN2tsp2n"; 
    var m4_15to18_6_id = "otH3hpFJ3kz";

    var m1_18to24_1_id = "cyzNWnUxJp1"; 
    var m1_18to24_2_id = "TI06wTBnnDD";
    var m2_18to24_1_id = "DIO9DmZTsNK"; 
    var m2_18to24_2_id = "fK6wLTJPELi"; 
    var m2_18to24_3_id = "zHZW0GEoa7A"; 
    var m2_18to24_4_id = "GEHFSPlYFiu";
    var m3_18to24_1_id = "eu5sYlCrFWk"; 
    var m3_18to24_2_id = "msvoHdkxFS7"; 
    var m3_18to24_3_id = "gTmtnGc7Z9c";
    var m4_18to24_1_id = "a9jCDF4r3K5"; 
    var m4_18to24_2_id = "Xi2y10NS8CP"; 
    var m4_18to24_3_id = "WacPPRceUuY"; 
    var m4_18to24_4_id = "afzJFSDRJGX";

    var m1_24to30_1_id = "FNclZes5Sfw"; 
    var m1_24to30_2_id = "Er8EANmCeUo"; 
    var m1_24to30_3_id = "pQsjBUZlTKB";
    var m2_24to30_1_id = "GT23yyIl9zu"; 
    var m2_24to30_2_id = "x3fCJVREMxO"; 
    var m2_24to30_3_id = "zLnBRBJMgbP"; 
    var m2_24to30_4_id = "ivFlZLh8izA";
    var m3_24to30_1_id = "oi9sITzJpOl"; 
    var m3_24to30_2_id = "dcNUqmoADBc"; 
    var m3_24to30_3_id = "rFmlXPij9Cb"; 
    var m3_24to30_4_id = "zvmWTGuoEJG";
    var m4_24to30_1_id = "gKQWC2ZjVUt"; 
    var m4_24to30_2_id = "gKQWC2ZjVUt"; 
    var m4_24to30_3_id = "gKQWC2ZjVUt"; 
    var m4_24to30_4_id = "gKQWC2ZjVUt";

    var m1_30to36_1_id = "aDypcXGRqA6"; 
    var m1_30to36_2_id = "PQmnQ5AVjWj";
    var m2_30to36_1_id = "LqJdYyfNvhn"; 
    var m2_30to36_2_id = "AW7k0bYTWEM"; 
    var m2_30to36_3_id = "lwtKUHJa7II"; 
    var m2_30to36_4_id = "mKLxcGOVZVE"; 
    var m2_30to36_5_id = "Gyewqo7yLAh";
    var m3_30to36_1_id = "GNdccG3KT6j"; 
    var m3_30to36_2_id = "X4ZkZP1at9Q";
    var m4_30to36_1_id = "XE7br0YsdKh"; 
    var m4_30to36_2_id = "F8Aw2ZLnlDZ"; 
    var m4_30to36_3_id = "qGiMgRay1C5";

    var m1_36to48_1_id = "XRjYUdBJlxQ"; 
    var m1_36to48_2_id = "GdVd3cyASbF"; 
    var m1_36to48_3_id = "Z11PooicwQf";
    var m1_36to48_4_id = "RgaR3gJ4ZNa"; 
    var m1_36to48_5_id = "PwA58Dp6Pp0"; 
    var m1_36to48_6_id = "kgI4NIoN8bh";
    var m2_36to48_1_id = "lEvtZYWWBl8"; 
    var m2_36to48_2_id = "oMhi69Bpvga"; 
    var m2_36to48_3_id = "D2P1mqoItLu"; 
    var m2_36to48_4_id = "WNt73M1UMQZ";
    var m3_36to48_1_id = "PikIn1sEnEs"; 
    var m3_36to48_2_id = "V4JtXtz3oZp"; 
    var m3_36to48_3_id = "zmcH2d7fw1u";
    var m4_36to48_1_id = "OUCMPGNiCJG"; 
    var m4_36to48_2_id = "JUTFDk6HgIy"; 
    var m4_36to48_3_id = "CcQ30eJTKd6"; 
    var m4_36to48_4_id = "wjFOyrt8GxW";

    var m1_48to60_1_id = "MJlMkWhxz6d"; 
    var m1_48to60_2_id = "lroCx9ynNJl"; 
    var m1_48to60_3_id = "LNJlFrtfttI";
    var m2_48to60_1_id = "ejJ5p4QOPtf"; 
    var m2_48to60_2_id = "uQhwAkt93UX"; 
    var m2_48to60_3_id = "SYlAWpVdHdz"; 
    var m2_48to60_4_id = "ywEKfspryor";
    var m3_48to60_1_id = "V5itRoIDNnR"; 
    var m3_48to60_2_id = "BiOP6WABZOo"; 
    var m3_48to60_3_id = "DrKejQdr9S7"; 
    var m3_48to60_4_id = "s6eK8rAr2Cg"; 
    var m3_48to60_5_id = "UodCOksr8Ka"; 
    var m3_48to60_6_id = "hLRArhXSM6U";

    var m4_48to60_1_id = "MdD0CR7h8fs"; 
    var m4_48to60_2_id = "T2Me8Dz48t3";
    
    

    var m1_0to2_1, m1_0to2_2, m1_0to2_3, m1_0to2_4;
    var m1_2to4_1 = "", m1_2to4_2, m1_2to4_3 = "";
    var m1_4to6_1, m1_4to6_2, m1_4to6_3;
    var m1_6to9_1, m1_6to9_2, m1_6to9_3, m1_6to9_4, m1_6to9_5;
    var m1_9to12_1;
    var m1_12to15_1, m1_12to15_2, m1_12to15_3, m1_12to15_4, m1_12to15_5;
    var m1_15to18_1, m1_15to18_2, m1_15to18_3, m1_15to18_4, m1_15to18_5;
    var m1_18to24_1, m1_18to24_2;
    var m1_24to30_1, m1_24to30_2, m1_24to30_3;
    var m1_30to36_1, m1_30to36_2, m1_30to36_3;
    var m1_36to48_1, m1_36to48_2, m1_36to48_3, m1_36to48_4, m1_36to48_5, m1_36to48_6;
    var m1_48to60_1, m1_48to60_2, m1_48to60_3;

    var m2_0to2_1, m2_0to2_2;
    var m2_2to4_1, m2_2to4_2, m2_2to4_3;
    var m2_4to6_1, m2_4to6_2, m2_4to6_3;
    var m2_6to9_1, m2_6to9_2;
    var m2_9to12_1, m2_9to12_2, m2_9to12_3;
    var m2_12to15_1, m2_12to15_2, m2_12to15_3, m2_12to15_4;
    var m2_15to18_1, m2_15to18_2;
    var m2_18to24_1, m2_18to24_2, m2_18to24_3, m2_18to24_4;
    var m2_24to30_1, m2_24to30_2, m2_24to30_3, m2_24to30_4;
    var m2_30to36_1, m2_30to36_2, m2_30to36_3, m2_30to36_4, m2_30to36_5;
    var m2_36to48_1, m2_36to48_2, m2_36to48_3, m2_36to48_4;
    var m2_48to60_1, m2_48to60_2, m2_48to60_3, m2_48to60_4;

    var m3_0to2_1, m3_0to2_2;
    var m3_2to4_1, m3_2to4_2;
    var m3_4to6_1, m3_4to6_2, m3_4to6_3;
    var m3_6to9_1, m3_6to9_2;
    var m3_9to12_1, m3_9to12_2;
    var m3_12to15_1, m3_12to15_2;
    var m3_15to18_1, m3_15to18_2;
    var m3_18to24_1, m3_18to24_2, m3_18to24_3;
    var m3_24to30_1, m3_24to30_2, m3_24to30_3, m3_24to30_4;
    var m3_30to36_1, m3_30to36_2;
    var m3_36to48_1, m3_36to48_2, m3_36to48_3;
    var m3_48to60_1, m3_48to60_2, m3_48to60_3, m3_48to60_4, m3_48to60_5, m3_48to60_6;

    var m4_0to2_1, m4_0to2_2, m4_0to2_3;
    var m4_2to4_1, m4_2to4_2, m4_2to4_3, m4_2to4_4, m4_2to4_5;
    var m4_4to6_1, m4_4to6_2, m4_4to6_3;
    var m4_6to9_1, m4_6to9_2, m4_6to9_3, m4_6to9_4;
    var m4_9to12_1, m4_9to12_2, m4_9to12_3, m4_9to12_4;
    var m4_12to15_1, m4_12to15_2;
    var m4_15to18_1, m4_15to18_2, m4_15to18_3, m4_15to18_4, m4_15to18_5, m4_15to18_6;
    var m4_18to24_1, m4_18to24_2, m4_18to24_3, m4_18to24_4;
    var m4_24to30_1, m4_24to30_2, m4_24to30_3, m4_24to30_4;
    var m4_30to36_1, m4_30to36_2, m4_30to36_3;
    var m4_36to48_1, m4_36to48_2, m4_36to48_3, m4_36to48_4;
    var m4_48to60_1, m4_48to60_2, m4_48to60_3;

    if(developmentEvents.length > 0) {

        developmentEvents.map((data) => {

            m1_0to2_1 = data.dataValues.find(o => o.dataElement === m1_0to2_1_id)
            m1_0to2_2 = data.dataValues.find(o => o.dataElement === m1_0to2_2_id)
            m1_0to2_3 = data.dataValues.find(o => o.dataElement === m1_0to2_3_id)
            m1_0to2_4 = data.dataValues.find(o => o.dataElement === m1_0to2_4_id)

            data.dataValues.find(o => o.dataElement === m1_2to4_1_id)
            m1_2to4_2 = data.dataValues.find(o => o.dataElement === m1_2to4_2_id)
            m1_2to4_3 = data.dataValues.find(o => o.dataElement === m1_2to4_3_id)

            m1_4to6_1 = data.dataValues.find(o => o.dataElement === m1_4to6_1_id)
            m1_4to6_2 = data.dataValues.find(o => o.dataElement === m1_4to6_2_id)
            m1_4to6_3 = data.dataValues.find(o => o.dataElement === m1_4to6_3_id)

            m1_6to9_1 = data.dataValues.find(o => o.dataElement === m1_6to9_1_id)
            m1_6to9_2 = data.dataValues.find(o => o.dataElement === m1_6to9_2_id)
            m1_6to9_3 = data.dataValues.find(o => o.dataElement === m1_6to9_3_id)
            m1_6to9_4 = data.dataValues.find(o => o.dataElement === m1_6to9_4_id)
            m1_6to9_5 = data.dataValues.find(o => o.dataElement === m1_6to9_5_id)

            m1_9to12_1 = data.dataValues.find(o => o.dataElement === m1_9to12_1_id)

            m1_12to15_1 = data.dataValues.find(o => o.dataElement === m1_12to15_1_id)
            m1_12to15_2 = data.dataValues.find(o => o.dataElement === m1_12to15_2_id)
            m1_12to15_3 = data.dataValues.find(o => o.dataElement === m1_12to15_3_id)
            m1_12to15_4 = data.dataValues.find(o => o.dataElement === m1_12to15_4_id)
            m1_12to15_5 = data.dataValues.find(o => o.dataElement === m1_12to15_5_id)
            
            m1_15to18_1 = data.dataValues.find(o => o.dataElement === m1_15to18_1_id)
            m1_15to18_2 = data.dataValues.find(o => o.dataElement === m1_15to18_2_id)
            m1_15to18_3 = data.dataValues.find(o => o.dataElement === m1_15to18_3_id)
            m1_15to18_4 = data.dataValues.find(o => o.dataElement === m1_15to18_4_id)
            m1_15to18_5 = data.dataValues.find(o => o.dataElement === m1_15to18_5_id)

            m1_18to24_1 = data.dataValues.find(o => o.dataElement === m1_18to24_1_id)
            m1_18to24_2 = data.dataValues.find(o => o.dataElement === m1_18to24_2_id)

            m1_24to30_1 = data.dataValues.find(o => o.dataElement === m1_24to30_1_id)
            m1_24to30_2 = data.dataValues.find(o => o.dataElement === m1_24to30_2_id)
            m1_24to30_3 = data.dataValues.find(o => o.dataElement === m1_24to30_3_id)

            m1_30to36_1 = data.dataValues.find(o => o.dataElement === m1_30to36_1_id)
            m1_30to36_2 = data.dataValues.find(o => o.dataElement === m1_30to36_2_id)

            m1_36to48_1 = data.dataValues.find(o => o.dataElement === m1_36to48_1_id)
            m1_36to48_2 = data.dataValues.find(o => o.dataElement === m1_36to48_2_id)
            m1_36to48_3 = data.dataValues.find(o => o.dataElement === m1_36to48_3_id)
            m1_36to48_4 = data.dataValues.find(o => o.dataElement === m1_36to48_4_id)
            m1_36to48_5 = data.dataValues.find(o => o.dataElement === m1_36to48_5_id)
            m1_36to48_6 = data.dataValues.find(o => o.dataElement === m1_36to48_6_id)

            m1_48to60_1 = data.dataValues.find(o => o.dataElement === m1_48to60_1_id)
            m1_48to60_2 = data.dataValues.find(o => o.dataElement === m1_48to60_2_id)
            m1_48to60_3 = data.dataValues.find(o => o.dataElement === m1_48to60_3_id)

            m2_0to2_1 = data.dataValues.find(o => o.dataElement === m2_0to2_1_id)
            m2_0to2_2 = data.dataValues.find(o => o.dataElement === m2_0to2_2_id)

            m2_2to4_1 = data.dataValues.find(o => o.dataElement === m2_2to4_1_id)
            m2_2to4_2 = data.dataValues.find(o => o.dataElement === m2_2to4_2_id)
            m2_2to4_3 = data.dataValues.find(o => o.dataElement === m2_2to4_3_id)

            m2_4to6_1 = data.dataValues.find(o => o.dataElement === m2_4to6_1_id)
            m2_4to6_2 = data.dataValues.find(o => o.dataElement === m2_4to6_2_id)
            m2_4to6_3 = data.dataValues.find(o => o.dataElement === m2_4to6_3_id)

            m2_6to9_1 = data.dataValues.find(o => o.dataElement === m2_6to9_1_id)
            m2_6to9_2 = data.dataValues.find(o => o.dataElement === m2_6to9_2_id)

            m2_9to12_1 = data.dataValues.find(o => o.dataElement === m2_9to12_1_id)
            m2_9to12_2 = data.dataValues.find(o => o.dataElement === m2_9to12_2_id)
            m2_9to12_3 = data.dataValues.find(o => o.dataElement === m2_9to12_3_id)

            m2_12to15_1 = data.dataValues.find(o => o.dataElement === m2_12to15_1_id)
            m2_12to15_2 = data.dataValues.find(o => o.dataElement === m2_12to15_2_id)
            m2_12to15_3 = data.dataValues.find(o => o.dataElement === m2_12to15_3_id)
            m2_12to15_4 = data.dataValues.find(o => o.dataElement === m2_12to15_4_id)
            
            m2_15to18_1 = data.dataValues.find(o => o.dataElement === m2_15to18_1_id)
            m2_15to18_2 = data.dataValues.find(o => o.dataElement === m2_15to18_2_id)

            m2_18to24_1 = data.dataValues.find(o => o.dataElement === m2_18to24_1_id)
            m2_18to24_2 = data.dataValues.find(o => o.dataElement === m2_18to24_2_id)
            m2_18to24_3 = data.dataValues.find(o => o.dataElement === m2_18to24_3_id)
            m2_18to24_4 = data.dataValues.find(o => o.dataElement === m2_18to24_4_id)

            m2_24to30_1 = data.dataValues.find(o => o.dataElement === m2_24to30_1_id)
            m2_24to30_2 = data.dataValues.find(o => o.dataElement === m2_24to30_2_id)
            m2_24to30_3 = data.dataValues.find(o => o.dataElement === m2_24to30_3_id)
            m2_24to30_4 = data.dataValues.find(o => o.dataElement === m2_24to30_4_id)

            m2_30to36_1 = data.dataValues.find(o => o.dataElement === m2_30to36_1_id)
            m2_30to36_2 = data.dataValues.find(o => o.dataElement === m2_30to36_2_id)
            m2_30to36_3 = data.dataValues.find(o => o.dataElement === m2_30to36_3_id)
            m2_30to36_4 = data.dataValues.find(o => o.dataElement === m2_30to36_4_id)
            m2_30to36_5 = data.dataValues.find(o => o.dataElement === m2_30to36_5_id)

            m2_36to48_1 = data.dataValues.find(o => o.dataElement === m2_36to48_1_id)
            m2_36to48_2 = data.dataValues.find(o => o.dataElement === m2_36to48_2_id)
            m2_36to48_3 = data.dataValues.find(o => o.dataElement === m2_36to48_3_id)
            m2_36to48_4 = data.dataValues.find(o => o.dataElement === m2_36to48_4_id)

            m2_48to60_1 = data.dataValues.find(o => o.dataElement === m2_48to60_1_id)
            m2_48to60_2 = data.dataValues.find(o => o.dataElement === m2_48to60_2_id)
            m2_48to60_3 = data.dataValues.find(o => o.dataElement === m2_48to60_3_id)
            m2_48to60_4 = data.dataValues.find(o => o.dataElement === m2_48to60_4_id)

            m3_0to2_1 = data.dataValues.find(o => o.dataElement === m3_0to2_1_id)
            m3_0to2_2 = data.dataValues.find(o => o.dataElement === m3_0to2_2_id)

            m3_2to4_1 = data.dataValues.find(o => o.dataElement === m3_2to4_1_id)
            m3_2to4_2 = data.dataValues.find(o => o.dataElement === m3_2to4_2_id)

            m3_4to6_1 = data.dataValues.find(o => o.dataElement === m3_4to6_1_id)
            m3_4to6_2 = data.dataValues.find(o => o.dataElement === m3_4to6_2_id)
            m3_4to6_3 = data.dataValues.find(o => o.dataElement === m3_4to6_3_id)

            m3_6to9_1 = data.dataValues.find(o => o.dataElement === m3_6to9_1_id)
            m3_6to9_2 = data.dataValues.find(o => o.dataElement === m3_6to9_2_id)

            m3_9to12_1 = data.dataValues.find(o => o.dataElement === m3_9to12_1_id)
            m3_9to12_2 = data.dataValues.find(o => o.dataElement === m3_9to12_2_id)

            m3_12to15_1 = data.dataValues.find(o => o.dataElement === m3_12to15_1_id)
            m3_12to15_2 = data.dataValues.find(o => o.dataElement === m3_12to15_2_id)
            
            m3_15to18_1 = data.dataValues.find(o => o.dataElement === m3_15to18_1_id)
            m3_15to18_2 = data.dataValues.find(o => o.dataElement === m3_15to18_2_id)

            m3_18to24_1 = data.dataValues.find(o => o.dataElement === m3_18to24_1_id)
            m3_18to24_2 = data.dataValues.find(o => o.dataElement === m3_18to24_2_id)
            m3_18to24_3 = data.dataValues.find(o => o.dataElement === m3_18to24_3_id)

            m3_24to30_1 = data.dataValues.find(o => o.dataElement === m3_24to30_1_id)
            m3_24to30_2 = data.dataValues.find(o => o.dataElement === m3_24to30_2_id)
            m3_24to30_3 = data.dataValues.find(o => o.dataElement === m3_24to30_3_id)
            m3_24to30_4 = data.dataValues.find(o => o.dataElement === m3_24to30_4_id)

            m3_30to36_1 = data.dataValues.find(o => o.dataElement === m3_30to36_1_id)
            m3_30to36_2 = data.dataValues.find(o => o.dataElement === m3_30to36_2_id)

            m3_36to48_1 = data.dataValues.find(o => o.dataElement === m3_36to48_1_id)
            m3_36to48_2 = data.dataValues.find(o => o.dataElement === m3_36to48_2_id)
            m3_36to48_3 = data.dataValues.find(o => o.dataElement === m3_36to48_3_id)

            m3_48to60_1 = data.dataValues.find(o => o.dataElement === m3_48to60_1_id)
            m3_48to60_2 = data.dataValues.find(o => o.dataElement === m3_48to60_2_id)
            m3_48to60_3 = data.dataValues.find(o => o.dataElement === m3_48to60_3_id)
            m3_48to60_4 = data.dataValues.find(o => o.dataElement === m3_48to60_4_id)
            m3_48to60_5 = data.dataValues.find(o => o.dataElement === m3_48to60_5_id)
            m3_48to60_6 = data.dataValues.find(o => o.dataElement === m3_48to60_6_id)

            m4_0to2_1 = data.dataValues.find(o => o.dataElement === m4_0to2_1_id)
            m4_0to2_2 = data.dataValues.find(o => o.dataElement === m4_0to2_2_id)
            m4_0to2_3 = data.dataValues.find(o => o.dataElement === m4_0to2_3_id)

            m4_2to4_1 = data.dataValues.find(o => o.dataElement === m4_2to4_1_id)
            m4_2to4_2 = data.dataValues.find(o => o.dataElement === m4_2to4_2_id)
            m4_2to4_3 = data.dataValues.find(o => o.dataElement === m4_2to4_3_id)
            m4_2to4_4 = data.dataValues.find(o => o.dataElement === m4_2to4_4_id)
            m4_2to4_5 = data.dataValues.find(o => o.dataElement === m4_2to4_5_id)

            m4_4to6_1 = data.dataValues.find(o => o.dataElement === m4_4to6_1_id)
            m4_4to6_2 = data.dataValues.find(o => o.dataElement === m4_4to6_2_id)
            m4_4to6_3 = data.dataValues.find(o => o.dataElement === m4_4to6_3_id)

            m4_6to9_1 = data.dataValues.find(o => o.dataElement === m4_6to9_1_id)
            m4_6to9_2 = data.dataValues.find(o => o.dataElement === m4_6to9_2_id)
            m4_6to9_3 = data.dataValues.find(o => o.dataElement === m4_6to9_3_id)
            m4_6to9_4 = data.dataValues.find(o => o.dataElement === m4_6to9_4_id)

            m4_9to12_1 = data.dataValues.find(o => o.dataElement === m4_9to12_1_id)
            m4_9to12_2 = data.dataValues.find(o => o.dataElement === m4_9to12_2_id)
            m4_9to12_3 = data.dataValues.find(o => o.dataElement === m4_9to12_3_id)
            m4_9to12_4 = data.dataValues.find(o => o.dataElement === m4_9to12_4_id)

            m4_12to15_1 = data.dataValues.find(o => o.dataElement === m4_12to15_1_id)
            m4_12to15_2 = data.dataValues.find(o => o.dataElement === m4_12to15_2_id)
            
            m4_15to18_1 = data.dataValues.find(o => o.dataElement === m4_15to18_1_id)
            m4_15to18_2 = data.dataValues.find(o => o.dataElement === m4_15to18_2_id)
            m4_15to18_3 = data.dataValues.find(o => o.dataElement === m4_15to18_3_id)
            m4_15to18_4 = data.dataValues.find(o => o.dataElement === m4_15to18_4_id)
            m4_15to18_5 = data.dataValues.find(o => o.dataElement === m4_15to18_5_id)
            m4_15to18_6 = data.dataValues.find(o => o.dataElement === m4_15to18_6_id)

            m4_18to24_1 = data.dataValues.find(o => o.dataElement === m4_18to24_1_id)
            m4_18to24_2 = data.dataValues.find(o => o.dataElement === m4_18to24_2_id)
            m4_18to24_3 = data.dataValues.find(o => o.dataElement === m4_18to24_3_id)
            m4_18to24_4 = data.dataValues.find(o => o.dataElement === m4_18to24_4_id)

            m4_24to30_1 = data.dataValues.find(o => o.dataElement === m4_24to30_1_id)
            m4_24to30_2 = data.dataValues.find(o => o.dataElement === m4_24to30_2_id)
            m4_24to30_3 = data.dataValues.find(o => o.dataElement === m4_24to30_3_id)
            m4_24to30_4 = data.dataValues.find(o => o.dataElement === m4_24to30_4_id)

            m4_30to36_1 = data.dataValues.find(o => o.dataElement === m4_30to36_1_id)
            m4_30to36_2 = data.dataValues.find(o => o.dataElement === m4_30to36_2_id)
            m4_30to36_3 = data.dataValues.find(o => o.dataElement === m4_30to36_3_id)

            m4_36to48_1 = data.dataValues.find(o => o.dataElement === m4_36to48_1_id)
            m4_36to48_2 = data.dataValues.find(o => o.dataElement === m4_36to48_2_id)
            m4_36to48_3 = data.dataValues.find(o => o.dataElement === m4_36to48_3_id)
            m4_36to48_4 = data.dataValues.find(o => o.dataElement === m4_36to48_4_id)

            m4_48to60_1 = data.dataValues.find(o => o.dataElement === m4_48to60_1_id)
            m4_48to60_2 = data.dataValues.find(o => o.dataElement === m4_48to60_2_id)


            // console.log(data);
        })
        
    }

    // console.log(m1_0to2_1);
    // console.log(m1_0to2_2);

    {(() => {

        

    })()}

    return <div className='dashboard-container'>
        <div className='dashboard-wrapper'>
            <div className='content-wrapper'>

                {/* SHOW when the child is 1 month old */}
                { ageInMonths && ageInMonths > 1 &&   
                    <div>
                        <h4>At 2 Months</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        {/* <TableCell className="milestone-table-header" style={{ width: '5%' }}>#</TableCell> */}
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        {/* <TableCell className="milestone-table-header" align="center" style={{ width: '20%' }}>Average age</TableCell> */}
                                        {/* <TableCell className="milestone-table-header" align="center" style={{ width: '10%' }}>Picture</TableCell> */}
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '10%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        {/* <TableCell>01</TableCell> */}
                                        <TableCell>Calms down when spoken to or picked up</TableCell>
                                        {/* <TableCell align="center">01 Months</TableCell> */}
                                        <TableCell align="center">
                                            { m1_0to2_1 && m1_0to2_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m1_0to2_1 && m1_0to2_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }                                    
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_0to2_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        {/* <TableCell>02</TableCell> */}
                                        <TableCell>Looks at your face</TableCell>
                                        {/* <TableCell align="center">02 Months</TableCell> */}
                                        <TableCell align="center">
                                            { m1_0to2_2 && m1_0to2_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m1_0to2_2 && m1_0to2_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' } 
                                        </TableCell>
                                        {/* <TableCell align="center"><img src={m2} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell> */}
                                    </TableRow>
                                    <TableRow className=''>   
                                        {/* <TableCell>03</TableCell> */}
                                        <TableCell>Seems happy to see you when you walk up to her</TableCell>
                                        {/* <TableCell align="center">03 Months</TableCell> */}
                                        <TableCell align="center">
                                            { m1_0to2_3 && m1_0to2_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m1_0to2_3 && m1_0to2_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        {/* <TableCell align="center"><img src={m3} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell> */}
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        {/* <TableCell style={{ backgroundColor: '#FAE8ED'}}>04</TableCell> */}
                                        <TableCell>Smiles when you talk to or smile at her</TableCell>
                                        {/* <TableCell align="center">03 Months</TableCell> */}
                                        <TableCell align="center">
                                            { m1_0to2_4 && m1_0to2_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m1_0to2_4 && m1_0to2_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        {/* <TableCell align="center"><img src={m4} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell> */}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    
                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Makes sounds other than crying</TableCell>
                                        <TableCell align="center">
                                            { m2_0to2_1 && m2_0to2_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m2_0to2_1 && m2_0to2_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_0to2_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Reacts to loud sounds</TableCell>
                                        <TableCell align="center">
                                            { m2_0to2_2 && m2_0to2_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m2_0to2_2 && m2_0to2_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Watches you as you move</TableCell>
                                        <TableCell align="center">
                                            { m3_0to2_1 && m3_0to2_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m3_0to2_1 && m3_0to2_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_0to2_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Looks at a toy for several seconds</TableCell>
                                        <TableCell align="center">
                                            { m3_0to2_2 && m3_0to2_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m3_0to2_2 && m3_0to2_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Holds head up when on tummy</TableCell>
                                        <TableCell align="center">
                                            { m4_0to2_2 && m4_0to2_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m4_0to2_2 && m4_0to2_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_0to2_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Moves both arms and both legs</TableCell>
                                        <TableCell align="center">
                                            { m3_0to2_2 && m3_0to2_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m3_0to2_2 && m3_0to2_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Opens hands briefly</TableCell>
                                        <TableCell align="center">
                                            { m3_0to2_2 && m3_0to2_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                            { m3_0to2_2 && m3_0to2_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }
                   
                {/* SHOW when the child is 2 month old */}
                {/* 4 Months */}
                { ageInMonths && ageInMonths > 2 && 
                    <div>
                        <h4>At 4 Months</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Smiles on his own to get your attention</TableCell>
                                        <TableCell align="center">
                                        { m1_2to4_1 && m1_2to4_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_2to4_1 && m1_2to4_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_2to4_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Chuckles (not yet a full laugh) when you try to make her laugh</TableCell>
                                        <TableCell align="center">
                                        { m1_2to4_2 && m1_2to4_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_2to4_2 && m1_2to4_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Looks at you, moves, or makes sounds to get or keep your attention</TableCell>
                                        <TableCell align="center">
                                        { m1_2to4_3 && m1_2to4_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_2to4_3 && m1_2to4_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Makes sounds like "ooo", "aahh" (cooing)</TableCell>
                                        <TableCell align="center">
                                        { m2_2to4_1 && m2_2to4_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_2to4_1 && m2_2to4_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_2to4_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Makes sounds back when you talk to him</TableCell>
                                        <TableCell align="center">
                                        { m2_2to4_2 && m2_2to4_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_2to4_2 && m2_2to4_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Turns head towards the sound of your voice</TableCell>
                                        <TableCell align="center">
                                        { m2_2to4_3 && m2_2to4_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_2to4_3 && m2_2to4_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>If hungry, opens mouth when she sees breast</TableCell>
                                        <TableCell align="center">
                                        { m3_2to4_1 && m3_2to4_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_2to4_1 && m3_2to4_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_2to4_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Looks at his hands with interest</TableCell>
                                        <TableCell align="center">
                                        { m3_2to4_2 && m3_2to4_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_2to4_2 && m3_2to4_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Holds head steady without support when you are holding her</TableCell>
                                        <TableCell align="center">
                                        { m4_2to4_1 && m4_2to4_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_2to4_1 && m4_2to4_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_2to4_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Holds a toy when you put it in his hand</TableCell>
                                        <TableCell align="center">
                                        { m4_2to4_2 && m4_2to4_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_2to4_2 && m4_2to4_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Uses her arm to swing at toys</TableCell>
                                        <TableCell align="center">
                                        { m4_2to4_3 && m4_2to4_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_2to4_3 && m4_2to4_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Brings hands to mouth</TableCell>
                                        <TableCell align="center">
                                        { m4_2to4_4 && m4_2to4_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_2to4_4 && m4_2to4_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Pushes up onto elbows/forearms when on tummy</TableCell>
                                        <TableCell align="center">
                                        { m4_2to4_5 && m4_2to4_5.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_2to4_5 && m4_2to4_5.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* SHOW when the child is 4 month old */}

                {/* 6 Months */}
                { ageInMonths && ageInMonths > 4 && 
                    <div>
                        <h4>At 6 Months</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Knows familiar people</TableCell>
                                        <TableCell align="center">
                                        { m1_4to6_1 && m1_4to6_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_4to6_1 && m1_4to6_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_4to6_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Likes to look at himself in a mirror</TableCell>
                                        <TableCell align="center">
                                        { m1_4to6_2 && m1_4to6_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_4to6_2 && m1_4to6_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Laughs</TableCell>
                                        <TableCell align="center">
                                        { m1_4to6_3 && m1_4to6_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_4to6_3 && m1_4to6_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Takes turns making sounds with you</TableCell>
                                        <TableCell align="center">
                                        { m2_4to6_1 && m2_4to6_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_4to6_1 && m2_4to6_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_4to6_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Blows "raspberries" (sticks tongue out and blows)</TableCell>
                                        <TableCell align="center">
                                        { m2_4to6_2 && m2_4to6_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_4to6_2 && m2_4to6_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Makes squealing noises</TableCell>
                                        <TableCell align="center">
                                        { m2_4to6_3 && m2_4to6_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_4to6_3 && m2_4to6_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Puts things in her mouth to explore them</TableCell>
                                        <TableCell align="center">
                                        { m3_4to6_1 && m3_4to6_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_4to6_1 && m3_4to6_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_4to6_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Reaches to grab a toy he wants</TableCell>
                                        <TableCell align="center">
                                        { m3_4to6_2 && m3_4to6_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_4to6_2 && m3_4to6_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Closes lips to show she doesn't want more food</TableCell>
                                        <TableCell align="center">
                                        { m3_4to6_3 && m3_4to6_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_4to6_3 && m3_4to6_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Rolls from tummy to back</TableCell>
                                        <TableCell align="center">
                                        { m4_4to6_1 && m4_4to6_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_4to6_1 && m4_4to6_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_4to6_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Pushes up with straight arms when on tummy</TableCell>
                                        <TableCell align="center">
                                        { m4_4to6_2 && m4_4to6_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_4to6_2 && m4_4to6_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Leans on hands to support himself when sitting</TableCell>
                                        <TableCell align="center">
                                        { m4_4to6_3 && m4_4to6_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_4to6_3 && m4_4to6_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* SHOW when the child is 9 month old */}

                {/*  9 Months */}
                { ageInMonths && ageInMonths > 6 && 
                    <div>
                        <h4>At 9 Months</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Is shy, clingy, or fearful around strangers</TableCell>
                                        <TableCell align="center">
                                        { m1_6to9_1 && m1_6to9_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_6to9_1 && m1_6to9_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_6to9_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Shows several facial expressions, like happy, sad, angry, and surprised</TableCell>
                                        <TableCell align="center">
                                        { m1_6to9_2 && m1_6to9_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_6to9_2 && m1_6to9_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Looks when you call her name</TableCell>
                                        <TableCell align="center">
                                        { m1_6to9_3 && m1_6to9_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_6to9_3 && m1_6to9_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>React whe you leave (looks, reaches for you, or cries)</TableCell>
                                        <TableCell align="center">
                                        { m1_6to9_4 && m1_6to9_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_6to9_4 && m1_6to9_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Smiles or laughs when you play peek-a-boo</TableCell>
                                        <TableCell align="center">
                                        { m1_6to9_5 && m1_6to9_5.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_6to9_5 && m1_6to9_5.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Makes different sounds like "mamamama" and "babababa"</TableCell>
                                        <TableCell align="center">
                                        { m2_6to9_1 && m2_6to9_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_6to9_1 && m2_6to9_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_6to9_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Lifts arms up to be picked up</TableCell>
                                        <TableCell align="center">
                                        { m2_6to9_2 && m2_6to9_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_6to9_2 && m2_6to9_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Looks for objects when dropped out of sight (like his spoon or toy)</TableCell>
                                        <TableCell align="center">
                                        { m3_6to9_1 && m3_6to9_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_6to9_1 && m3_6to9_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_6to9_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Bands two things together</TableCell>
                                        <TableCell align="center">
                                        { m3_6to9_2 && m3_6to9_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_6to9_2 && m3_6to9_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Gets to a sitting position by herself</TableCell>
                                        <TableCell align="center">
                                        { m4_6to9_1 && m4_6to9_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_6to9_1 && m4_6to9_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_6to9_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Moves things from one hand to her other hand</TableCell>
                                        <TableCell align="center">
                                        { m4_6to9_2 && m4_6to9_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_6to9_2 && m4_6to9_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Uses fingers to "rake" food towards himself</TableCell>
                                        <TableCell align="center">
                                        { m4_6to9_3 && m4_6to9_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_6to9_3 && m4_6to9_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Sits without support</TableCell>
                                        <TableCell align="center">
                                        { m4_6to9_4 && m4_6to9_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_6to9_4 && m4_6to9_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* 12 Months */}
                { ageInMonths && ageInMonths > 9 && 
                    <div>
                        <h4>At 12 Months</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Plays games with you, like hide and seek</TableCell>
                                        <TableCell align="center">
                                        { m1_9to12_1 && m1_9to12_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_9to12_1 && m1_9to12_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_9to12_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Waves "bye-bye"</TableCell>
                                        <TableCell align="center">
                                        { m2_9to12_1 && m2_9to12_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_9to12_1 && m2_9to12_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_9to12_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Calls a parent by special name eg: Mom, Dad</TableCell>
                                        <TableCell align="center">
                                        { m2_9to12_2 && m2_9to12_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_9to12_2 && m2_9to12_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Understands "no" (pauses briefly or stops when you say it)</TableCell>
                                        <TableCell align="center">
                                        { m2_9to12_3 && m2_9to12_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_9to12_3 && m2_9to12_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Puts something in a container, like a block in a cup</TableCell>
                                        <TableCell align="center">
                                        { m3_9to12_1 && m3_9to12_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_9to12_1 && m3_9to12_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_9to12_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Looks for things he sees you hide, like a toy under a blanket</TableCell>
                                        <TableCell align="center">
                                        { m3_9to12_2 && m3_9to12_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_9to12_2 && m3_9to12_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Pulls up to stand</TableCell>
                                        <TableCell align="center">
                                        { m4_9to12_1 && m4_9to12_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_9to12_1 && m4_9to12_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_9to12_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Walks, holding on to furniture</TableCell>
                                        <TableCell align="center">
                                        { m4_9to12_2 && m4_9to12_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_9to12_2 && m4_9to12_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Drinks from a cup without a lid, as you hold it</TableCell>
                                        <TableCell align="center">
                                        { m4_9to12_3 && m4_9to12_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_9to12_3 && m4_9to12_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Picks things up between thumb and pointer finger, like small bits of food</TableCell>
                                        <TableCell align="center">
                                        { m4_9to12_4 && m4_9to12_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_9to12_4 && m4_9to12_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* 15 Months */}
                { ageInMonths && ageInMonths > 12 && 
                    <div>
                        <h4>At 15 Months</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Copies other children while playing, like taking toys out of a container when another child does</TableCell>
                                        <TableCell align="center">
                                        { m1_12to15_1 && m1_12to15_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_12to15_1 && m1_12to15_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_12to15_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Shows you an object she likes</TableCell>
                                        <TableCell align="center">
                                        { m1_12to15_2 && m1_12to15_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_12to15_2 && m1_12to15_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Claps when excited</TableCell>
                                        <TableCell align="center">
                                        { m1_12to15_3 && m1_12to15_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_12to15_3 && m1_12to15_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Hugs stuffed doll or other toys</TableCell>
                                        <TableCell align="center">
                                        { m1_12to15_4 && m1_12to15_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_12to15_4 && m1_12to15_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Shows you affection (hugs, cuddles, or kisses you)</TableCell>
                                        <TableCell align="center">
                                        { m1_12to15_5 && m1_12to15_5.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_12to15_5 && m1_12to15_5.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Tries to say one or two words besides "mama" or "dada", like "ba" for ball or "da" for dog</TableCell>
                                        <TableCell align="center">
                                        { m2_12to15_1 && m2_12to15_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_12to15_1 && m2_12to15_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_12to15_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Looks at a familiar object when you name it</TableCell>
                                        <TableCell align="center">
                                        { m2_12to15_2 && m2_12to15_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_12to15_2 && m2_12to15_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Follows directions given with both a gesture and words. For example, he gives you a toy when you hold out your hand say, "Give me the toy"</TableCell>
                                        <TableCell align="center">
                                        { m2_12to15_3 && m2_12to15_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_12to15_3 && m2_12to15_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Points to ask for something or to get help</TableCell>
                                        <TableCell align="center">
                                        { m2_12to15_4 && m2_12to15_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_12to15_4 && m2_12to15_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Tries to use things the right way, like a cup, or book</TableCell>
                                        <TableCell align="center">
                                        { m3_12to15_1 && m3_12to15_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_12to15_1 && m3_12to15_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_12to15_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>stacks at least two small objects, like blocks</TableCell>
                                        <TableCell align="center">
                                        { m3_12to15_2 && m3_12to15_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_12to15_2 && m3_12to15_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Takes a few steps on his own</TableCell>
                                        <TableCell align="center">
                                        { m4_12to15_1 && m4_12to15_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_12to15_1 && m4_12to15_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m4_12to15_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Uses fingers to feed herself some food</TableCell>
                                        <TableCell align="center">
                                        { m4_12to15_2 && m4_12to15_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_12to15_2 && m4_12to15_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* 18 Months */}
                { ageInMonths && ageInMonths > 15 && 
                    <div>
                        <h4>At 18 Months</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Moves away from you, but looks to make sure you are close by</TableCell>
                                        <TableCell align="center">
                                        { m1_15to18_1 && m1_15to18_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_15to18_1 && m1_15to18_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m1_15to18_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Points to show you something interesting</TableCell>
                                        <TableCell align="center">
                                        { m1_15to18_2 && m1_15to18_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_15to18_2 && m1_15to18_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Puts hands out for you to wash them</TableCell>
                                        <TableCell align="center">
                                        { m1_15to18_3 && m1_15to18_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_15to18_3 && m1_15to18_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>   
                                        <TableCell>Looks at a few pages in a book with you</TableCell>
                                        <TableCell align="center">
                                        { m1_15to18_4 && m1_15to18_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_15to18_4 && m1_15to18_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Helps you dress him by pushing arm through sleeve or lifting up foot</TableCell>
                                        <TableCell align="center">
                                        { m1_15to18_5 && m1_15to18_5.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_15to18_5 && m1_15to18_5.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Tries to say three or more words besides "mama" or "dada"</TableCell>
                                        <TableCell align="center">
                                        { m2_15to18_1 && m2_15to18_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_15to18_1 && m2_15to18_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m2_15to18_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Follows one-step direction without any gestures, like giving you the toy when you say, "Give it to me"</TableCell>
                                        <TableCell align="center">
                                        { m2_15to18_2 && m2_15to18_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_15to18_2 && m2_15to18_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Copies you doing chores, like sweeping with a broom</TableCell>
                                        <TableCell align="center">
                                        { m3_15to18_1 && m3_15to18_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_15to18_1 && m3_15to18_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={5} align="center"><img src={m3_15to18_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Plays with toys in a simple way, like pushing a toy car</TableCell>
                                        <TableCell align="center">
                                        { m3_15to18_2 && m3_15to18_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_15to18_2 && m3_15to18_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Walks without holding on to anyone or anything</TableCell>
                                        <TableCell align="center">
                                        { m4_15to18_1 && m4_15to18_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_15to18_1 && m4_15to18_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m4_15to18_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Scribbles</TableCell>
                                        <TableCell align="center">
                                        { m4_15to18_2 && m4_15to18_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_15to18_2 && m4_15to18_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Drinks from a cup without a lid and may spill sometimes</TableCell>
                                        <TableCell align="center">
                                        { m4_15to18_3 && m4_15to18_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_15to18_3 && m4_15to18_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Feeds herself with her fingers</TableCell>
                                        <TableCell align="center">
                                        { m4_15to18_4 && m4_15to18_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_15to18_4 && m4_15to18_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Tries to use a spoon</TableCell>
                                        <TableCell align="center">
                                        { m4_15to18_5 && m4_15to18_5.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_15to18_5 && m4_15to18_5.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Climbs on and of a couch or chair without help</TableCell>
                                        <TableCell align="center">
                                        { m4_15to18_6 && m4_15to18_6.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_15to18_6 && m4_15to18_6.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* 2 Years */}
                { ageInMonths && ageInMonths > 18 && 
                    <div>
                        <h4>At 2 Years</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Notices when other are hurt or upset, like pausing or looking sad when someone is crying</TableCell>
                                        <TableCell align="center">
                                        { m1_18to24_1 && m1_18to24_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_18to24_1 && m1_18to24_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m1_18to24_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Looks at your face to see how to react in a new situation</TableCell>
                                        <TableCell align="center">
                                        { m1_18to24_2 && m1_18to24_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_18to24_2 && m1_18to24_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Points to things in a book when you ask, like "where is the cat?"</TableCell>
                                        <TableCell align="center">
                                        { m2_18to24_1 && m2_18to24_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_18to24_1 && m2_18to24_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m2_18to24_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Says at least 2 words together</TableCell>
                                        <TableCell align="center">
                                        { m2_18to24_2 && m2_18to24_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_18to24_2 && m2_18to24_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Points to at least two body parts when you ask him to show you</TableCell>
                                        <TableCell align="center">
                                        { m2_18to24_3 && m2_18to24_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_18to24_3 && m2_18to24_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Uses more gestures that just waving and pointing, like blowing a kiss/nodding</TableCell>
                                        <TableCell align="center">
                                        { m2_18to24_4 && m2_18to24_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_18to24_4 && m2_18to24_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Holds something in one hand while using the other hand; for example, holding a container and taking the lid off</TableCell>
                                        <TableCell align="center">
                                        { m3_18to24_1 && m3_18to24_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_18to24_1 && m3_18to24_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m3_18to24_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Tries to use switches, knobs, or buttons on a toy</TableCell>
                                        <TableCell align="center">
                                        { m3_18to24_2 && m3_18to24_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_18to24_2 && m3_18to24_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Plays with more than one toy at the same time, like putting toy food on a toy plate</TableCell>
                                        <TableCell align="center">
                                        { m3_18to24_3 && m3_18to24_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_18to24_3 && m3_18to24_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Kicks a ball</TableCell>
                                        <TableCell align="center">
                                        { m4_18to24_1 && m4_18to24_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_18to24_1 && m4_18to24_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m4_18to24_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Runs</TableCell>
                                        <TableCell align="center">
                                        { m4_18to24_2 && m4_18to24_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_18to24_2 && m4_18to24_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Walks (not climbs) up a few stairs with or without help</TableCell>
                                        <TableCell align="center">
                                        { m4_18to24_3 && m4_18to24_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_18to24_3 && m4_18to24_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Eats with a spoon</TableCell>
                                        <TableCell align="center">
                                        { m4_18to24_4 && m4_18to24_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_18to24_4 && m4_18to24_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* 30 Months */}
                { ageInMonths && ageInMonths > 24 && 
                    <div>
                        <h4>At 30 Months</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Plays net to other children and sometimes play with them</TableCell>
                                        <TableCell align="center">
                                        { m1_24to30_1 && m1_24to30_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_24to30_1 && m1_24to30_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m1_24to30_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Shows you what she can do by saying, "Look at me!"</TableCell>
                                        <TableCell align="center">
                                        { m1_24to30_2 && m1_24to30_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_24to30_2 && m1_24to30_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>   
                                        <TableCell>Follows simple routines when told, like helping to pick up toys when you say, "It's clean-up time"</TableCell>
                                        <TableCell align="center">
                                        { m1_24to30_3 && m1_24to30_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_24to30_3 && m1_24to30_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Says about 50 words</TableCell>
                                        <TableCell align="center">
                                        { m2_24to30_1 && m2_24to30_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_24to30_1 && m2_24to30_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m2_24to30_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Says two or more words together, with one action word, like "Cat run"</TableCell>
                                        <TableCell align="center">
                                        { m2_24to30_2 && m2_24to30_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_24to30_2 && m2_24to30_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Names things in a book when you point and ask, "What is this?"</TableCell>
                                        <TableCell align="center">
                                        { m2_24to30_3 && m2_24to30_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_24to30_3 && m2_24to30_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Say words like "I", "me", or "we"</TableCell>
                                        <TableCell align="center">
                                        { m2_24to30_4 && m2_24to30_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_24to30_4 && m2_24to30_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        {/* <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Uses things to pretend, like feeding a block to a doll as if it were food</TableCell>
                                        <TableCell align="center">
                                        { m3_24to30_1 && m3_24to30_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_24to30_1 && m3_24to30_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        {/* <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell> */}
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Shows simple problem-solving skills, eg: standing on a stool to reach something</TableCell>
                                        <TableCell align="center">
                                        { m3_24to30_2 && m3_24to30_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_24to30_2 && m3_24to30_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Follows two-step instructions like "Put the toy down and close the door"</TableCell>
                                        <TableCell align="center">
                                        { m3_24to30_3 && m3_24to30_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_24to30_3 && m3_24to30_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Shows he knows at least one color; like pointing to a red crayon when you ask, "Which one is red?"</TableCell>
                                        <TableCell align="center">
                                        { m3_24to30_4 && m3_24to30_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_24to30_4 && m3_24to30_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        {/* <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell> */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Uses hands to twist things, like turning doorknobs or unscrewing lids</TableCell>
                                        <TableCell align="center">
                                        { m4_24to30_1 && m4_24to30_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_24to30_1 && m4_24to30_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        {/* <TableCell rowSpan={5} align="center"><img src={m1} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell> */}
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Takes some clothes off by himself, like loose pants or an open jacket</TableCell>
                                        <TableCell align="center">
                                        { m4_24to30_2 && m4_24to30_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_24to30_2 && m4_24to30_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Jumps off the ground with both feet</TableCell>
                                        <TableCell align="center">
                                        { m4_24to30_3 && m4_24to30_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_24to30_3 && m4_24to30_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Turns book pages, one at a time, when read to her</TableCell>
                                        <TableCell align="center">
                                        { m4_24to30_4 && m4_24to30_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_24to30_4 && m4_24to30_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* 3 Years */}
                { ageInMonths && ageInMonths > 30 && 
                    <div>
                        <h4>At 3 Years</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Calms down within 10 minutes after you leave her, like at a childcare drop off</TableCell>
                                        <TableCell align="center">
                                        { m1_30to36_1 && m1_30to36_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_30to36_1 && m1_30to36_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m1_30to36_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Notices other children and joins them to play</TableCell>
                                        <TableCell align="center">
                                        { m1_30to36_2 && m1_30to36_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_30to36_2 && m1_30to36_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Talks with you in conversation using at least two back-and-forth exchanges</TableCell>
                                        <TableCell align="center">
                                        { m2_30to36_1 && m2_30to36_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_30to36_1 && m2_30to36_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m2_30to36_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Asks "who", "what", "where", or "why" questions, like "Where is mommy / daddy?"</TableCell>
                                        <TableCell align="center">
                                        { m2_30to36_2 && m2_30to36_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_30to36_2 && m2_30to36_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Says what action is happening in a picture or book when asked, like "running", "eating", or "playing"</TableCell>
                                        <TableCell align="center">
                                        { m2_30to36_3 && m2_30to36_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_30to36_3 && m2_30to36_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Says first name, when asked</TableCell>
                                        <TableCell align="center">
                                        { m2_30to36_4 && m2_30to36_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_30to36_4 && m2_30to36_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Talks well enough for others to understand, most of the time</TableCell>
                                        <TableCell align="center">
                                        { m2_30to36_5 && m2_30to36_5.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_30to36_5 && m2_30to36_5.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Draws a circle, when you show him how</TableCell>
                                        <TableCell align="center">
                                        { m3_30to36_1 && m3_30to36_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_30to36_1 && m3_30to36_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m3_30to36_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Avoids touching hot objects, like a stove, when you warn her</TableCell>
                                        <TableCell align="center">
                                        { m3_30to36_2 && m3_30to36_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_30to36_2 && m3_30to36_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Strings items together, like large beads or macaroni</TableCell>
                                        <TableCell align="center">
                                        { m4_30to36_1 && m4_30to36_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_30to36_1 && m4_30to36_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m4_30to36_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Puts on some clothes by himself, like loose pants or a jacket</TableCell>
                                        <TableCell align="center">
                                        { m4_30to36_2 && m4_30to36_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_30to36_2 && m4_30to36_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Uses a fork</TableCell>
                                        <TableCell align="center">
                                        { m4_30to36_3 && m4_30to36_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_30to36_3 && m4_30to36_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* 4 Years */}
                { ageInMonths && ageInMonths > 36 && 
                    <div>
                        <h4>At 4 Years</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Pretends to be something else during play (teacher, superhero, cat)</TableCell>
                                        <TableCell align="center">
                                        { m1_36to48_1 && m1_36to48_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_36to48_1 && m1_36to48_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m1_36to48_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Asks to go play with children if none are around, like "Can I play with Ali?"</TableCell>
                                        <TableCell align="center">
                                        { m1_36to48_2 && m1_36to48_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_36to48_2 && m1_36to48_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Comforts others who are hurt or sad, like hugging a crying friend</TableCell>
                                        <TableCell align="center">
                                        { m1_36to48_3 && m1_36to48_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_36to48_3 && m1_36to48_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Avoids danger, like not jumping from tall heights at the playground</TableCell>
                                        <TableCell align="center">
                                        { m1_36to48_4 && m1_36to48_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_36to48_4 && m1_36to48_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Likes to be a "helper"</TableCell>
                                        <TableCell align="center">
                                        { m1_36to48_5 && m1_36to48_5.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_36to48_5 && m1_36to48_5.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Changes behaviour based on where she is (place of worship, library, playground)</TableCell>
                                        <TableCell align="center">
                                        { m1_36to48_6 && m1_36to48_6.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_36to48_6 && m1_36to48_6.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Say sentences with four or more words</TableCell>
                                        <TableCell align="center">
                                        { m2_36to48_1 && m2_36to48_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_36to48_1 && m2_36to48_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m2_36to48_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Says some words from a song, story, or nursery rhyme</TableCell>
                                        <TableCell align="center">
                                        { m2_36to48_2 && m2_36to48_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_36to48_2 && m2_36to48_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Talks about at least one thing tht happened during his day, like "I played soccer"</TableCell>
                                        <TableCell align="center">
                                        { m2_36to48_3 && m2_36to48_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_36to48_3 && m2_36to48_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Answers simple questions like "What is a coat for?" or "What is a crayon for?"</TableCell>
                                        <TableCell align="center">
                                        { m2_36to48_4 && m2_36to48_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_36to48_4 && m2_36to48_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Names a few colors of items</TableCell>
                                        <TableCell align="center">
                                        { m3_36to48_1 && m3_36to48_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_36to48_1 && m3_36to48_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m3_36to48_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Tells what is next in a well-known story</TableCell>
                                        <TableCell align="center">
                                        { m3_36to48_2 && m3_36to48_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_36to48_2 && m3_36to48_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Draws a person with 3 or more body parts</TableCell>
                                        <TableCell align="center">
                                        { m3_36to48_3 && m3_36to48_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_36to48_3 && m3_36to48_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Catches a large ball most of the time</TableCell>
                                        <TableCell align="center">
                                        { m4_36to48_1 && m4_36to48_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_36to48_1 && m4_36to48_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m4_36to48_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Serves himself food or pours water, with adult supervision</TableCell>
                                        <TableCell align="center">
                                        { m4_36to48_2 && m4_36to48_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_36to48_2 && m4_36to48_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Unbuttons some buttons</TableCell>
                                        <TableCell align="center">
                                        { m4_36to48_3 && m4_36to48_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_36to48_3 && m4_36to48_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Holds crayon or pencil between fingers and thumb (not a fist)</TableCell>
                                        <TableCell align="center">
                                        { m4_36to48_4 && m4_36to48_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_36to48_4 && m4_36to48_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                    </div>
                }

                {/* 5 Years */}
                { ageInMonths && ageInMonths > 48 && 
                    <div>
                        <h4>At 5 Years</h4>
                        <h4>Milestone I - Social / Emotional Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Follows rules or takes turns when playing games with other children</TableCell>
                                        <TableCell align="center">
                                        { m1_48to60_1 && m1_48to60_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_48to60_1 && m1_48to60_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m1_48to60_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Sings, dances, or acts for you</TableCell>
                                        <TableCell align="center">
                                        { m1_48to60_2 && m1_48to60_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_48to60_2 && m1_48to60_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Does simple chores at home, like matching socks</TableCell>
                                        <TableCell align="center">
                                        { m1_48to60_3 && m1_48to60_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m1_48to60_3 && m1_48to60_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone II - Language / Communication Milestone</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Tells a story she heared or made up with at least two events. For example, a cat was stuck in a tree and a firefighter saved it</TableCell>
                                        <TableCell align="center">
                                        { m2_48to60_1 && m2_48to60_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_48to60_1 && m2_48to60_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m2_48to60_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Answers simple questions about a book or story after you read or tell it to him</TableCell>
                                        <TableCell align="center">
                                        { m2_48to60_2 && m2_48to60_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_48to60_2 && m2_48to60_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Keeps a conversation going with more than three back-and-forth exchanges</TableCell>
                                        <TableCell align="center">
                                        { m2_48to60_3 && m2_48to60_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_48to60_3 && m2_48to60_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Uses or recognizes simple rhymes (bat-cat, ball-tall)</TableCell>
                                        <TableCell align="center">
                                        { m2_48to60_4 && m2_48to60_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m2_48to60_4 && m2_48to60_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone III - Cognitive Milestone (learning, thinking, problem-solving)</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Counts to 10</TableCell>
                                        <TableCell align="center">
                                        { m3_48to60_1 && m3_48to60_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_48to60_1 && m3_48to60_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m3_48to60_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Names some numbers between 1 and 5 when you point to them</TableCell>
                                        <TableCell align="center">
                                        { m3_48to60_2 && m3_48to60_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_48to60_2 && m3_48to60_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Uses words about time, like "yesterday", "tomorrow", "morning", or "night"</TableCell>
                                        <TableCell align="center">
                                        { m3_48to60_3 && m3_48to60_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_48to60_3 && m3_48to60_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Pays attention for 5 to 10 minutes during activities. For example, during story time or making arts and crafts (screen time does not count)</TableCell>
                                        <TableCell align="center">
                                        { m3_48to60_4 && m3_48to60_4.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_48to60_4 && m3_48to60_4.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Writes some letters in her name</TableCell>
                                        <TableCell align="center">
                                        { m3_48to60_5 && m3_48to60_5.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_48to60_5 && m3_48to60_5.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Names some letters when you point to them</TableCell>
                                        <TableCell align="center">
                                        { m3_48to60_6 && m3_48to60_6.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m3_48to60_6 && m3_48to60_6.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>

                        <h4>Milestone IV - Movement / Physical Development Milestones</h4>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead className='table-header'>
                                    <TableRow className='phc-table-header'>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '55%' }}>Milestone</TableCell>
                                        <TableCell className="phc-table-header-cell" align="center" style={{ width: '10%' }}>Status</TableCell>
                                        <TableCell className="phc-table-header-cell" style={{ width: '5%' }}></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow className=''>
                                        <TableCell>Buttons some buttons</TableCell>
                                        <TableCell align="center">
                                        { m4_48to60_1 && m4_48to60_1.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_48to60_1 && m4_48to60_1.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                        <TableCell className="image-row" rowSpan={6} align="center"><img src={m4_48to60_img} alt='Startled by loud noices' style={{ height: '10em'}} /></TableCell>
                                    </TableRow>
                                    <TableRow className='grey-row'>
                                        <TableCell>Hops on one foot</TableCell>
                                        <TableCell align="center">
                                        { m4_48to60_2 && m4_48to60_2.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_48to60_2 && m4_48to60_2.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow className=''>
                                        <TableCell>Uses a fork</TableCell>
                                        <TableCell align="center">
                                        { m4_48to60_3 && m4_48to60_3.value === 'true' ? <DoneIcon sx={{ color: 'green' }}/> : '' }
                                        { m4_48to60_3 && m4_48to60_3.value === 'false' ? <CloseIcon sx={{ color: 'red' }}/> : '' }
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                }
                
                {/* <h4>From 6 months to 12 months</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className='pink-row'>
                                <TableCell style={{ width: '5%' }}>#</TableCell>
                                <TableCell align="center" style={{ width: '55%' }}>Development Milestones</TableCell>
                                <TableCell align="center" style={{ width: '20%' }}>Average age</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Picture</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className='purple-row'>
                                <TableCell>01</TableCell>
                                <TableCell>Sits well without support</TableCell>
                                <TableCell align="center">07 Months</TableCell>
                                <TableCell align="center"><img src={m12} alt='Sits well without support' style={{ height: '3em'}}/></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>02</TableCell>
                                <TableCell>Passes objects from hand to hand</TableCell>
                                <TableCell align="center">08 Months</TableCell>
                                <TableCell align="center"><img src={m13} alt='Passes objects from hand to hand' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>   
                                <TableCell>03</TableCell>
                                <TableCell>Stands holding on</TableCell>
                                <TableCell align="center">09 Months</TableCell>
                                <TableCell align="center"><img src={m14} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>04</TableCell>
                                <TableCell>Imitate simple speech sounds</TableCell>
                                <TableCell align="center">09 Months</TableCell>
                                <TableCell align="center"><img src={m15} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>05</TableCell>
                                <TableCell>Pull to standing position without help</TableCell>
                                <TableCell align="center">10 Months</TableCell>
                                <TableCell align="center"><img src={m16} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>06</TableCell>
                                <TableCell>Begins placing objects in and out of a container</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m17} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>07</TableCell>
                                <TableCell>Plays simple game like peek-a-boo</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m18} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>08</TableCell>
                                <TableCell>Copies multiple gestures (clap)</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m19} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>09</TableCell>
                                <TableCell>Crawls on hands and knees</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m20} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <br></br>
                <h4>From 1 to 2 years</h4>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow className='pink-row'>
                                <TableCell style={{ width: '5%' }}>#</TableCell>
                                <TableCell align="center" style={{ width: '55%' }}>Development Milestones</TableCell>
                                <TableCell align="center" style={{ width: '20%' }}>Average age</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Picture</TableCell>
                                <TableCell align="center" style={{ width: '10%' }}>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow className='purple-row'>
                                <TableCell>01</TableCell>
                                <TableCell>Sits well without support</TableCell>
                                <TableCell align="center">07 Months</TableCell>
                                <TableCell align="center"><img src={m12} alt='Sits well without support' style={{ height: '3em'}}/></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>02</TableCell>
                                <TableCell>Passes objects from hand to hand</TableCell>
                                <TableCell align="center">08 Months</TableCell>
                                <TableCell align="center"><img src={m13} alt='Passes objects from hand to hand' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>   
                                <TableCell>03</TableCell>
                                <TableCell>Stands holding on</TableCell>
                                <TableCell align="center">09 Months</TableCell>
                                <TableCell align="center"><img src={m14} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>04</TableCell>
                                <TableCell>Imitate simple speech sounds</TableCell>
                                <TableCell align="center">09 Months</TableCell>
                                <TableCell align="center"><img src={m15} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>05</TableCell>
                                <TableCell>Pull to standing position without help</TableCell>
                                <TableCell align="center">10 Months</TableCell>
                                <TableCell align="center"><img src={m16} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>06</TableCell>
                                <TableCell>Begins placing objects in and out of a container</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m17} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>07</TableCell>
                                <TableCell>Plays simple game like peek-a-boo</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m18} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='pink-row'>
                                <TableCell>08</TableCell>
                                <TableCell>Copies multiple gestures (clap)</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m19} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                            <TableRow className='purple-row'>
                                <TableCell>09</TableCell>
                                <TableCell>Crawls on hands and knees</TableCell>
                                <TableCell align="center">11 Months</TableCell>
                                <TableCell align="center"><img src={m20} alt='Startled by loud noices' style={{ height: '3em'}} /></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> */}

                {/* <Grid container direction="row" alignItems="center" sx={{ my: 2 }}>
                <Grid item xs="auto">
                        <Paper style={classes.milestoneTitle.paper}>
                            <div>MILESTONE - I</div>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto">
                            <div style={classes.milestoneTag.paper}>
                                Social / Emotional
                            </div>
                    </Grid>
            </Grid>
            */}

                
            {/* <div style={classes.root}>
                <Grid sx={{ mb: 3 }} container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_1_paper}>
                            <div style={m1_0to2_1_cardTitle}>Calms down when spoken to or picked up</div>
                            <div style={m1_0to2_1_cardMonths}>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_2_paper}>
                            <div style={m1_0to2_2_cardTitle}>Looks at your face</div>
                            <div style={m1_0to2_2_cardMonths}>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_3_paper}>
                            <div style={m1_0to2_3_cardTitle}>Seems happy to see you when you walk up to her</div>
                            <div style={m1_0to2_3_cardMonths}>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid sx={{ mb: 3 }} container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_1_paper}>
                            <div style={m1_0to2_1_cardTitle}>Smiles on his own to get your attention</div>
                            <div style={m1_0to2_1_cardMonths}>(2-4 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_2_paper}>
                            <div style={m1_0to2_2_cardTitle}>Chuckles (not yet a full laugh) when you try to make her laugh</div>
                            <div style={m1_0to2_2_cardMonths}>(2-4 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={m1_0to2_3_paper}>
                            <div style={m1_0to2_3_cardTitle}>Looks at you, moves, or makes sounds to get or keep your attention</div>
                            <div style={m1_0to2_3_cardMonths}>(2-4 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>

            <Grid container direction="row" alignItems="center" sx={{ my: 2 }}>
                <Grid item xs="auto">
                        <Paper style={classes.milestoneTitle.paper}>
                            <div>MILESTONE - II</div>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto">
                            <div style={classes.milestoneTag.paper}>
                                Language / Communication
                            </div>
                    </Grid>
            </Grid>

            <div style={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={classes.disabled.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.success.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.failure.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>

            <Grid container direction="row" alignItems="center" sx={{ my: 2 }}>
                <Grid item xs="auto">
                        <Paper style={classes.milestoneTitle.paper}>
                            <div>MILESTONE - III</div>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto">
                            <div style={classes.milestoneTag.paper}>
                                Cognitive (learning, thinking, problem-solving)
                            </div>
                    </Grid>
            </Grid>

            <div style={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={classes.disabled.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.success.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.failure.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>

            <Grid container direction="row" alignItems="center" sx={{ my: 2 }}>
                <Grid item xs="auto">
                        <Paper style={classes.milestoneTitle.paper}>
                            <div>MILESTONE - IV</div>
                        </Paper>
                    </Grid>
                    <Grid item xs="auto">
                            <div style={classes.milestoneTag.paper}>
                                Movement / Physical Development
                            </div>
                    </Grid>
            </Grid>

            <div style={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={classes.disabled.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.success.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.failure.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <br/><br/>            

            <div style={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Paper style={classes.disabled.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.success.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                    <Grid item xs={2}>
                        <Paper style={classes.failure.paper}>
                            <div>Reply to Smile</div>
                            <div>(0-2 months)</div>
                            <img src=""/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>  
            */}
            </div>
        </div>
    </div>
}

export default Milestones;