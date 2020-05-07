new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.2,
    image1: './css/img/img-12.jpg',
    image2: './css/img/img-4.jpg',
    angle:Math.PI/ 8,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'center',
    displacementImage: "./css/img/strip.png"
    
});


const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
  startX = e.pageX = slider.offsetLeft;
  scrollLeft =slider.scrollLeft;
  console.log(startX);
  

});

slider.addEventListener('mousedown', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousedown', () => {
    isDown = true;
    slider.classList.remove('active');
});

slider.addEventListener('mousedown', (e) => {
    if(!isDown) return; // will stop the function to running
    e.preventDefault();
    const x = e.pageX -slider.offsetLeft;
    const walk = (x - startX) * 3;
    console.log(walk);
    slider.scrollLeft = scrollLeft - walk;


    });


