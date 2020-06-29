const navigationWhite = document.querySelector(".navigation__icon");
const header = document.querySelector(".header");
const sectionOne = document.querySelector(".session-1");
const sectionTwo = document.querySelector(".session-2");
const sectionThree = document.querySelector(".session-3");
const sectionFour = document.querySelector(".session-4");
const sectionFive = document.querySelector(".session-5");

const sectionOneOptions = {};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    // console.log(entry.target); --> for testing
    if (!entry.isIntersecting) {
      navigationWhite.classList.add(".navigation__icon");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(header);
