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
    }
};