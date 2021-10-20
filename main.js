import showcase from "./showcase.json";
var typed = new Typed(".typing", {
  strings: [
    "Front-End geek 💻",
    "Back-End expert 🔌",
    "fond of cooking 🍳",
    "Sportsman 🚴",
    "Music lover 🎶",
  ],
  typeSpeed: 80,
  backDelay: 1000,
  backSpeed: 40,
  // shuffle: true,
  loop: true,
  loopCount: Infinity,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  },
});
