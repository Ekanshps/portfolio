/* ============= Animation typing effect ============= */

var typed = new Typed(".multiple-text",
{
    strings:["Frontend Devloper", "YouTuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})

/* ============= toggle icon navbar ============= */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* ============= scroll section active link ============= */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if ( top >= offset && top <  offset + height){
            navLinks.forEach(links => {
                links.classlist.remove('active');
                document.querySelectorAll('header nav a[herf*='+ id +']').classList.add('active');

            });
        };
    });



        /* ============= sticky navbar ============= */


let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100 );


/* ============= remove toggle icon and navbar when click navbar link (scroll) ============= */

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};


 /* ============= scroll reveal ============= */

 ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});


ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',  { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });



// flash title come back and going to another site

function visibilityChange(actionFunction) {

    window.focus(); /* window.onfocus = infoIn;  */
  
    var hidden = "hidden";
  
    /* Standards: */
    if (hidden in document) {
      document.addEventListener("visibilitychange", actionFunction);
    } else if ((hidden = "mozHidden") in document) {
      document.addEventListener("mozvisibilitychange", actionFunction);
    } else if ((hidden = "webkitHidden") in document) {
      document.addEventListener("webkitvisibilitychange", actionFunction);
    } else if ((hidden = "msHidden") in document) {
      document.addEventListener("msvisibilitychange", actionFunction);
    }
    /* IE 9 and lower: */
    else if ("onfocusin" in document) {
      document.onfocusin = document.onfocusout = actionFunction;
    }
    /* All others: */
    else {
      window.onpageshow = window.onpagehide = window.onfocus = window.onblur = actionFunction;
    }
  }
  
  
  /* Function to make browser window blink in task bar */
  
  var comeBackAlerts = (function() {
    var oldTitle = document.getElementsByTagName('h1')[0].innerText; /* document.title; */
    var msg = "Come Again:)";
    var intervalId;
    var blink = function() {
      intervalId = setInterval(function() {
        /* document.title = document.title == msg ? ' ' : msg; */
        if (document.title == msg) {
          document.title = oldTitle;
        } else {
          document.title = msg;
        }
      }, 1000);
    };
    var clear = function() {
      clearInterval(intervalId);
      document.title = oldTitle;
      window.onmousemove = null;
      window.onmouseout = null;
      intervalId = null;
    };
    return function() {
      if (!intervalId) {
        blink();
        window.onmousemove = clear;
      }
    };
  }());
  
  /* Running the functions */
  
  visibilityChange(comeBackAlerts);




