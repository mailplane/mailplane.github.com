$(function() {
    updateThemeButtonColor();

    animateImgs($("#notifier_animation"), 1000);
    animateImgs($("#annotation_and_shapes"), 1000);
    animateImgs($("#search_and_navigate"), 1000);
    animateImgs($("#integrations"), 4000);
    animateImgs($("#integrations_540px"), 4000);
    animateImgs($("#integrations_720px"), 4000);

    var birthOfMailplane = new Date(2007, 2, 8); // March 8, 2007
    var ageInMs = new Date().getTime() - birthOfMailplane.getTime();
    var ageInYears = ageInMs / 1000 / 60 / 60 / 24 / 365;
    $("#ageOfMailplaneInYears").text(Math.floor(ageInYears * 10) / 10);

    var nbrOfUpdates = 0;
    nbrOfUpdates += 50; // Mailplane 1 (Estimate)
    nbrOfUpdates += 47; // Mailplane 2 (2.5.12, 2.4.1, 2.3.1, 2.2.1, 2.1.11, 2.0.15)
    nbrOfUpdates += {{ site.categories.release_mailplane3 | size }}; // Mailplane 3
    nbrOfUpdates += {{ site.categories.release_mailplane4 | size }}; // Mailplane 4
    $("#numberOfMailplaneUpdates").text(nbrOfUpdates);

    $('#openmodal').click(function() {
        $('#modal').removeClass('modal');
        $('#modal').addClass('modalon');
    });
    $('#modalbg').click(function() {
        $('#modal').removeClass('modalon');
        $('#modal').addClass('modal');
    });
    $('#modalclose').click(function() {
        $('#modal').removeClass('modalon');
        $('#modal').addClass('modal');
    });
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
