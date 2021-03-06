var slider;
$(".card").click(function () {
  slider = undefined;
  Card = $(this);
  if (Card.hasClass("is-open")) return;
  const w = window.innerWidth;
  setTimeout(() => {
    const node = $(".is-open .my-slider")[0];
    if (!node) return;
    const con = $(".is-open #customize-controls")[0];
    console.log(con);
    slider = tns({
      container: node,
      items: w > 1000 ? 3 : 1,
      slideBy: "page",
      gutter: 40,
      controlsContainer: con,
    });
    $(node).css({ opacity: 1 });
  }, 300);
});

$(".close").click(function (e) {
  e.stopPropagation();
  if (slider) slider.destroy();
});
