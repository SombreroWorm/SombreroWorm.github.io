function Check404() {
    alert("Ready");

    $.ajax({
        type: 'HEAD',
        url: window.location.href,
    success: function() {
        // Page exists
    },
    error: function() {
            alert("Page " + window.location.href + " does not exist!");
    }
    });
}

document.addEventListener('DOMContentLoaded', Check404, false);