/* *************** Animations GSAP***************  */

// nav
TweenMax.from("#header2", 1, {
    delay: .5,
    opacity: 0,
    y: "-100%",
    ease: Expo.easeInOut

});
TweenMax.from(".menu ", 1, {
    delay: .5,
    opacity: 0,
    y: "-100%",
    ease: Expo.easeInOut

});
TweenMax.from("#logo", 1, {
    delay: .5,
    opacity: 0,
    y: "-100%",
    ease: Expo.easeInOut

});
// texto
TweenMax.from("#titulo-instrucciones h2", 1, {
    delay: 1,
    opacity: 0,
    ease: Expo.easeInOut

});
TweenMax.from("#titulo-instrucciones h3", 1, {
    delay: 1.2,
    opacity: 0,
    ease: Expo.easeInOut

});
// cards
TweenMax.from(".pasos article ", 1, {
    delay: 1.5,
    opacity: 0,
    scale:0,
    x: "100%",
    ease: Expo.easeInOut

});
TweenMax.from(".btn ", 1, {
    delay: 1.5,
    opacity: 0,
    scale:0,
    x: "100%",
    ease: Expo.easeInOut

});





