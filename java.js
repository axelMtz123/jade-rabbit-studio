gsap.registerPlugin(ScrollTrigger);

/*===== header ===== */
const hamBtn = document.querySelector('.hamburger');
const hamMenu = document.querySelector('.ham-menu');
const navItems = document.querySelectorAll('.nav-item');
const flower = document.querySelector('.gallery-flower');

gsap.set(hamMenu, { yPercent: -100 });

hamBtn.addEventListener('click', () => {
  hamBtn.classList.toggle('active');
  flower.classList.toggle('active');

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
    flower.classList.remove('active');

    gsap.to(hamMenu, {
      duration: 0.8,
      ease: "power2.inOut",
      yPercent: -100,
    });
  });
});

gsap.to('header', {
    backgroundColor: 'rgba(245, 240, 232, 0.5)',
    scrollTrigger: {
      trigger: '#gallery',
      start: 'top 10%',
      scrub: true,
    },
  }
)


/********** Hero Section **********/
const heroTitle1 = document.querySelector('.hero-title-1');
const heroTitle2 = document.querySelector('.hero-title-2');


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


gsap.to ("#hero ul", {
    scrollTrigger: {
        trigger: "#hero ul",
        start: "top 80%",
        scrub: true,
    },
    opacity: 0,
})

/*===== Gallery =====*/

const horizontalScrolls = [
    document.querySelector('.gallery-horizontal-scroll'),
    document.querySelector('.artists-horizontal-scroll'),
    document.querySelector('.testimonial-horizontal-scroll'),
];

horizontalScrolls.forEach(el => {
    let isDown = false;
    let startX;
    let scrollLeft;

    el.addEventListener('mousedown', (e) => {
        isDown = true;
        el.classList.add('active');
        startX = e.pageX - el.offsetLeft;
        scrollLeft = el.scrollLeft;
    });

    el.addEventListener('mouseleave', () => {
        isDown = false;
    });

    el.addEventListener('mouseup', () => {
        isDown = false;
    });

    el.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - el.offsetLeft;
        const walk = (x - startX) * 2;
        el.scrollLeft = scrollLeft - walk;
    });
});

document.querySelectorAll('.split').forEach((el) => {
  let type = 'chars';

  if (el.classList.contains('words')) type = 'words';
  if (el.classList.contains('lines')) type = 'lines';

  new SplitType(el, { types: type });
});

const btnVar1 = document.querySelectorAll('.btn-var1');

btnVar1.forEach((btn) => {
  let isAnimating = false;

  btn.addEventListener('mouseenter', () => {
    if (isAnimating) return;
    isAnimating = true;

    const chars = btn.querySelectorAll('.char');

    const tl = gsap.timeline({
      onComplete: () => isAnimating = false
    });

    tl.to(chars, {
      yPercent: 100,
      stagger: 0.03,
      duration: 0.3,
      ease: "power2.in"
    })
    .set(chars, {
      yPercent: -100
    })
    .to(chars, {
      yPercent: 0,
      stagger: 0.05,
      duration: 0.3,
      ease: "power2.out"
    });
  });
});

const filterbtns = document.querySelectorAll('.gallery-menu button');
const images = document.querySelectorAll('#gallery img');

filterbtns.forEach((btn) => {
  btn.addEventListener('click', () => {

  
    filterbtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

   
    const cat = btn.getAttribute('data-category');
    images.forEach((img) => {
      if (cat === 'all' || img.getAttribute('data-category').includes(cat)) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });

  });
});

/* ===== Artists =====*/
const scrollContainers = document.querySelectorAll('.artists-horizontal-scroll');

scrollContainers.forEach(container => {
    container.addEventListener('mouseup', () => {
        container.classList.remove('active');
        
     
        container.querySelectorAll('.polaroid-card').forEach(card => {
            card.style.pointerEvents = 'none';
            setTimeout(() => {
                card.style.pointerEvents = '';
            }, 10);
        });
    });
});


document.querySelectorAll('.btn-var1').forEach(btn => {
  btn.addEventListener('click', () => {
    sessionStorage.setItem('scrollPos', window.scrollY);
  });
});

window.addEventListener('load', () => {
  const scrollPos = sessionStorage.getItem('scrollPos');
  if (scrollPos) {
    window.scrollTo({ top: parseInt(scrollPos), behavior: 'auto' });
    sessionStorage.removeItem('scrollPos'); 
  }
});

function goBack() {
  if (document.referrer.includes(window.location.origin)) {
    history.back();
  } else {
    window.location.href = "../index.html";
  }
}

const marquee = document.querySelector(".marquee-track")

const width = marquee.offsetWidth;

gsap.to (marquee, {
  x: `-${width}px`,
  duration: 50,
  repeat: -1,
  ease: 'linear'
})

 gsap.set(".text-up .char", { yPercent: 100 })

document.querySelectorAll('.text-up').forEach(el => {
  gsap.timeline({
    scrollTrigger: {
      trigger: el,       
      start: "top 80%",
      end: "top 20%",
    }
  })
  .to(el.querySelectorAll('.char'), {
    yPercent: 0,
    ease: "none",
    stagger: 0.05
  });
});