
// Variables 

let newsDataArray = [];
const newsQuery = document.getElementById("newsQuery");
const newsDetails = document.getElementById("newsType");
const newsSection = document.getElementById("mainbody");
const stockSide = document.getElementById('stockUpdates');

// Buttons 

generalBtn = document.getElementById("pageName");
healthBtn = document.getElementById("health-radio");
businessBtn = document.getElementById("economy-radio");
techBtn = document.getElementById("tech-radio");
sportsBtn = document.getElementById("sports-radio");
entertainmentBtn = document.getElementById("culture-radio");
saveBtn = document.getElementById("save-radio");
page = document.getElementById("Header");



// API Stocks
// const stockApiKey = 'CVB77TROLN34RSSA'; //"Q4Z33L_hksraPQp3rQdOr9pygMXkMm99";
// const stocks = f`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockName}&interval=5min&apikey=${stockApiKey}`;
// const stockName = 'APPL';
// let stockDataArr =[];

// const fetchStockData = async () => {
//     const response = await fetch(stocks);
//     stockDataArr = [];

//         const resJson = await response.json();
//         stockDataArr = resJson.results;
//         console.log(resJson.status, resJson.statusText);
    

//     displayStockData();
// }


// function displayStockData(){
//     stockDataArr.forEach( stock => {
//         stock['h'];
//     });

// }



// API News
const NewsapiKey = "df662c9306b94bcaaab1069c8a3aade6";
const GENERAL_NEWS_US = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const ECON_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const TECH_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const MUSIC_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="

let lat = 35.996653; 
let lon = -78.9018053;
let weatherData = [];

const weatherAPI = "https://api.openweathermap.org/data/2.5/weather?lat=35.996653&lon=-78.9018053&units=imperial&appid=3dbe7193da706594d779dd193ef705bd"; 

const fetchWeatherData = async () => {
    const response = await fetch(weatherAPI);
    weatherData = [];

    if(response.status >=200 && response.status < 300)  {
    const resJson = await response.json();
    weatherData = [
        resJson.main, 
        resJson.weather
    ];}

    displayWeather();
};

function displayWeather(){
    const card = document.createElement('div');
    card.classList.add('card', 'rounded');
    card.style.backgroundColor = 'white';
    const cardHeader = document.createElement('h6');
    const cardImg = document.createElement('img');

    if(weatherData[1][0]['main'] == 'Clouds' || weatherData[1][0]['main'] == "Fog" ) {
        cardHeader.innerHTML = "Current Temperature: " + weatherData[0]['temp']+ "F";
        cardImg.src = '/images/cloudy.gif';
        cardImg.setAttribute('width', '20%');
       
    }
    
    if(weatherData[1][0]['main'] == 'Clear' ||weatherData[1][0]['main'] == 'Sunny' ) {
    cardHeader.innerHTML = "Current Temperature: " + weatherData[0]['temp']+ "F ";
    cardImg.src = '/images/sun.gif';
    cardImg.setAttribute('width', '20%');
   
    }

    if(weatherData[1][0]['main'] == 'Rain' ||weatherData[1][0]['main'] == 'Heavy Rain' ) {
    cardHeader.innerHTML = "Current Temperature: " + weatherData[0]['temp']+ "F";
    cardImg.src = '/images/rain.gif';
    cardImg.setAttribute('width', '20%');
   
    }

    if(weatherData[1][0]['main'] == 'Light Rain' || weatherData[1][0]['main'] == 'Drizzle' ) {
        cardHeader.innerHTML = "Current Temperature: " + weatherData[0]['temp']+ "F";
        cardImg.src = '/images/drizzle.gif';
        cardImg.setAttribute('width', '20%');
       
        }

    if(weatherData[1][0]['main'] == 'Snow' ||weatherData[1][0]['main'] == 'Light Snow' ) {
        cardHeader.innerHTML = "Current Temperature: " + weatherData[0]['temp']+ "F";
        cardImg.src = './images/snow.gif';
        cardImg.setAttribute('width', '20%');
       
        }
    
        if(weatherData[1][0]['main'] == "Thunderstorm" ||weatherData[1][0]['main'] == 'Stormy' ) {
            cardHeader.innerHTML = "Current Temperature: " + weatherData[0]['temp']+ "F";
            cardImg.src = './images/storm.gif';
            cardImg.setAttribute('width', '20%');
           
            }
    

    console.log(weatherData, weatherData.statusText);
    cardHeader.classList.add('card-title');
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.classList.add('d-flex', 'justify-content-center', 'text-black', 'rounded');
    cardBody.style.backgroundColor = 'white';
    cardBody.style.lineHeight = '200%';
    weatherData[1].icon; 
    const weatherDescript = document.createElement('p');
    weatherDescript.innerHTML = 'Highs of: ' + weatherData[0].temp_max + '\n' + " Lows of: " + weatherData[0].temp_min;
    weatherDescript.classList.add('mx-2');
    weatherDescript.style.lineHeight = "200%";
    



    cardBody.append(cardHeader);
    cardBody.append(cardImg);
    cardBody.append(weatherDescript);
    card.append(cardBody);
    card.style.height = '100%';
    page.append(card);
    




}


window.onload = function(){
    fetchGeneralNews();
    fetchWeatherData();
};

