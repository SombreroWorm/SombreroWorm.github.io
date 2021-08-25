function Check404() {
    var actual404 = false;

    var urlPrefix = "https://sombreroworm.github.io/view/";
    var urlCode = window.location.href;

    urlCode = urlCode.slice(urlPrefix.length - 1);

    alert(urlPrefix.length);
}

document.addEventListener('DOMContentLoaded', Check404, false);