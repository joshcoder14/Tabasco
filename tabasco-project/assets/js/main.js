jQuery(document).ready(function ($) {
    
    $(window).scroll(function(){
        $("header").toggleClass("scrolled", $(this).scrollTop() > 50);
    });
    
    $("header").toggleClass("scrolled", $(this).scrollTop() > 50);

    const mobile_nav = document.querySelector(".mobile_nav_btn");
    const nav_header = document.querySelector(".site_header");
    const mobile_footer = document.querySelector("body > .footer");

    const toggleNavbar = () => {
        nav_header.classList.toggle("active");
        mobile_footer.classList.toggle("active");
    }

    mobile_nav.addEventListener("click", () => toggleNavbar());

    // Filter awards
    $(".list_btn").click(function(){
        var attr = $(this).attr("data-li");

        $(".list_btn").removeClass("active");
        $(this).addClass("active");

        $(".items").hide();

        if(attr == "advertising") {
            $("." + attr).show();
        }
        else if(attr == "packaging") {
            $("." + attr).show();
        }
        else if(attr == "branding") {
            $("." + attr).show();
        }
        else if(attr == "commercial") {
            $("." + attr).show();
        }
        else if(attr == "identity") {
            $("." + attr).show();
        }
        else if(attr == "tv") {
            $("." + attr).show();
        }
        else if(attr == "outdoor") {
            $("." + attr).show();
        }
        else if(attr == "awards") {
            $("." + attr).show();
        }
        else {
            $(".items").show();
        }
    })
    
    /**
   * Animation on scroll
   */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
    
});