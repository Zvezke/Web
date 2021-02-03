const tl = gsap.timeline({ defaults: { ease: "power4.ease" } });

const name = new Vivus("svg", {
  type: "delayed",
  duration: 150,
  animTimingFunction: Vivus.EASE,
  onReady: function () {
    document.querySelector("#svg").classList.toggle("hidden");
  },
});

const logo = new Vivus("logo__splash", {
  type: "delayed",
  duration: 400,
  animTimingFunction: Vivus.EASE,
  onReady: function () {
    document.querySelector("#logo__splash").classList.toggle("hidden");
    // $(".hidden").css("visibility", "visible");
  },
});

tl.to(".slider", { y: "-100%", duration: 0.5, delay: 2.5 });
tl.to(".splash", { y: "-100%", duration: 0.5, delay: 1 }, "-=1.3");
tl.to(".text", { y: "0%", duration: 0.1, stagger: 0.25 });
tl.fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.2");
