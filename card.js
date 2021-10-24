// https://codepen.io/hesrun/pen/OzJxdP
var CardLeft, CardTop, CardWidth, CardHeight, Card, ScTop;

$(".card").click(function() {
  Card = $(this);
  ScTop = $(window).scrollTop();
  if (!Card.hasClass('is-open')) {
    $("html").addClass('hidden');
    CardLeft = Card.offset().left;
    CardTop = Card.offset().top - ScTop;
    CardWidth = Card.outerWidth();
    CardHeight = Card.outerHeight();

    console.log(CardLeft,CardTop,CardWidth,CardHeight)

    Card.css({
      position:'fixed',
      zIndex: 3,
      left: CardLeft + 'px',
      top: CardTop + 'px',
      width: CardWidth + 'px',
      height: CardHeight + 'px'
    }).parents('.card-holder').css({
      height: CardHeight + 'px'
    })

    setTimeout(function(){
      Card.addClass('is-open')
    }, 100);
  }
});

function closeAllCards(){
  if(!Card) return;
  $('.card.is-open').removeClass('is-open')
  setTimeout(function(){
    Card.css({
      position:'relative',
      zIndex: 1,
      left: 'auto',
      top: 'auto',
    }).parents('.card-holder').removeAttr('style')
    $("html").removeClass('hidden')
    Card = undefined;
  }, 500);
}

$(".close").click(function(e) {
    e.stopPropagation();
    closeAllCards();
})

var specifiedElements = document.querySelectorAll(".card");

//I'm using "click" but it works with any event
document.addEventListener("click", function (event) {
  var isClickInside = false;
  var reduced = [];
  specifiedElements.forEach(
    (specifiedElement) =>
      reduced.push(specifiedElement.contains(event.target))
  );
  isClickInside = reduced.some(Boolean)

  if (!isClickInside) {
    closeAllCards();
    //the click was outside the specifiedElement, do something
  }
});