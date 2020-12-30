function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

function getPathFromUrl(url) {
    return url.split("?")[0];
}

function getAPIURL () {
    const dev = true;
    const url = dev ? 'http://localhost:3666/stats' : 'https://my-gh-stats.androz2091.fr/stats';
    return url;
}
