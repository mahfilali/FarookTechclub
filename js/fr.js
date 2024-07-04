window.addEventListener("load", (event)=>{
    let showHideMenu = () =>{
        document.querySelector("#mobile-menu").classList.toggle("active");
        document.querySelector("span.close").classList.toggle("active");
        document.querySelector("span.overlay").classList.toggle("active");
    };
    document.getElementById("menu-icon").addEventListener("click",()=>{
        showHideMenu()
    });
    document.querySelector("span.close").addEventListener("click",()=>{
        showHideMenu()
    });
    document.querySelector("span.overlay").addEventListener("click",()=>{
        showHideMenu()
    });
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        autoWidth:true,
        margin:10,
    });
});
