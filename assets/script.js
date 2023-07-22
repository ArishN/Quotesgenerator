var generateBtn = document.querySelector('#generate');
var quotesText = document.querySelector(".quotes-text");
var author = document.querySelector(".author");

generateBtn.addEventListener("click",async()=>{

    var apiCall = await fetch("https://api.quotable.io/random");
    var data = await apiCall.json();
    quotesText.innerHTML = "❝" + data.content + "❞";
    author.innerHTML = "-" + data.author +".";

});