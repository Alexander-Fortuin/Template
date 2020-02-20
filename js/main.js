// 'use strict';
"use strict";


        // When the user scrolls down 80px from the top of the document, show the button
      window.onscroll = function() {scrollFunction()};

      function scrollFunction() {
          if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
              document.getElementById("navbar").style.background = "linear-gradient(to right, #B0A1BA, #A5B5BF, #ABC8C7, #B8E2C8, #BFF0D4)";
          } else {
              document.getElementById("navbar").style.background = "transparent";
          }
      }
//
var current = 0,
    slides = document.getElementsByClassName("img");

setInterval(function() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
  }
  current = (current != slides.length - 1) ? current + 1 : 0;
  slides[current].style.opacity = 1;
}, 3000);
