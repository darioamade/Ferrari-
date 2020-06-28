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

let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let btn3 = document.querySelector("#btn-3");
let btn4 = document.querySelector("#btn-4");
let btn5 = document.querySelector("#btn-5");
let btn6 = document.querySelector("#btn-6");
let btn7 = document.querySelector("#btn-7");
let btn8 = document.querySelector("#btn-8");
let btn9 = document.querySelector("#btn-9");
let btn10 = document.querySelector("#btn-10");
let btn11 = document.querySelector("#btn-11");
let showCar = document.querySelector(".showcaronebyone");

btn1.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/29.jpg')";
});
btn2.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/30.jpg')";
});
btn3.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/img-11.jpg')";
});
btn4.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/32.jpg')";
});
btn5.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/34.jpg')";
});
btn6.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/35.jpg')";
});
btn7.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/36.jpg')";
});
btn8.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/37.jpg')";
});
btn9.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/38.jpg')";
});
btn10.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/39.jpg')";
});
btn11.addEventListener("click", () => {
  showCar.style.backgroundImage = "url('/css/img/29.jpg')";
});


// btn1.addEventListener("click", () => {
//   document.body.showcar.backgroundImage = "url('/css/img/29.jpg')";
/* 
// });
btn2.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/30.jpg')";
});

btn3.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/31.jpg')";
});
btn4.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/32.jpg')";
});
btn5.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/34.jpg')";
});
btn6.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/35.jpg')";
});
btn7.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/36.jpg')";
});
btn8.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/37.jpg')";
});
btn9.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/38.jpg')";
});
btn10.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/39.jpg')";
});
btn11.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('/css/img/31.jpg')";
});  */

/*  document.bodydocument.bodydocument.body.style.backgroundImage =
     "url('https://i.ytimg.com/vi/QNJ35ieLHos/hqdefault.jpg')"; */
 