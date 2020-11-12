function getLocale() {
    var name = "l" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }

    return !navigator.languages || navigator.languages.length === 0 ? "en" : navigator.languages[0];
}

function setLocale(locale) {
    try {
        var expires = new Date();
        expires.setTime(+ expires + 365 * 24 * 60 * 60 * 1000);

        document.cookie = "l" + "=" + locale + ";expires=" + expires.toGMTString() + ";domain=.mailplaneapp.com;path=/";
    } catch(ignore) {}

    // Blog post pages aren't localized.
    if(location.pathname.indexOf("/blog/") >= 0 || location.pathname.indexOf("/faq/") >= 0 || location.pathname.indexOf("/howto/") >= 0) {
        return;
    }

    if((locale === "de" || locale.indexOf("de-") === 0) && location.pathname.indexOf("/de/") < 0) {
        location.pathname = "/de" + location.pathname;
        return;
    }

    if((locale === "en" || locale.indexOf("en-") === 0) && location.pathname.indexOf("/de/") === 0) {
        location.pathname = location.pathname.substr(3);
        return;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setLocale(getLocale());
});
