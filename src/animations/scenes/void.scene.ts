import gsap from "gsap";

export default function voidScene(intoTheVoidAudioref: React.RefObject<HTMLAudioElement>) {
  const tl = gsap.timeline()

   
  .call(() => {
          intoTheVoidAudioref.current?.play();
      })
  

  .to(".text-21", {
         opacity: 0,
         duration: 0.6,
         ease: "power2.inOut",
  })

  .to(".back-to-dark-room", {
    scale: 1.9,
    duration: 2,
    ease: "power2.inOut"
  }, "<")

   

   .to(".glowing-bg", {
    autoAlpha: 0,
    duration: 1,
  }, "<")
  
   
    .to(".back-to-dark-room", {
   filter: "brightness(10)",
    duration: 2,
    ease: "power2.inOut"
  }, "<")

      .from(".white-fade", {
        autoAlpha: 0,
    duration: 1.7,
    ease: "power2.inOut"
  }, "<")


  //    .from(".black-fade", {
  //       autoAlpha: 0,
  //   duration: 0.5,
  //   ease: "power4.in"
  // })


    .to(".gift", {
    display: "none"
  }, "<")

  .set(".back-to-dark-room, .white-fade", {
    display: "none"
  })
  

  
  //    .to(".black-fade", {
  //       autoAlpha: 0,
  //   duration: 0.5,
  //   ease: "power4.in"
  // })




  
  
   .to(".void", {
     autoAlpha: 1,
     duration: 3,
     filter: "grayscale(1) brightness(0.7)",
     ease: "power4.in"
   })

  





  return tl
}