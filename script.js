function loadigAnime(){
  var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.1,
  duration: 0.6,
  delay: 0.5,
  opacity: 0,
});

tl.from("#line-part1", {
  opacity: 0,
  onStart: function () {
    var text = document.querySelector("#line-part1 h5");
    var count = 0;
    setInterval(function () {
      if (count <= 100) {
        text.textContent = count;
        count++;
      }
    }, 30);
  },
});
tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.4,
  delay: 3,
  display:"none"
});

tl.from("#page1",{
    y:1200,
    opacity:0,
    ease:Power4,
    duration:0.5
})

}
loadigAnime()