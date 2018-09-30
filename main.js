var options = {
  strings: [
    "Font-end geek",
    "Beck-end expert",
    "cook lover",
    "Sportsman",
    "Music lover"
  ],
  typeSpeed: 80,
  backDelay: 1000,
  backSpeed: 40,
  // shuffle: true,
  loop: true,
  loopCount: Infinity
};

var typed = new Typed(".typing", options);

const WordCloud = require('wordcloud')

const skills = require('./skills.json')

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const list = () => [
  ...shuffle(skills).map(i=> ([i, getRandomArbitrary(10, 50)]))
]



const x = () => WordCloud(document.getElementById('my_canvas'), { list: list(), fontFamily: 'Finger Paint', color: '#c4c4c4' } );

setInterval(x, 1000 * 10)
x()