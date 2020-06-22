// var leafEase = Sine.easeOut
var leafEase = Power3.easeInOut
var leafEase2 = Power3.easeInOut
var stripeEase = Sine.easeInOut


// function start2(){
//    var t = .6
//    var tl = new TimelineMax()
//    gsap.set("#leaf-right", {rotation: -42, x: -17, opacity: .9})
//    tl.from("#leaf-right", .4, {y: -50, ease: Back.easeInOut.config(4)}, "sync")
//       .from("#leaf-right", .4, {opacity: 0, ease: Power3.easeInOut}, "sync")
//       .to("#leaf-right", .75, {rotation: 10, x: 0, opacity: 1, ease: Power3.easeInOut}, "+=.3")
//       .to("#leaf-right", t, { rotation: 0, opacity: 1, ease: Power3.easeOut }, "-=.1")
//       .from("#leaf-middle", t, { x: 20, rotation: 50, opacity: 0, ease: leafEase }, "-=.75")
//       .from("#leaf-left", t, { x: 20, rotation: 80, opacity: 0, ease: leafEase }, "-=.75")
//       .to(".leaf", .6, { opacity: 1 }, "-=.3")
//       .staggerFromTo(".stripes-path", .5, { opacity: 0, x: -180 }, { opacity: 1, x: 0, ease: stripeEase }, .1, "-=.8")
//       .staggerFromTo(".copy", t, { opacity: 0, y: }, { opacity: 1, ease: Power2.easeInOut }, .02, "-=.8")

//    gsap.from(".copy", 1, {x: 40, ease: Power3.easeInOut, delay: .5})
//    tl.timeScale(.8)
//    gsap.delayedCall(3, end)
// }

function start1(){
   var t = .6
   var tl = new TimelineMax({})
   tl.from("#leaf-right", t, {rotation: 30, opacity: 0, ease: leafEase}, "sync")
      .from("#leaf-middle", t, { x: 20, rotation: 70, opacity: 0, ease: leafEase}, "sync")
      .from("#leaf-left", t, {x: 20, rotation: 100, opacity: 0, ease: leafEase}, "sync")
      .to(".leaf", .7, {opacity: 1}, "-=.3")
      .staggerFromTo(".stripes-path", .5, {opacity: 0, y: 15}, {opacity: 1, y: 0, ease: Back.easeOut.config(.5)}, .02, "-=.7")
      .staggerFromTo(".copy", .5, { opacity: 0, y: 0}, { opacity: 1, y: 0, ease: Power2.easeInOut, onComplete: end}, .04, "-=.8")

   gsap.from(".copy", 1, { y: 30, ease: Power3.easeInOut})
   gsap.delayedCall(2.5, end)
   tl.timeScale(.8)
  
}

function end(){
   var t = .9
   var tl = new TimelineMax()
   tl
      .staggerTo(".copy", .5, { opacity: 0, y: 30, ease: Power2.easeInOut }, .04, "stagger")
      .staggerTo(".stripes-path", .75, { opacity: 0, y: 15, ease: Back.easeInOut.config(1) }, -.02, "stagger")
      

      .to("#leaf-left", t, { rotation: -30, ease: leafEase2 }, "stagger")
      .to("#leaf-middle", t, { rotation: -70, x: -25, ease: leafEase2}, "stagger")
      .to("#leaf-right", t, {rotation: -110, x: -30, ease: leafEase2}, "stagger")
      // .to(".leaf", .4, {opacity: 0, onComplete: clearProp}, "-=.4")

   TweenMax.to(".leaf", .4, {opacity: 0, delay: .4})
   TweenMax.to(".copy", 1, {y: 30, ease: Power3.easeInOut})
   TweenMax.delayedCall(1.3, clearProps)
   tl.timeScale(1)
}

function clearProps(){
   gsap.set("#leaf-left, #leaf-middle, #leaf-right, .copy, .stripes-path", {clearProps: "transform", onComplete: set})
}

function set(){
   var checkTransform = gsap.getProperty("#leaf-right, #leaf-middle, #leaf-left", "opacity")
   // gsap.set("#leaf-left", {opacity: .5, })
   if (checkTransform === 0) {
      gsap.delayedCall(.75, init)
   }
}



function init(){
   
   gsap.set("#logo", {xPercent: -50, yPercent: -50})
   gsap.set("#leaf-left", {opacity: .5, transformOrigin: "bottom right", opacity: 1})
   gsap.set("#leaf-middle", { opacity: .7, transformOrigin: "bottom center", opacity: 1})
   gsap.set("#leaf-right", { opacity: 1, transformOrigin: "left bottom"})
   gsap.set(".stripes-path, .copy", {opacity: 0, force3D: false, rotation: 0.01})
   gsap.set("#stripes, #leaf-group", { force3D: false, rotation: 0.01, onComplete: start1 })

}

init()