$(document).ready(ready);
    function ready(){

            $(document).bind("mobileinit", function () {
                $.support.cors = true;
                $.mobile.allowCrossDomainPages = true;
            });
}
