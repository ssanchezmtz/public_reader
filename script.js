//Init spreadsheetData variable 
let spreadsheetData = null;

//Init elementToRead variable
let elementToRead = [];

//Set galleries const for manipulation
const mainContainer = document.querySelector('#main.galleries');

//Get from callback and fetch data into spreadsheetData
function doData(json) {
    spreadsheetData = json.feed.entry;
}

//Read the first collumn of the spreadsheet and use as the main elements for the data reader 
function readFisrtColumnData(){
    let data = spreadsheetData;
    for (let row = 0; row < data.length; row++) {
        let cell = data[row]["gs$cell"];
        if(!(cell.row == 1)){
            if(cell.col == 1){
                elementToRead.push(cell["$t"]);
            }
        }
    }
}

//Create a list of links and images for each element to read
function createCatalogThumbnails(){
    let elemnts = elementToRead;
    elemnts.forEach(element => {
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        link.setAttribute('href', `./${element}/index.html`);
        const thumbnail = document.createElement('img');
        thumbnail.setAttribute('src', `./${element}/cover.jpg`);
        thumbnail.setAttribute('alt', `${element}`);
        link.appendChild(thumbnail);
        mainContainer.appendChild(link);
    });
}

//Initi the app in order process
function initAppReader(){
    readFisrtColumnData();
    createCatalogThumbnails();

}

//Wait the DOM before start the app
document.addEventListener('DOMContentLoaded', function () {
    initAppReader();
});