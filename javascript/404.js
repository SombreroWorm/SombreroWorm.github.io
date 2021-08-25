var urlPrefix = "https://SombreroWorm.github.io/view/";
var urlCode = window.location.href;

function Check404() {
    urlCode = urlCode.substring(urlPrefix.length - 1);

    alert(urlCode);
}

document.addEventListener('DOMContentLoaded', Check404, false);