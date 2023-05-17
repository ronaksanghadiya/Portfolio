const searchform=document.querySelector('.search-form');
// const navbar=document.querySelector('navbar');
const searchbtn=document.querySelector('.search-btn');

searchbtn.addEventListener('click',()=>{
   searchform.classList.toggle('active');
   navbar.classList.remove('active');
})

// Scrool Spy
window.onscroll=()=>{
   if(window.scrollY>0){
      document.querySelector('.header').classList.add('active');
   }
   else{
      document.querySelector('.header').classList.remove('active');
   }
}
// Menu bar 
const menubar=document.querySelector('#menu-btn');
const navbar=document.querySelector('.navbar');
menubar.addEventListener('click',()=>{
   navbar.classList.toggle('active');
   searchform.classList.remove('active');
})

var swiper = new Swiper(".home-slider", {
   spaceBetween: 20,
   effect: "fade",
   loop:true,
   autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   }
 });


 var swiper = new Swiper(".products-slider", {
   spaceBetween: 20,
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
   grabCursor:true,
   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     991: {
       slidesPerView: 3,
     },
   },
 });