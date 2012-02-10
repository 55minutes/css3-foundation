/*------------------------------------------------------------------------------
| login.js
| application name v1.0
| Author(s): Richa Avasthi
| Created: 2012-02-09
|
| Utilities for the login page.
------------------------------------------------------------------------------*/

// Establish namespace. Change to match the name of your application.
var FiftyfiveExample = window.FiftyfiveExample ? window.FiftyfiveExample : {};

FiftyfiveExample.login = {
    init: function() {
        $("input[placeholder]").forminputplaceholdertextwidget();
    }
};

(function($) {
    $(function() {
        FiftyfiveExample.login.init();
    });
})(jQuery);
