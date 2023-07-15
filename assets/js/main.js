/*
Template Name: Spark - App Landing Page Template.
Author: GrayGrids
*/

(function () {
    //===== Prealoder

    window.onload = function () {
        window.setTimeout(fadeout, 500);
    }

    function fadeout() {
        document.querySelector('.preloader').style.opacity = '0';
        document.querySelector('.preloader').style.display = 'none';
    }


    /*=====================================
    Sticky
    ======================================= */
    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        var logo = document.querySelector('.navbar-brand img')
        if (window.pageYOffset > sticky) {
          header_navbar.classList.add("sticky");
          logo.src = 'assets/images/logo/logo.svg';
        } else {
          header_navbar.classList.remove("sticky");
          logo.src = 'assets/images/logo/white-logo.svg';
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };

    // WOW active
    new WOW().init();

    //===== mobile-menu-btn
    let navbarToggler = document.querySelector(".mobile-menu-btn");
    navbarToggler.addEventListener('click', function () {
        navbarToggler.classList.toggle("active");
    });

    let navbarHome = document.querySelector(".nav-home");
    let navbarAbout = document.querySelector(".nav-about");
    let navbarServices = document.querySelector(".nav-services");
    let navbarPricing = document.querySelector(".nav-pricing");
    let navbarTeam = document.querySelector(".nav-team");
    let navbarDownload = document.querySelector(".nav-download");

    navbarHome.addEventListener('click', function () {
        navbarHome.classList.add("active");
        navbarAbout.classList.remove("active");
        navbarServices.classList.remove("active");
        navbarPricing.classList.remove("active");
        navbarTeam.classList.remove("active");
        navbarDownload.classList.remove("active");
    });

    navbarAbout.addEventListener('click', function () {
        navbarHome.classList.remove("active");
        navbarAbout.classList.add("active");
        navbarServices.classList.remove("active");
        navbarPricing.classList.remove("active");
        navbarTeam.classList.remove("active");
        navbarDownload.classList.remove("active");
    });

    navbarServices.addEventListener('click', function () {
        navbarHome.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarServices.classList.add("active");
        navbarPricing.classList.remove("active");
        navbarTeam.classList.remove("active");
        navbarDownload.classList.remove("active");
    });
    
    navbarPricing.addEventListener('click', function () {
        navbarHome.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarServices.classList.remove("active");
        navbarPricing.classList.add("active");
        navbarTeam.classList.remove("active");
        navbarDownload.classList.remove("active");
    });
    
    navbarTeam.addEventListener('click', function () {
        navbarHome.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarServices.classList.remove("active");
        navbarPricing.classList.remove("active");
        navbarTeam.classList.add("active");
        navbarDownload.classList.remove("active");
    });
    
    navbarDownload.addEventListener('click', function () {
        navbarHome.classList.remove("active");
        navbarAbout.classList.remove("active");
        navbarServices.classList.remove("active");
        navbarPricing.classList.remove("active");
        navbarTeam.classList.remove("active");
        navbarDownload.classList.add("active");
    });    

})();