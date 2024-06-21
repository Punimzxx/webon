const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle");

    toggle.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
    })

    var swiper = new Swiper(".home-slider", {
        loop:true,
        grabCursor:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev", 
        },
      });

    