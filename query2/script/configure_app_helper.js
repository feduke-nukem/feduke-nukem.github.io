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

function changeStartUrl() {
    var search = document.location.search;
    if(search == '') return;
    
    var myDynamicManifest = {
        "name": "pwa_bank_demo",
        "short_name": "pwa_bank_demo",
        "start_url": "." + search,
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


    const stringManifest = JSON.stringify(myDynamicManifest);
    const blob = new Blob([stringManifest], { type: 'application/json' });
    const manifestURL = URL.createObjectURL(blob);
    document.querySelector('#pwa_bank_demo_manifest').setAttribute('href', manifestURL);

    var link = document.createElement('Link');
    link.rel = "manifest";
    link.setAttribute('href', 'data:application/json;charset=8' + stringManifest)
}