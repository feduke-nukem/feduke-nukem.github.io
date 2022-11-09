
const _handledLocalSearchKey = 'handledLocalSearch';

function getQueryParam(name) {
    var search = document.location.search;
    var params = new URLSearchParams(search);
    return params.get(name);
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

    localStorage.setItem('search', search);
}

function handleLocalSearch() {
    let isHandled = localStorage.getItem(_handledLocalSearchKey);

    if (isHandled != null) return;

    let search = localStorage.getItem('search');

    if (!search) return;

    localStorage.setItem(_handledLocalSearchKey, true);
    document.location.search = search;
    
}



function changeStartUrl() {
    // var search = document.location.search;

    // if(search == '') return;

    var newManifest = {
        "name": "pwa_bank_demo",
        "short_name": "pwa_bank_demo",
        "scope": ".",
        "start_url": "./?iconUrl=http://www.google.com/favicon.ico",//"test" + search,
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
    document.querySelector('#pwa-bank-demo-manifest').setAttribute('href', manifestURL);

    var link = document.createElement('Link');
    link.rel = "manifest";
    link.setAttribute('href', 'data:application/json;charset=8' + stringManifest);

}