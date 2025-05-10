gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 3.5,
  }
);

gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

window.onload = function () {
  const aboutOut = document.querySelector('.aboutout');
  const aboutIn = document.querySelector('.aboutin');
  const aboutin2 = document.querySelector('.aboutin2');

  aboutIn.innerHTML = aboutOut.innerHTML;
  aboutin2.innerHTML = aboutOut.innerHTML;

  aboutOut.style.display = 'none';


};

