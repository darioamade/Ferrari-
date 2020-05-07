// need a function that gets rid of the preload

window.addEventListener('load', () => {
const preload = document.querySelector('.preload');
preload.classList.add('preload-finish');
});