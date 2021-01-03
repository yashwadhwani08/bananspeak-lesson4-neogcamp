// var username=prompt("Give me your username");
// alert("Hi "+username);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txtInput");
var outputDiv = document.querySelector("#output");
var ServerUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text) {
    return ServerUrl + "?" + "text=" + text;
}

function errorhandler(error) {
    alert("error occured!", error);
}

function ClickHandler() {

    // console.log("clicked");
    // console.log(txtInput.value);
    var inputText = txtInput.value;


    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText;
        })
        .catch(errorhandler);


};

btnTranslate.addEventListener("click", ClickHandler);