//to display date ont the top right
var d=new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var day=new Array();
day[0]="Sunday";
day[1]="Monday";
day[2]="Tuesday";
day[3]="Wednesday";
day[4]="Thursday";
day[5]="Friday";
day[6]="Saturday";

var content=`${day[d.getDay()]}, ${d.getDate()} ${month[d.getMonth()]}`;
document.getElementById("date").innerHTML=content;

//fetching news content via api
let apiKey = '255cf8e075984ced8debf7b84f8801dc'


//to fetch top_headlines
// Create an ajax get request
const xhr=new XMLHttpRequest();
xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`,true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let condition=false,count=0;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].title!=null&&articles[count].url!=null){
                console.log(articles[count].urlToImage);
                var image=articles[count].urlToImage;
                document.getElementById("first_left").style.backgroundImage = `url('${articles[count].urlToImage}')`;
                document.getElementById("text").innerHTML=articles[count].title;
                document.getElementById("link").href=articles[count].url;
                condition=true;
                count++;
            }
            else{
                count++;
            }
        }
        condition=false;

        for(var i=1;i<5;i++){
            condition=false;
            while(!condition){
                if(articles[count].urlToImage!=null&&articles[count].title!=null&&articles[count].description!=null&&articles[count].url!=null){
                    var im= "image"+i;
                    var txt="text"+i;
                    var lnk="link"+i;
                    document.getElementById(im).style.backgroundImage = `url('${articles[count].urlToImage}')`;
                    document.getElementById(txt).innerHTML=articles[count].title;
                    document.getElementById(lnk).href=articles[count].url;
                    condition=true;
                    count++;
                }
                else{
                    count++;
                }
            }
        }

    }
}
xhr.send();

//fetching content for the Top Stories section
fetch(`https://newsapi.org/v2/everything?q=economy&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults1);

function displayResults1(news){
    articles=news.articles;
    condition=false;
    count=0;
    for(var i=1;i<5;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].title!=null&&articles[count].url!=null){
                image="imgs"+i;
                description="desps"+i;
                link="links"+i;
                document.getElementById(image).src= articles[count].urlToImage;
                document.getElementById(description).innerHTML=articles[count].title;
                document.getElementById(link).href=articles[count].url;
                condition=true;
                count++;
            }
            else{
                count++;
            }
        }
    }
}

//fetching content for the Technology section
fetch(`https://newsapi.org/v2/everything?q=technology&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults2);

function displayResults2(news){
    articles=news.articles;
    condition=false;
    count=0;
    for(var i=1;i<5;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].title!=null&&articles[count].url!=null){
                image="imgt"+i;
                description="despt"+i;
                link="linkt"+i;
                document.getElementById(image).src= articles[count].urlToImage;
                document.getElementById(description).innerHTML=articles[count].title;
                document.getElementById(link).href=articles[count].url;
                condition=true;
                count++;
            }
            else{
                count++;
            }
        }
    }
}

//fetching content for the Entertainment section
fetch(`https://newsapi.org/v2/everything?q=entertainment&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults3);

function displayResults3(news){
    articles=news.articles;
    condition=false;
    count=0;
    for(var i=1;i<5;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].title!=null&&articles[count].url!=null){
                image="imge"+i;
                description="despe"+i;
                link="linke"+i;
                document.getElementById(image).src= articles[count].urlToImage;
                document.getElementById(description).innerHTML=articles[count].title;
                document.getElementById(link).href=articles[count].url;
                condition=true;
                count++;
            }
            else{
                count++;
            }
        }
    }
}

//fetching content for the Health section
fetch(`https://newsapi.org/v2/everything?q=health&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults4);

function displayResults4(news){
    articles=news.articles;
    condition=false;
    count=0;
    for(var i=1;i<5;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].title!=null&&articles[count].url!=null){
                image="imgh"+i;
                description="desph"+i;
                link="linkh"+i;
                document.getElementById(image).src= articles[count].urlToImage;
                document.getElementById(description).innerHTML=articles[count].title;
                document.getElementById(link).href=articles[count].url;
                condition=true;
                count++;
            }
            else{
                count++;
            }
        }
    }
}

//fetching content for the Business section
fetch(`https://newsapi.org/v2/everything?q=business&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults5);

function displayResults5(news){
    articles=news.articles;
    condition=false;
    count=0;
    for(var i=1;i<5;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].title!=null&&articles[count].url!=null){
                image="imgb"+i;
                description="despb"+i;
                link="linkb"+i;
                document.getElementById(image).src= articles[count].urlToImage;
                document.getElementById(description).innerHTML=articles[count].title;
                document.getElementById(link).href=articles[count].url;
                condition=true;
                count++;
            }
            else{
                count++;
            }
        }
    }
}

//fetching content for the Science section
fetch(`https://newsapi.org/v2/everything?q=science&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults6);

function displayResults6(news){
    articles=news.articles;
    condition=false;
    count=0;
    for(var i=1;i<5;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].title!=null&&articles[count].url!=null){
                image="imgc"+i;
                description="despc"+i;
                link="linkc"+i;
                document.getElementById(image).src= articles[count].urlToImage;
                document.getElementById(description).innerHTML=articles[count].title;
                document.getElementById(link).href=articles[count].url;
                condition=true;
                count++;
            }
            else{
                count++;
            }
        }
    }
}