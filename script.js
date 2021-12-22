$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Learner","Teacher", "Public Speaker", "Motivator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop:false,     //true
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

         /* light box */
        const portfolioItems = $(".owl-item"),   //$('.teams').find(".owl-item")
        totalPortfolioItems = portfolioItems.length,
        lightboxClose = document.querySelector(".lightbox-close");

        // Lightbox
        const lightbox = document.querySelector(".lightbox"),
            lightboxImage = lightbox.querySelector(".lightbox-img"),
            lightboxText = lightbox.querySelector(".caption-text"),
            lightboxCounter = lightbox.querySelector(".caption-counter");

        let itemIndex = 0;

        function toggleLightBox() {
            lightbox.classList.toggle("open");
        }

        function changeItem() {
            imageSource = portfolioItems[itemIndex].querySelector(".blog-img img").getAttribute("src");
            lightboxImage.src = imageSource;
            lightboxText.innerHTML = portfolioItems[itemIndex].querySelector("h4").innerHTML;
            lightboxCounter.innerHTML = (itemIndex+1)+" of "+totalPortfolioItems;
        }

        function prevItem() {
            if ( itemIndex == 0) {
                itemIndex = totalPortfolioItems-1;
            } else {
                itemIndex--;
            }
            changeItem();
        }

        function nextItem() {
            if ( itemIndex == totalPortfolioItems-1 ) {
                itemIndex = 0;
            } else {
                itemIndex++;
            }
            changeItem();
        }

        for (let i=0; i<totalPortfolioItems; i++) {
            portfolioItems[i].addEventListener("click", function() {
                itemIndex = i;
                changeItem();
                toggleLightBox();
            })
        }
        
        // Close Lightbox
        lightbox.addEventListener("click", function(event) {
            if (event.target === lightboxClose || event.target === lightbox) {
                toggleLightBox();
            }
        });

        document.querySelector(".prev-item").addEventListener("click", function(event) {
            prevItem();
        });

        document.querySelector(".next-item").addEventListener("click", function(event) {
            nextItem();
        });

        document.querySelector(".lightbox-img").addEventListener("click", function(event) {
            nextItem();
        });
});