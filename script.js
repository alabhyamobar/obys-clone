function locomativeAnimation(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


}
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
    y: 140,
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
Shery.makeMagnet("#nav-2 h4", {});
loadigAnime();
// cursorAnimation();
boxAnimation();
playAnimation();
locomativeAnimation()

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


function sheryAnimation(){
  Shery.imageEffect(".image-div",{
    style:5,
    // debug:true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":"9999999","range":[-9999999,9999999]},"aspect":{"value":0.7272786988409361},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.65,"range":[0,10]},"metaball":{"value":0.45,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    gooey:true,
  })
}

document.querySelector(".page3-circle1"). addEventListener("mouseover",function(){
  gsap.to("#cover1",{
    scale:1,
  })
})

document.querySelector(".page3-circle1"). addEventListener("mouseleave",function(){
  gsap.to("#cover1",{
    scale:0,
  })
})

document.querySelector(".page3-circle2"). addEventListener("mouseover",function(){
  gsap.to("#cover2",{
    scale:1,
  })
})

document.querySelector(".page3-circle2"). addEventListener("mouseleave",function(){
  gsap.to("#cover2",{
    scale:0,
  })
})
sheryAnimation();
