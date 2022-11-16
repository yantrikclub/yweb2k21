const { GoogleSpreadsheet } = require('google-spreadsheet');
const fs = require('fs');
require('dotenv').config({path:"./config/config.env"})
const doc = new GoogleSpreadsheet(process.env.SHEETID)
const credentials = JSON.parse(fs.readFileSync('./config/credentials_yantrik.json'))
const getrows = async () => {
    await doc.useServiceAccountAuth({
        client_email: credentials.client_email,
        private_key: credentials.private_key
    });
    await doc.loadInfo();
    let sheet = doc.sheetsByIndex[0];
    let rows = await sheet.getRows();
    let upevent = [];
    for(let i=0;i<rows.length;i++){
        let arr ={};
        arr["image"] = rows[i].image;
        arr["date"] = rows[i].date;
        arr["time"] = rows[i].time;
        arr["venue"] = rows[i].venue;
        arr["title"] = rows[i].title;
        arr['status'] = rows[i].status;
        upevent.push(arr);
    }
    return upevent;
}
module.exports = getrows;