const fetchGeneralNews = async () => {

    const response = await fetch(GENERAL_NEWS_US);
    newsDataArray = [];

    if(response.status >=200 && response.status < 300){
        const resJson = await response.json();
        newsDataArray = resJson.articles;
        console.log(newsDataArray);
        console.log(response.status, response.statusText);
    } else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}


const fetchEntertainmentNews = async () => {
    const response = await fetch(MUSIC_NEWS);
    newsDataArray = [];

    if(response.status >=200 && response.status < 300){
        const resJson = await response.json();
        newsDataArray = resJson.articles;
        console.log(resJson);
    } else {
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchHealthNews = async () => {
    const response = await fetch(HEALTH_NEWS);
    newsDataArray = [];

    if(response.status >=200 && response.status < 300){
        const resJson = await response.json();
        newsDataArray = resJson.articles;
        console.log(resJson);
    } else{
        console.log(response.status, response.statusText);
    
    }

    displayNews();
}

const fetchBusinessNews = async () => {
    const response = await fetch(ECON_NEWS);
    newsDataArray = [];

    if(response.status >=200 && response.status < 300){
        const resJson = await response.json();
        newsDataArray = resJson.articles;
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchTechNews = async () => {
    const response = await fetch(TECH_NEWS);
    newsDataArray = [];

    if(response.status >=200 && response.status < 300){
        const resJson = await response.json();
        newsDataArray = resJson.articles;
        console.log(resJson);
    } else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS);
    newsDataArray = [];

    if(response.status >=200 && response.status < 300){
        const resJson = await response.json();
        newsDataArray = resJson.articles;
        console.log(resJson);
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}

const fetchQueryNews = async () => {
    const response = await fetch(SEARCH_NEWS+newsQuery.value+"&apiKey="+NewsapiKey);
    newsDataArray = [];

    if(response.status >=200 && response.status < 300){
        const resJson = await response.json();
        newsDataArray = resJson.articles;
        console.log(resJson);
    }else{
        console.log(response.status, response.statusText);
    }

    displayNews();
}




function displayNews(){
    
    newsDataArray.forEach(news =>{

        var date = news.publishedAt.split(); 

        let link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "blank");
        link.href = news.url;
        link.innerHTML = "Learn More..";

        var colum = document.createElement('div');
        colum.className = "col-lg-4 col-sm-12 col-md-6";
        colum.id = "column"

        var colum2 = document.createElement('div');
        colum2.className = "col-lg-6 col-sm-3 col-md-4";
        colum2.id = "column2"

        var card = document.createElement('div');
        card.className = "px-2 py-2 card";

        var img = document.createElement('img');
        img.setAttribute("height", "matchparent");
        img.setAttribute("width", "100%");
        img.src = news.urlToImage;

        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        var newsHeading = document.createElement('div');
        newsHeading.className = "card-title fw-bold container";
        newsHeading.innerHTML = news.title;

        let dateHeading = document.createElement('h6');
        dateHeading.className = "text-dark";
        dateHeading.innerHTML = date[0];

        let descritpion = document.createElement('p');
        descritpion.className = "text-dark";
        descritpion.innerHTML = news.descritpion;

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(img);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(descritpion);
        cardBody.appendChild(link);
        
        card.appendChild(cardBody);
        card.classList.add('border-0', 'my-2');

        colum.append(card);
    
        newsDetails.append(colum);

    });
}

//functions 
generalBtn.addEventListener("click", function(){
    fetchGeneralNews();
    newsDetails.innerHTML = '<h3>General News</h3>';
    newsDetails.classList.add("text-center", "justify-content-center");
    document.querySelector('body').style.backgroundColor = "#efefef";
});

healthBtn.addEventListener("click", function(){
    fetchHealthNews();
    newsDetails.innerHTML = '<h3>Health News</h3>';
    newsDetails.classList.add("text-center", "justify-content-center");
    document.querySelector('body').style.backgroundColor = '#D3D3D3';
    
});

businessBtn.addEventListener("click", function(){
    fetchBusinessNews();
    newsDetails.innerHTML = '<h3>Business News</h3>';
    newsDetails.classList.add("text-center", "justify-content-center");
    document.querySelector('body').style.backgroundColor = '#ffcccb';
});

techBtn.addEventListener("click", function(){
    fetchTechNews();
    newsDetails.innerHTML = '<h3>Tech News</h3>';
    newsDetails.classList.add("text-center", "justify-content-center");
    document.querySelector('body').style.backgroundColor = '#90ee90';
});

sportsBtn.addEventListener("click", function(){
    fetchSportsNews();
    newsDetails.innerHTML = '<h3>Sports News</h3>';
    newsDetails.classList.add("text-center", "justify-content-center");
    document.querySelector('body').style.backgroundColor = '#add8e6';
});

entertainmentBtn.addEventListener("click", function(){
    fetchEntertainmentNews();
    newsDetails.innerHTML = '<h3>Entertainment News</h3>';
    newsDetails.classList.add("text-center", "justify-content-center");
    document.querySelector('body').style.backgroundColor = '#FFFF66';
});

newsQuery.addEventListener("change", function(){
    fetchQueryNews();
    newsDetails.innerHTML = '<h3>Search Results</h3>';
    newsDetails.classList.add("text-center", "justify-content-center");
    document.querySelector('body').style.backgroundColor = '#ffdab9';
});
//generalBtn = document.getElementById("politics-radio");







// search button
// generalBtn.addEventListner("click", function(){
//     fetchGeneralNews();
    
// });










