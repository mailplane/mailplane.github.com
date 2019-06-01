$(function() {
    updateThemeButtonColor();
});

function updateThemeButtonColor() {
    var theme = getTheme();
    if (!theme) {
        // See https://kevinchen.co/blog/support-macos-mojave-dark-mode-on-websites/
        if (window.matchMedia && window.matchMedia("screen and (prefers-color-scheme: dark)").matches) {
            theme = "dark";
        } else {
            theme = "light";
        }
    }

    if (theme === "dark") {
        $("#darkThemeButton").attr("style", null);
        $("#lightThemeButton").attr("style", "color: #4f8bf8");
    } else {
        $("#darkThemeButton").attr("style", "color: #4f8bf8");
        $("#lightThemeButton").attr("style", null);
    }
}

function getTheme() {
    var name = "theme" + "=";
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

    return "";
}

function setTheme(theme) {
    if(!theme) {
        // See https://kevinchen.co/blog/support-macos-mojave-dark-mode-on-websites/
        if(window.matchMedia && window.matchMedia("screen and (prefers-color-scheme: dark)").matches) {
            theme = "dark";
        } else {
            theme = "light";
        }
    } else {
        if(theme === "dark") {
            if(!$("#darkTheme")[0]) {
                $("<link id=\"darkTheme\" rel=\"stylesheet\" href=\"/assets/css/dark-theme.css\" />").appendTo(document.head);
            }
        } else {
            // Make sure theme is either dark or light.
            theme = "light";

            $("#darkTheme").remove();

            // Remove conditional style as well to make sure it goes to light mode even if
            // the browser prefers a dark color scheme.
            $("#darkThemeConditionalStyle").remove();
        }

        try {
            var expires = new Date();
            expires.setTime(+ expires + 365 * 24 * 60 * 60 * 1000);

          document.cookie = "theme" + "=" + theme + ";expires=" + expires.toGMTString() + ";domain=.mailplaneapp.com;path=/";
        } catch(ignore) {}
    }

    // Switch images (marked with data-
    $("img[data-" +theme+ "-theme]").each(function(i, imgE) {
        $(imgE)
            .attr("data-" +(theme === "dark" ? "light" : "dark")+ "-theme", $(imgE).attr("src"))
            .attr("src", $(imgE).data(theme+ "-theme"));
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setTheme(getTheme());
});
