function getTheme() {
    try {
        return window.localStorage.getItem("theme");
    } catch(ignore) {
        return null;
    }
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
            window.localStorage.setItem("theme", theme);
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
