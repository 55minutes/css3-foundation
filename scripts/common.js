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
    ** Call out any specifically unsupported browsers here, like older versions
    ** of IE. Override this as necessary for your own application.
    */
    isSupportedBrowser: function() {
        var ua = navigator.userAgent;
        var supported = true;
        // We only support IE8 and greater.
        if(fiftyfive.util.isIE() && fiftyfive.util.isIE(7))
        {
            supported = false;
        }
        // Firefox 4+
        var v = ua.match(/Firefox\/(\d+)\./i);
        if(v && v[1] < 4)
        {
            supported = false;
        }
        // …etc.
        return supported;
    },
    
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
        if(!FiftyfiveExample.util.isSupportedBrowser())
        {
          $("html").addClass("unsupported-browser");
        }
        /*
        ** Uncomment the following if you want to save the fact that the user
        ** dismissed the unsupported browser warning in a cookie. See
        ** jquery.ui.unsupportedbrowserwarning.js for details on the available
        ** options.
        */
        // $("#unsupported-browser-warning").unsupportedbrowserwarningwidget();

        FiftyfiveExample.util.iosZoomWorkaround();

        // Other stuff to do as soon as the DOM is ready
    }
});