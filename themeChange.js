// The core of the stylesheet toggle function was found at https://stackoverflow.com/questions/18368319/toggle-css-sheets-on-click-with-javascript
if (localStorage.getItem("styleSaved") != null && localStorage.getItem("styleText") != null){
    var background = localStorage.getItem("styleSaved");
    var butText = localStorage.getItem("styleText");
}
else{
    var background = "stylesNight.css";
    var butText = "Light Mode";
}

var currBackground = document.getElementById("styles");
currBackground.href = background;
var currButText = document.getElementById("styleSwitch");
currButText.textContent = butText;

function toggle() {
    var el = document.getElementById("styles");
    var but = document.getElementById("styleSwitch");
    if (el.href.match("styles.css")) {
        el.href = "stylesNight.css";
        but.textContent = "Light Mode";
        localStorage.setItem("styleSaved", el.href);  
        localStorage.setItem("styleText",but.textContent);
    }
    else {
        el.href = "styles.css";
        but.textContent = "Dark Mode";
        localStorage.setItem("styleSaved", el.href); 
        localStorage.setItem("styleText",but.textContent);
    }
}
