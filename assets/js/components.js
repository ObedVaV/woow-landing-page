var tl = new TimelineMax({
  delay: 0
});
tl.to($('.woow-preloader-lottie'), 0.15, { autoAlpha: 0 }, Power3.fadeOut);
tl.to($('.preloader'), 0.5, { y: '-100vh', borderRadius: '200%', transform: 'scale(4, 1)' }, Power3.fadeOut);
tl.to($('.page-content'), 0.25, { autoAlpha: 1 });
tl.staggerFrom($('#section1-text-1 > div > .text-fade-up'), 0.5, { y: "150%" }, 0.25, Power3.fadeOut);
tl.from($('#btnDescarga'), 0.75, { autoAlpha: 0, y: "25%" }, "+=0.25", Power3.fadeOut);
tl.from($('#iphone-wrapper'), 0.75, { autoAlpha: 0, x: "25%" }, "-=0.75", Power3.fadeOut);
tl.from($('#scroll-icon1'), 0.75, { autoAlpha: 0, y: "25%" }, "+=1.25", Power3.fadeOut);

gsap.to(".woow-navbar", {
  scrollTrigger: {
    trigger: "#section1-text-1",
    start: "top 10%",
    end: "+=100",
    scrub: 1
  },
  backgroundColor: "#ffffff"
});

var stl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section2",
    start: "center 85%",
    end: "+=200",
    scrub: 1
  }
});

stl.from("#section2-text-1 > div > .text-fade-up", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)

var stl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section3",
    start: "center 85%",
    end: "+=200",
    scrub: 1
  }
});

stl.from("#section3-text-1 > div > .text-fade-up", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)

var stl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section4",
    start: "center 85%",
    end: "+=200",
    scrub: 1
  }
});

stl.from("#section4-text-1 > div > .text-fade-up", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)

var stl = gsap.timeline({
  scrollTrigger: {
    trigger: "#section5",
    start: "center 85%",
    end: "+=200",
    scrub: 1
  }
});

stl.from("#section5-text-1 > div > .text-fade-up", 0.5, { autoAlpha: 0, y: "150%" }, Power3.fadeOut)