// step 1: menu
const menu = document.querySelector("#menu"),
  closeMobileMenu = document.querySelector("#close-mobile-menu"),
  openMobileMenu = document.querySelector("#open-mobile-menu");

if (openMobileMenu) {
  openMobileMenu.addEventListener("click", () => {
    menu.classList.add("menu-active");
  });
}

if (closeMobileMenu) {
  closeMobileMenu.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
}

// step 2: link
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", () => {
    menu.classList.remove("menu-active");
  });
});

// step 3: header
const header = document.querySelector("#header");

window.addEventListener("scroll", (e) => {
  this.scrollY >= 75
    ? header.classList.add("header-active")
    : header.classList.remove("header-active");
});

// step 4: swiper

const swiperCase = new Swiper(".case-swiper", {
  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",
  spaceBetween: 16,
  speed: 600,
  effect: "creative",
  creativeEffect: {
    limitProgress: 2,
    prev: {
      translate: ["-100%", 0, 0],
      scale: 0.85,
    },
    next: {
      translate: ["100%", 0, 0],
      scale: 0.85,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
});
