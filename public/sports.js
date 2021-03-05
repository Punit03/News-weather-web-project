//fetching news content via api
let apiKey = '255cf8e075984ced8debf7b84f8801dc';

//fetching content for the Top stories section
fetch(`https://newsapi.org/v2/everything?q=sports&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults);

function displayResults(news){
    let articles=news.articles;
    let condition=false;
    let count=0;
    for(var i=1;i<9;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].description!=null&&articles[count].url!=null){
                var image="img"+i;
                var description="desp"+i;
                var link="link"+i;
                console.log(articles[count].url);
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

//fetching content for the cricket section
fetch(`https://newsapi.org/v2/everything?q=cricket&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults1);

function displayResults1(news){
    articles=news.articles;
    condition=false;
    count=0;
    for(var i=1;i<4;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].description!=null&&articles[count].url!=null){
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

//fetching content for the football section
fetch(`https://newsapi.org/v2/everything?q=football&language=en&apiKey=${apiKey}`)
      .then(news => {
        return news.json();
}).then(displayResults3);

function displayResults3(news){
    let articles=news.articles;
    let condition=false;
    let count=0;
    for(var i=1;i<4;i++){
        condition=false;
        while(!condition){
            if(articles[count].urlToImage!=null&&articles[count].description!=null&&articles[count].url!=null){
                var image="imgf"+i;
                var description="despf"+i;
                var link="linkf"+i;
                console.log(articles[count].url);
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