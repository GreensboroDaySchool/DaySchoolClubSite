(function($){
    $(document).ready(function(){
        var background = new Image();
        var bkMask = $("#bk-mask");
        var titleContainer = $("#title-container");
        var footer = $("footer");
        background.src = "/assets/images/gds_media_center_outside.jpg";
        background.onload = function(){
            bkMask.css('background', "url('"+background.src+"')");
            bkMask.css('background-size', "cover");
            bkMask.fadeIn(2000);
        };
        titleContainer.fadeIn(1000);
        footer.fadeIn(3000);
    });
})(jQuery);