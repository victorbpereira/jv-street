gsap.registerPlugin(ScrollTrigger)

const timeline = gsap.timeline({defaults: { duration: 1 }})

timeline.fromTo("header > div > p > span",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0, stagger: .2}
).fromTo(".logo",
    { opacity: 0, y: -100 },
    { opacity: 1, y: 0 }
, "-=0.5").fromTo(".introSection > img",
    { opacity: 0 },
    { opacity: 1 }
, "-=0.65").fromTo(".introSection > h1",
    { opacity: 0 },
    { opacity: 1 }
, "-=0.5")

gsap.from(".over", {
    opacity: 0,
    y: 200,
    duration: 1,
    scrollTrigger: {
        scrub: .5,
        start: 'top',
        pin: ".camisaSection",
      }
})

gsap.from(".sized", {
    opacity: 0,
    x: -350,
    duration: 1,
    scrollTrigger: {
        scrub: .5,
        trigger: ".camisaSection",
        start: 'center center',
      }
})

gsap.from(".conjuntoSection > h1", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        pin: ".conjuntoSection",
        scrub: .5,
        start: 'top',
        end: 'center',
      }
})

gsap.from(".tecidoSection > div > img", {
    width: 100,
    height: 100,
    opacity: 0,
    scrollTrigger: {
        scrub: .5,
        pin: ".tecidoSection",
        start: 'center center'
    }
})

gsap.from(".quality", {
    x: -100,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".tecidoSection",
        scrub: 1,
        start: 'center center'
    }
})

gsap.from(".tecidoSection", {
    "--after-width": 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".tecidoSection",
        scrub: 1,
        start: 'center center'
    }
})

gsap.from(".cap", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        pin: ".capSection",
        scrub: .5
    }
})

gsap.from(".street", {
    y: -80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".capSection",
        scrub: .5,
        start: 'top'
    }
})

gsap.from(".edicaoSection > div > img", {
    top: -500,
    opacity: 0,
    stagger: .3,
    scrollTrigger: {
        trigger: ".edicaoSection",
        scrub: 2,
        start: 'center bottom',
        end: 'bottom bottom'
    }
})