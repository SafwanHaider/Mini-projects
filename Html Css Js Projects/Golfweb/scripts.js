gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 1,
    scrollTrigger: {
        trigger: "#main", // Change color when `#main` is reached
        start: "top top",
        scrub: true, 
    }
});
