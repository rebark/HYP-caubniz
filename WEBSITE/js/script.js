$(document).ready(function () {
            $(document).bind("mobileinit", function () {
                $.support.cors = true;
                $.mobile.allowCrossDomainPages = true;
            });
