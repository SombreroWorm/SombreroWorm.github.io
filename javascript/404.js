var urlPrefix = "https://SombreroWorm.github.io/view/";
var urlCode = window.location.href;

function Check404() {
    urlCode = urlCode.substring(urlPrefix.length);

    alert("Url: " + window.location.href + "\n" + 
          "Trimmed: " + urlCode + "\n" + 
          "Length: " + urlPrefix.length);
}

document.addEventListener('DOMContentLoaded', Check404, false);