
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

//skills autofill
var progressBar = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll', checkScroll);

var animationDone = false;

function initializeBars(){
   for(let bar of progressBar)
{
   bar.style.width = 0 + '%';
}
}

function fillBars(){
   for(let bar of progressBar)
{
  let targetWidth = bar.getAttribute('data-bar-width');

  let currentWidth = 0;

  let interval = setInterval(function(){
if (currentWidth > targetWidth){
   clearInterval(interval)
   return;

}
currentWidth ++;
bar.style.width = currentWidth + '%';
  },5);

}
}


function checkScroll(){
   var coordinates = skillsContainer.getBoundingClientRect();
if(!animationDone && coordinates.top <= window.innerHeight ){
   animationDone = true;
 fillBars();
}else if(coordinates.top > window.innerHeight){
   animationDone = false;
   initializeBars();
}
}







