var tl = new TimelineMax({ delay: 0 });
tl.to($('.woow-preloader-lottie'), 0.15, { autoAlpha: 0 }, Power3.fadeOut);
tl.to($('.preloader'), 0.5, { y: '-100vh', borderRadius: '200%', transform: 'scale(4, 1)' }, Power3.fadeOut);
tl.to($('.page-content'), 0.25, { autoAlpha: 1 });
tl.staggerFrom($('#h1-1 > div > .text-fade-up'), 0.5, { y: "150%" }, 0.25, Power3.fadeOut);
tl.from($('#btnDescarga'), 0.75, { autoAlpha: 0, y: "25%" }, "+=0.25", Power3.fadeOut);
tl.from($('#iphone-wrapper'), 0.75, { autoAlpha: 0, x: "25%" }, "-=0.75", Power3.fadeOut);
tl.from($('#scroll-icon1'), 0.75, { autoAlpha: 0, y: "25%" }, "+=1.25", Power3.fadeOut);
