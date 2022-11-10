const _querySearchKey = "querySearch";

/// for interop
function getColor() {
    let search = localStorage.getItem(_querySearchKey) ?? document.location.search;

    return getQueryParam(search, 'color');
}

function changeFavIcon(src) {
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

function handleInitialSearch() {
    let search = document.location.search;

    if (search == '') return;

    localStorage.setItem(_querySearchKey, search);
}

function getLocalSearch() {
    let search = localStorage.getItem(_querySearchKey);

    return search;

}


function changeStartUrl() {
    // var search = document.location.search;

    // if(search == '') return;

    var newManifest = {
        "name": "lol",
        "short_name": "lol",
        "start_url": ".",
        "display": "standalone",
        "background_color": "#0175C2",
        "theme_color": "#0175C2",
        "description": "A new Flutter project.",
        "orientation": "portrait-primary",
        "prefer_related_applications": false,
        "icons": [
            {
                "src": "icons/Icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "icons/Icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
            {
                "src": "icons/Icon-maskable-192.png",
                "sizes": "192x192",
                "type": "image/png",
                "purpose": "maskable"
            },
            {
                "src": "icons/Icon-maskable-512.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "maskable"
            }
        ]
    }


    const stringManifest = JSON.stringify(newManifest);
    const blob = new Blob([stringManifest], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(blob);
    document.querySelector('#pwa-manifest').setAttribute('href', manifestURL);

    var link = document.createElement('Link');
    link.rel = "manifest";
    lenk.href = "manifest.json"
    link.setAttribute('href', 'data:application/json;charset=8' + stringManifest);

}

function getQueryParam(search, name) {
    let params = new URLSearchParams(search);

    return params.get(name);
}