//Init spreadsheetData variable 
let spreadsheetData = null;

//Get from callback and fetch data into spreadsheetData
function doData(json) {
    spreadsheetData = json.feed.entry;
    console.log(spreadsheetData);
}