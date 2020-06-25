/* 
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');


//Buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//counter

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listeners

nextBtn.addEventListener('click',() => {
    if (counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',() => {
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend',() => { 
   if (carouselImages[counter].id ==='lastClone'){
       carouselSlide.style.transition = "none";
       counter = carouselImages.length -2 ;

       carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)'; 
   } 
   if (carouselImages[counter].id ==='firstClone'){
       carouselSlide.style.transition = "none";
       counter = carouselImages.length -counter ;

       carouselSlide.style.transform = 'translateX('+ (-size * counter) + 'px)';
      
   }   

}); */

let link1 = document.querySelector("#link-1");
let link2 = document.querySelector("#link-2");
let link3 = document.querySelector("#link-3");
let link4 = document.querySelector("#link-4");
let link5 = document.querySelector("#link-5");
let link6 = document.querySelector("#link-6");
let link7 = document.querySelector("#link-7");
let link8 = document.querySelector("#link-8");
let link9 = document.querySelector("#link-9");
let link10 = document.querySelector("#link-10");
let link11 = document.querySelector("#link-11");

link1.addEventListener("click", () => {
document.showcar.backgroundImage =  "url('https://i.ytimg.com/vi/QNJ35ieLHos/hqdefault.jpg')";

 /*  document.body.showcar.style.backgroundImage =
     "url('https://i.ytimg.com/vi/QNJ35ieLHos/hqdefault.jpg')"; */
});
link2.addEventListener("click", () => {
  document.showcar.style.backgroundImage =
    "url('https://i.ytimg.com/vi/QNJ35ieLHos/hqdefault.jpg')";
});
link3.addEventListener("click", () => {
  document.showcar.style.backgroundImage =
    "url('https://i.ytimg.com/vi/QNJ35ieLHos/hqdefault.jpg')";
});
