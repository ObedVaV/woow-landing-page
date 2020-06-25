var tl = new TimelineMax({
  delay: 3
});

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

tl.to($('.woow-preloader-lottie'), 0.15, { autoAlpha: 0 }, Power3.fadeOut);
tl.to($('.preloader'), 0.5, { y: '-100vh', borderRadius: '200%', transform: 'scale(4, 1)' }, Power3.fadeOut);
tl.to($('.page-content'), 0.25, { autoAlpha: 1 });
tl.staggerFrom($('#section1-text-1 > div > .text-fade-up'), 0.5, { y: "150%" }, 0.25, Power3.fadeOut);
tl.from($('#btnDescarga'), 0.75, { autoAlpha: 0, y: "25%" }, "+=0.25", Power3.fadeOut);
tl.from($('#iphone-wrapper'), 0.75, { autoAlpha: 0, x: "25%" }, "-=0.75", Power3.fadeOut);
tl.set($('.floating-icon'), { transformOrigin: "50% 50%" })
tl.staggerFrom($('.floating-icon'), 1.75, { autoAlpha: 0, y: getRandom(100, 600), rotate: getRandom(-90, 90) + 'deg' }, "-=0.5", Power4.fadeOut);

$(document).mousemove(function(event){
  $(".floating-icon").each(function(index, element){
    var xPos = (event.clientX/$(window).width())-0.5,
        yPos = (event.clientY/$(window).height())-0.5,
        box = element;
  
  TweenLite.to(box, 1, {
    x: xPos * -100, 
    y: yPos * -100,
    ease: Power1.easeOut,
  });
    
  })  
});

gsap.to(".woow-navbar", {
  scrollTrigger: {
    trigger: "#section1-text-1",
    start: "top 10%",
    end: "+=100",
    scrub: 1
  },
  backgroundColor: "#fff"
});

gsap.to("#logo-woow-navbar ", {
  scrollTrigger: {
    trigger: "#section1-text-1",
    start: "top 10%",
    end: "+=60",
    scrub: 1
  },
  height: "24px"
});

var stl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    start: "center 85%",
    end: "+=200",
    scrub: 1
  }
});

stl.from("#section2 > .container > .section-icon-top", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)
stl.from("#section2-text-1 > div > .text-fade-up", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)
stl.to("#logo-woow-navbar > path", 0.5, { fill: "#EDBA29" }, Power3.fadeOut)
stl.to(".mobile-menu-icon > span", 0.5, { backgroundColor: "#EDBA29" }, Power3.fadeOut)

var stl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3",
    start: "center 85%",
    end: "+=200",
    scrub: 1
  }
});

stl.from("#section3 > .container > .section-icon-top", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)
stl.from("#section3-text-1 > div > .text-fade-up", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)
stl.to("#logo-woow-navbar > path", 0.5, { fill: "#42CAC5" }, Power3.fadeOut)
stl.to(".mobile-menu-icon > span", 0.5, { backgroundColor: "#42CAC5" }, Power3.fadeOut)

var stl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section4",
    start: "center 85%",
    end: "+=200",
    scrub: 1
  }
});

stl.from("#section4 > .container > .section-icon-top", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)
stl.from("#section4-text-1 > div > .text-fade-up", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)
stl.to("#logo-woow-navbar > path", 0.5, { fill: "#4964A5" }, Power3.fadeOut)
stl.to(".mobile-menu-icon > span", 0.5, { backgroundColor: "#4964A5" }, Power3.fadeOut)

var stl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section5",
    start: "center 85%",
    end: "+=200",
    scrub: 1
  }
});

stl.from("#section5 > .container > .section-icon-top", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)
stl.from("#section5-text-1 > div > .text-fade-up", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)
stl.to("#logo-woow-navbar > path", 0.5, { fill: "#B74190" }, Power3.fadeOut)
stl.to(".mobile-menu-icon > span", 0.5, { backgroundColor: "#B74190" }, Power3.fadeOut)