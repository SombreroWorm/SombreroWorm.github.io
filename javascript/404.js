function Check404() {
    //alert(window.location.href);
    var actual404 = false;

    var urlPrefix = "https://sombreroworm.github.io/view/";
    var urlCode = window.location.href;

    urlCode = urlCode.substring(urlPrefix.length - 1);

    alert(urlCode);
}

document.addEventListener('DOMContentLoaded', Check404, false);