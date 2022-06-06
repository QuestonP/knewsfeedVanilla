
// Variables 

let newsDataArray = [];
const newsQuery = document.getElementById("newsQuery");
const newsDetails = document.getElementById("newsType");
const newsSection = document.getElementById("mainbody");

// Buttons 

generalBtn = document.getElementById("pageName");
healthBtn = document.getElementById("health-radio");
businessBtn = document.getElementById("economy-radio");
techBtn = document.getElementById("tech-radio");
sportsBtn = document.getElementById("sports-radio");
entertainmentBtn = document.getElementById("culture-radio");
videoBtn = document.getElementById("watch-radio");






// API
const apiKey = "df662c9306b94bcaaab1069c8a3aade6";
const GENERAL_NEWS_US = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const HEALTH_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const ECON_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const TECH_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=df662c9306b94bcaaab1069c8a3aade6";
const MUSIC_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=df662c9306b94bcaaab1069c8a3aade6";


window.onload = function(){
    fetchGeneralNews();
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

const fetchSearchNews = async () => {

    if(newsQuery === null){
        return;
    }
    const response = await fetch(searchNews+newsQuery.value+"&apiKey="+apiKey);
    newsDataArray = [];

    if(response.status >=200 && response.status < 300){
        const resJson = await response.json();
        newsDataArray = resJson.articles;
    } else {
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




function displayNews(){
    
    newsDataArray.forEach(news =>{

        var date = news.publishedAt.split(); 

        let link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "blank");
        link.href = news.url;
        link.innerHTML = "Visit Site To Learn More..";

        var colum = document.createElement('div');
        colum.className = "col-sm-2 col-md-4 col-lg-6";
        colum.id = "column"

        var card = document.createElement('div');
        card.className = "px-2 py-2";

        var img = document.createElement('img');
        img.setAttribute("height", "matchparent");
        img.setAttribute("width", "100%");
        img.src= news.urlToImage;

        var cardBody = document.createElement('div');
        var newsHeading = document.createElement('div');
        newsHeading.className = "card-title fw-bold";
        newsHeading.innerHTML = news.title;

        let dateHeading = document.createElement('h6');
        dateHeading.className = "text-dark";
        dateHeading.innerHTML = date[0];

        let descritpion = document.createElement('p');
        descritpion.className = "text-dark text-wrap";
        descritpion.innerHTML = news.descritpion;

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(descritpion);
        cardBody.appendChild(link);
        
        card.appendChild(img);
        card.appendChild(cardBody);

        colum.append(card);
    
        newsDetails.append(colum);

    });
}

//functions 
generalBtn.addEventListener("click", function(){
    fetchGeneralNews();
    newsDetails.innerHTML = '<h3>General News</h3>';
    newsDetails.className = "text-center justify-content-center";
});

healthBtn.addEventListener("click", function(){
    fetchHealthNews();
    newsDetails.innerHTML = '<h3>Health News</h3>';
    newsDetails.className = "text-center justify-content-center";
});

businessBtn.addEventListener("click", function(){
    fetchBusinessNews();
    newsDetails.innerHTML = '<h3>Business News</h3>';
    newsDetails.className = "text-center justify-content-center";
});

techBtn.addEventListener("click", function(){
    fetchTechNews();
    newsDetails.innerHTML = '<h3>Tech News</h3>';
    newsDetails.className = "text-center justify-content-center";
});

sportsBtn.addEventListener("click", function(){
    fetchSportsNews();
    newsDetails.innerHTML = '<h3>Sports News</h3>';
    newsDetails.className = "text-center justify-content-center";
});

entertainmentBtn.addEventListener("click", function(){
    fetchEntertainmentNews();
    newsDetails.innerHTML = '<h3>Entertainment News</h3>';
    newsDetails.className = "text-center justify-content-center";
});

//generalBtn = document.getElementById("politics-radio");







// search button
// generalBtn.addEventListner("click", function(){
//     fetchGeneralNews();
    
// });










