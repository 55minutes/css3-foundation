/*------------------------------------------------------------------------------
| common.js
| application name v1.0
| Author(s): Richa Avasthi
| Created: 2011-09-01
|
| Application-wide utilities.
------------------------------------------------------------------------------*/

// Establish namespace. Change to match the name of your application.
var FiftyfiveExample = window.FiftyfiveExample ? window.FiftyfiveExample : {};

FiftyfiveExample.util = {
    /*
    ** Workaround for MobileSafari zoom bug after orientation change.
    ** From: http://adactio.com/journal/4470/
    */
    iosZoomWorkaround: function() {
        var ua = navigator.userAgent;
        if (ua.match(/iPhone/) || ua.match(/iPad/))
        {
            var viewportmeta = $('meta[name="viewport"]');
            if (viewportmeta.length > 0)
            {
                viewportmeta.attr("content",
                    "width=device-width, minimum-scale=1.0, maximum-scale=1.0");
                $("body").bind("gesturestart", function() {
                    viewportmeta.attr("content",
                        "width=device-width, minimum-scale=0.25, maximum-scale=1.6");
                });
            }
        }
    }
};

$.extend(FiftyfiveExample, {
    /*
    ** Override this to perform any application-wide initialization JavaScript. This should
    ** run on DOM ready for every page in the application, and resides in the main application
    ** JS namespace.
    */
    commonInit: function() {
        FiftyfiveExample.util.iosZoomWorkaround();

        // Other stuff to do as soon as the DOM is ready
    }
});