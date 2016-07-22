angular.module('BONI', ['ui.bootstrap', 'ngCookies', 'ngMaterial','md.data.table']);

window.onscroll = function(ev) {
    if(window.scrollY  > 300){
        $(".quick-start").css("visibility", "visible").fadeIn();
    }
    else {
        $(".quick-start").fadeOut().css("visibility", "visible");
    }
};
