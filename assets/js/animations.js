var showNextImgFn = function(parentE, waitInMs, waitInMsLast) {
    var timeout = waitInMs;

    if(elementInViewport(parentE[0])) {
        var visibleE = parentE.find("img:visible");

        if(visibleE.length > 0) {
            var nextHiddenE = visibleE.next("img:hidden");
            if(nextHiddenE.length === 0) {
                nextHiddenE = parentE.find("img:hidden").first();
            } else {
                if (nextHiddenE.next("img:hidden").length === 0) {
                    timeout = waitInMsLast;
                }
            }

            visibleE.hide();
            nextHiddenE.show();
        }
    }

    setTimeout(function() { showNextImgFn(parentE, waitInMs, waitInMsLast) }, timeout);
};

var elementInViewport = function(element) {
    var top = element.offsetTop;
    var left = element.offsetLeft;
    var width = element.offsetWidth;
    var height = element.offsetHeight;

    while(element.offsetParent) {
        element = element.offsetParent;
        top += element.offsetTop;
        left += element.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
};

function animateImgs(parentE, waitInMs) {
    showNextImgFn(parentE, waitInMs, 4000);
}
