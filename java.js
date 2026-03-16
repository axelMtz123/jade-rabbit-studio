gsap.registerPlugin(ScrollTrigger);

/*===== header ===== */
const hamBtn = document.querySelector('.hamburger');
const hamMenu = document.querySelector('.ham-menu');
const navItems = document.querySelectorAll('.nav-item');

gsap.set(hamMenu, { yPercent: -100 });

hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('active');

  const isOpen = hamBtn.classList.contains('active');

  gsap.to(hamMenu, {
    duration: 0.8,
    ease: "power2.inOut",
    yPercent: isOpen ? 0 : -100,
  });
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    hamBtn.classList.remove('active');
    gsap.to(hamMenu, {
      duration: 0.8,
      ease: "power2.inOut",
      yPercent: -100,
    });
  });
});


/********** Hero Section **********/
const heroTitle1 = document.querySelector('.hero-title-1');
const heroTitle2 = document.querySelector('.hero-title-2');

/*
if (window.innerWidth > 500) {

    const heroTimeline = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        heroTimeline.fromTo(heroTitle1, { yPercent: -60, xPercent: 200}, { yPercent: -60, xPercent: 0, opacity: 1, duration: 2 });
        heroTimeline.fromTo(heroTitle2, { yPercent: 200, xPercent: -200}, { yPercent: 200, xPercent: 0, opacity: 1, duration: 2 }, "<");
        heroTimeline.to(heroTitle1, { yPercent: 0, duration: 1 });
        heroTimeline.to(heroTitle2, { yPercent: 0, duration: 1 }, "<");
        heroTimeline.fromTo('.hero-line-1', { scaleY: 0 }, { scaleY: 1, transformOrigin: "center", duration: 1 });
        heroTimeline.fromTo('.hero-line-2', { scaleY: 0 }, { scaleY: 1, transformOrigin: "center", duration: 1 }, "<");
        heroTimeline.fromTo('.hero-main button', { opacity: 0 }, { opacity: 1, duration: 1 });
        heroTimeline.fromTo('#hero ul li', { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, stagger: 0.5, duration: 1 }, "<");
} else {

    const heroTimelineMobile = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
        heroTimelineMobile.fromTo(heroTitle1, { xPercent: -80, opacity: 0 }, { xPercent: 0, opacity: 1 });
        heroTimelineMobile.fromTo(heroTitle2, { yPercent: 300 }, { yPercent: 0 }, "<");
        heroTimelineMobile.fromTo('.hero-line-1', { scaleX: 0 }, { scaleX: 1, transformOrigin: "center" });
        heroTimelineMobile.fromTo('.hero-line-2', { scaleX: 0 }, { scaleX: 1, transformOrigin: "center" }, "<");
        heroTimelineMobile.fromTo('.hero-main button', { opacity: 0 }, { opacity: 1 });
        heroTimelineMobile.fromTo('#hero ul li', { opacity: 0, xPercent: -80 }, { opacity: 1, xPercent: 0, stagger: 0.5}, "<");
}
*/

gsap.to ("#hero ul", {
    scrollTrigger: {
        trigger: "#hero ul",
        start: "top 80%",
        scrub: true,
    },
    opacity: 0,
})
