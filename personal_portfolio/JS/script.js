let homeImg = document.querySelector('.home .home-img');


document.querySelector('.home').onmousemove = (e) => {
   homeImg.style.top = e.pageY + 'px';
   homeImg.style.left = e.pageX + 'px';
};



document.querySelectorAll(".navbar a").forEach(link => {
   link.onmouseenter = () => {
      document.querySelector('.navbar-img img').src = link.getAttribute('data-src');
   };
   link.onmouseleave = () => {
      document.querySelector('.navbar-img img').src = 'images/nav-img-1.jpg';
   };
});
let navbar = document.querySelector('.navbar');
let navbarImg = document.querySelector('.navbar-img');


document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   navbarImg.classList.toggle('active');
}
window.onscroll = () => {
   navbar.classList.remove('active');
   navbarImg.classList.remove('active');
};

function send_info() {
   var name = jQuery("#name").val();
   var email = jQuery("#email").val();
   var mobile = jQuery("#number").val();
   var message = jQuery("#msg").val();
   var es_error = '';
   // alert(message);

   if (name == '') {
      alert('Please Enter Name');
      es_error = 'yes';
   }
   if (email == '') {
      alert('Please Enter E-mail');
      es_error = 'yes';
   }
   if (mobile == '') {
      alert('Please Enter Mobile');
      es_error = 'yes';
   }
   if (message == '') {
      alert('Please Enter Message');
      es_error = 'yes';
   }
   if(es_error==''){
      jQuery('#loader').css('display','block');
      jQuery.ajax({
         url:'email_submit.php',
            type:'post',
            data:'name='+name+'&email='+email+'&mobile='+mobile+'&msg='+message,
            success:function(result){
            if (result=='done\r\n') {
               jQuery('#loader').css('display','none');
               alert("Your Feedback Successfully Send");
               name = jQuery("#name").val('');
               email = jQuery("#email").val('');
               mobile = jQuery("#number").val('');
               message = jQuery("#msg").val('');
            }    
            
         }
      });
   }
}