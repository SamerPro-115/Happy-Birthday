import gsap from "gsap";


function startCelebrationParticles() {
  const confetti = gsap.utils.toArray<HTMLElement>(".confetti");
  const balloons = gsap.utils.toArray<HTMLElement>(".balloon");

  // Confetti
  confetti.forEach((piece) => {
    gsap.set(piece, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(-window.innerHeight, 0),
      rotation: gsap.utils.random(0, 360),
      scale: gsap.utils.random(0.6, 1.4),
            autoAlpha: 0,

    });

    gsap.to(piece, {
      y: window.innerHeight + 30,
      x: `+=${gsap.utils.random(-150, 150)}`,
      rotation: `+=${gsap.utils.random(360, 900)}`,
      duration: gsap.utils.random(3, 6),
      delay: gsap.utils.random(0, 4),
      repeat: -1,
      ease: "none",
            autoAlpha: gsap.utils.random(1, 1),

    });
  });

  // Balloons
  balloons.forEach((balloon) => {
    gsap.set(balloon, {
      x: gsap.utils.random(0, window.innerWidth),
      y: window.innerHeight + 100,
      rotation: gsap.utils.random(-15, 15),
      scale: gsap.utils.random(0.7, 1.1),
      autoAlpha: 0,
    });

    gsap.to(balloon, {
      y: -150,
      x: `+=${gsap.utils.random(-100, 100)}`,
      rotation: gsap.utils.random(-20, 20),
      duration: gsap.utils.random(8, 14),
      delay: gsap.utils.random(0, 8),
      repeat: -1,
      ease: "sine.inOut",
       autoAlpha: gsap.utils.random(1, 1),
    });
  });
}




export default function celebrationScene(HBAudioref: React.RefObject<HTMLAudioElement>) {


  const tl = gsap.timeline()

   
   .call(() => {
           HBAudioref.current?.play();
       })

   .to(".text-21", {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
   })

   .to(".back-to-dark-room", {
     scale: 1.9,
     duration: 1,
     ease: "power2.inOut"
   }, "<")

   
    .to(".glowing-bg", {
     autoAlpha: 0,
     duration: 1,
   }, "<")
  
   
     .to(".back-to-dark-room", {
    filter: "brightness(30)",
     duration: 1,
     ease: "power2.inOut"
   }, "<")

  
     .to(".gift", {
     autoAlpha: 0,
     duration: 0.5,
     ease: "power4.in"
   }, "<")


   .from(".white-fade", {
      autoAlpha: 0,
          duration: 0.5,
       ease: "power4.in"
   }, "<")
  

  //    .to(".back-to-dark-room", {
  //    autoAlpha: 0,
  //    duration: 1.5,
  //    ease: "power2.inOut"
  //  }, "<")

   
  .from(".hbd-bg", {
    autoAlpha: 0,
    duration: 0.5,
    ease: "power4.in"
  })

    .set(".white-fade, .back-to-dark-room", {
      display: "none"
    })
  

  .from(".decoration-1", {
    y: -120,
    autoAlpha: 0,
    duration: 0.5,
     ease: "power2.inOut"
  }, "<")


          tl.call(startCelebrationParticles)



   .from(".decoration-2", {
    y: -100,
    autoAlpha: 0,
    duration: 0.5,
     ease: "power2.inOut"
  }, "<")

.from(".cake", {
  autoAlpha: 0,
  scale: 0.4,
  y: 100,
  duration: 1,
  ease: "back.out(1.7)"
}, "-=0.2")



.from(".hbd-text", {
  autoAlpha: 0,
  y: 25,
  scale: 0.9,
  filter: "blur(8px)",
  duration: 1.5,
  ease: "power3.out"
})






  


  return tl
}