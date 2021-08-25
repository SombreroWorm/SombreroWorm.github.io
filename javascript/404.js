var urlPrefix = "https://SombreroWorm.github.io/view/";
var urlCode = window.location.href;
var real404 = false;

function Check404() {
    if (!urlCode.startsWith(urlPrefix)) {
        real404 = true;
    }
    
    urlCode = urlCode.substring(urlPrefix.length);

    alert("Url: " + window.location.href + "\n" + 
          "Trimmed: " + urlCode + "\n" + 
          "Length: " + urlPrefix.length);
}

document.addEventListener('DOMContentLoaded', Check404, false);