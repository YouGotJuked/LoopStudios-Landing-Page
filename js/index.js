const scrolled = function(event){
    const header = document.querySelector("#header");

    if(window.pageYOffset > 300){
        header.classList.add("header-scrolled");
    }
    else{
        header.classList.remove("header-scrolled");
    }
}

const toggleMenuBtn = function(event){
    const menu_btn = document.querySelector("#menu-btn");
    const menu_nav = document.querySelector("#menu-nav");
    const close_btn = document.querySelector("#mobile-close-btn");

    menu_btn.addEventListener("click", function(event){
        menu_nav.style.left = 0;
        menu_nav.style.opacity = "100%";
    });

    close_btn.addEventListener("click", function(event){
        menu_nav.style.left = "100%";
        menu_nav.style.opacity = "0";

    });


}

window.onscroll = function(){
    scrolled();
}

toggleMenuBtn();

