function loadigAnime() {
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
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2,
    display: "none",
  });

  tl.from("#page1", {
    y: 1200,
    opacity: 0,
    ease: Power4,
    duration: 0.5,
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 120,
    stagger: 0.2,
  });
}
function cursorAnimation() {
  const box = document.querySelector("#crsr");
  document.addEventListener("mousemove", function (dets) {
    const boxWidth = box.offsetWidth / 2;
    const boxHeight = box.offsetHeight / 2;
    gsap.to("#crsr", {
      left: dets.x - boxWidth,
      top: dets.y - boxHeight,
    });
  });
}
function boxAnimation() {
  const box = document.querySelector(".box");

  document.querySelectorAll("#hero3 h2").forEach(function (e) {
    e.addEventListener("mousemove", function (dets) {
      const boxWidth = box.offsetWidth / 2;
      const boxHeight = box.offsetHeight / 2;

      gsap.to(".box", {
        display: "initial",
        left: dets.clientX-boxWidth,
        top: dets.clientY-boxHeight,
      });
    });
    e.addEventListener("mouseleave", function () {
      gsap.to(box, {
        display: "none",
      });
    });
  });
}

function playAnimation() {
  const play = document.querySelector(".play");
  document.querySelector(".video").addEventListener("mousemove", function (dets) {
    document.querySelector("#crsr").style.display = "none";
    gsap.to(".play", {
      left: dets.clientX - this.offsetLeft,
      top: dets.clientY - this.offsetHeight,
    });
  });

  document.querySelector(".video").addEventListener("mouseleave", function (dets) {
    document.querySelector("#crsr").style.display = "initial";
    gsap.to(".play", {
      left: '',
      top: '',
      duration:0.4,
      ease:"power4.out",
    });
  });
}
loadigAnime();
cursorAnimation();
boxAnimation();
playAnimation();
Shery.makeMagnet("#nav-2 h4", {});
