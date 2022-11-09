function getQueryParam(name) {
    var search = document.location.search;
    var params = new URLSearchParams(search);
    return params.get(name);
}

function changeFavIcon(src) {
    console.log('get icon');
    var link = document.createElement('link'),
        oldLink = document.getElementById('dynamic-favicon');
    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    if (oldLink) {
        document.head.removeChild(oldLink);
    }
    document.head.appendChild(link);
}