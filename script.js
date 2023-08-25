
//smooth scroll

var navMenu = document.querySelectorAll('.nav-menu a')
var interval;

for (var i = 0; i < navMenu.length; i++) {
   navMenu[i].addEventListener('click', function (event) {
      event.preventDefault();
      var targetSectionID = this.textContent.trim().toLowerCase();
      var targetSection = document.getElementById(targetSectionID)
      interval = setInterval(function(){
         smoothScroll(targetSection)
      }, 20);
   
   //    interval = setInterval(scrollVertically, 20, targetSection);

   
   });
}

function smoothScroll(targetSection){
   var targetcoordinates = targetSection.getBoundingClientRect();
   if (targetcoordinates.top <= 0) {
      clearInterval(interval);
      return;
   }

   window.scrollBy(0, 50)
}








