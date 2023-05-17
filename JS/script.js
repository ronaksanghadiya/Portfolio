// For Typing Animation

var typed = new Typed('.typing', {
   strings: ['front end developer', 'web designer', 'graphic designer', 'web developer'],
   typeSpeed: 150,
   backSpeed: 60,
   loop: true,
});

// for Navigation

window.onscroll = () => {
   if (window.scrollY > 5) {
      document.querySelector('.header').classList.add('active');
   }
   else {
      document.querySelector('.header').classList.remove('active');
   }
}

// For Scroll top Button
let scrollbtn = document.querySelector('.up');
window.addEventListener('scroll', function () {
   if (window.pageYOffset > 50) {
      scrollbtn.classList.add('active')
   }
   else {
      scrollbtn.classList.remove('active')
   }
});

scrollbtn.addEventListener('click', function () {
   window.scroll({
      top: 0,
      behavior: "smooth"
   });


});

// Accordion Skills 

const skillcontent = document.querySelectorAll('.skill_content');
skillheader = document.querySelectorAll('.skill_header');
skillheader.forEach(element => {
   element.addEventListener('click', function () {
      let itemclass = this.parentNode.className;
      for (let i = 0; i < skillcontent.length; i++) {
         skillcontent[i].className='skill_content skill_close'         
      }
      if (itemclass === 'skill_content skill_close') {
         this.parentNode.className = 'skill_content skill_open';
      } 
   })
});

// for Modal
const service_modal=document.querySelectorAll('.service_modal');
view_more=document.querySelectorAll('.view_more');

let modal=function(modalclick){
   service_modal[modalclick].classList.add('active');
}


view_more.forEach((view_more,i)=>{
   view_more.addEventListener('click',function() {
      modal(i)
   })
})

const btnclose=document.querySelectorAll('.btn-close');
btnclose.forEach((btnclose,i)=>{
   btnclose.addEventListener('click',function() {
      modal_close(i)
   })
})

let modal_close=function(i) {
   service_modal[i].classList.remove('active');
}

// Dark and Light them 

const black_white=document.querySelector('.black-white');
black_white.addEventListener('click',function(){
   black_white.querySelector('i').classList.toggle('fa-sun')
   black_white.querySelector('i').classList.toggle('fa-moon')
   document.body.classList.toggle('dark');

})
window.addEventListener('load',function(){
   if(document.body.classList.contains("dark")){
      black_white.querySelector("i").classList.toggle("fa-sun ");
  }
  else{
      black_white.querySelector("i").classList.toggle("fa-moon");
  }
})

// Media Query

let menu=document.querySelector('#menu-bars');
let header=document.querySelector('.header');

menu.addEventListener('click',function(){
   header.classList.toggle('active1');
   menu.classList.toggle('fa-times');
})
window.addEventListener('scroll',function() {
   menu.classList.remove('fa-times');
   header.classList.remove('active1');
})