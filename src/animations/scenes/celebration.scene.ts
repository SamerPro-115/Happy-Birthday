import gsap from "gsap";



export default function celebrationScene(HBAudioref: React.RefObject<HTMLAudioElement>) {


  const tl = gsap.timeline()

   
  // .call(() => {
  //         HBAudioref.current?.play();
  //     })
  

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


  


    .to(".back-to-dark-room", {
    autoAlpha: 0,
    duration: 2,
    ease: "power2.inOut"
  }, "<")


    
  


  return tl
}