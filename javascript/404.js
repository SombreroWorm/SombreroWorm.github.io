function Check404() {
    alert(window.location.href);
    var actual404 = false;

    var urlPrefix = "sombreroworm.github.io/view/";
    var urlCode = window.location.href;

    urlCode = urlCode.substring(urlPrefix.length - 1);
}

document.addEventListener('DOMContentLoaded', Check404, false);