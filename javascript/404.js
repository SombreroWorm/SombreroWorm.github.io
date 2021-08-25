function Check404() {
alert("Check404");

    $.ajax({
        type: 'HEAD',
        url: window.location.href,
    error: function() {
            alert("Page " + window.location.href + " does not exist!");
    }
    });
}

document.addEventListener('DomContentLoaded', Check404, false);