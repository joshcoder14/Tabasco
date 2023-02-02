$(document).ready(function(){
    $(".text-title").click(function(){
        $('.popup').addClass('active');
    });

    $(".close").click(function(){
        $('.popup').removeClass('active');
    });
});