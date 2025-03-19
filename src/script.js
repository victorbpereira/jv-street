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
        trigger: ".camisaSection",
        scrub: .5,
        start: 'top center',
        end: 'bottom bottom',
      }
})

gsap.from(".sized", {
    opacity: 0,
    x: -250,
    duration: 1,
    scrollTrigger: {
        scrub: .5,
        trigger: ".camisaSection",
        start: 'top center',
        end: 'bottom bottom',
      }
})

gsap.from(".conjuntoSection > h1", {
    opacity: 0,
    y: 80,
    duration: 1,
    scrollTrigger: {
        trigger: ".conjuntoSection",
        scrub: .5,
        start: 'top center',
        end: 'center center',
      }
})

gsap.from(".imgTecido", {
    width: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: ".tecidoSection",
        scrub: 1,
        start: 'top center',
        end: 'bottom center',
    }
})

gsap.from(".quality", {
    x: -100,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: ".tecidoSection",
        scrub: 1,
        start: 'top center',
        end: 'bottom center',
    }
})

gsap.from(".tecidoSection", {
    "--after-width": 0,
    scrollTrigger: {
        trigger: ".tecidoSection",
        scrub: 1,
        start: 'top center',
        end: 'bottom center',
    }
})

gsap.from(".cap", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        scrub: .5,
        trigger: ".capSection",
        start: 'top center',
        end: 'bottom center',
    }
})

gsap.from(".street", {
    y: -80,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".capSection",
        scrub: .5,
        start: 'top center',
        end: 'bottom top',
    }
})