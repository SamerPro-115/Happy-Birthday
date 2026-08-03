import gsap from "gsap";


export default function backToDarkRoomScene(objectDropAudioref: React.RefObject<HTMLAudioElement>) {
  const tl = gsap.timeline();

   tl.to(".door-2", {
     autoAlpha:0,
     duration: 0.6,
     ease: "power2.inOut",
   })

    .to(
      ".text-14",
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      "<",
    )


     .to(
       ".hall",
       {
         opacity: 0,
         duration: 0.6,
         ease: "power2.inOut",
       },
       "<",
     )
     .set(".hall", {
       display: "none",
     })

     .from(
       ".back-to-dark-room",
       {
         autoAlpha: 0,
         duration: 5,
         ease: "power2.inOut",
       },
       "<",
     )

      .from(".text-15", {
       opacity: 0,
       duration: 2,
       ease: "power2.inOut",
     })

   
     .to(".text-15", {
       opacity: 0,
       duration: 3,
       ease: "power4.in",
     })

       .from(".text-16", {
       opacity: 0,
       duration: 2,
       ease: "power2.inOut",
     })

      .to(".text-16", {
       opacity: 0,
       duration: 3,
       ease: "power4.in",
     })


    
       .from(".text-17", {
       opacity: 0,
       duration: 1,
       ease: "power2.inOut",
     })

      .to(".text-17", {
       opacity: 0,
       duration: 1.3,
       ease: "power4.in",
     })


      .from(".text-18", {
       opacity: 0,
       duration: 1,
       ease: "power2.inOut",
     })

        .to(".text-18", {
       opacity: 0,
       duration: 1.3,
       ease: "power4.in",
     })

       .call(() => {
         objectDropAudioref.current?.play();
     })

.to({}, {
    duration: 6
})


     .from(".text-19", {
       opacity: 0,
       duration: 2,
       ease: "power2.inOut",
     })

      .to(".text-19", {
       opacity: 0,
       duration: 3,
       ease: "power4.in",
     })

  
        tl.from(".text-20", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    })

     .to(".text-20", {
      opacity: 0,
      duration: 3,
      ease: "power4.in",
    })

    
  .from(".gift", {
    autoAlpha: 0,
    duration: 1,
  })

  
  .from(".glowing-bg", {
    autoAlpha: 0,
    duration: 3,
  }, "<")
  
     .to(
       ".back-to-dark-room",
       {
        filter: "brightness(0.5)",
         duration: 2,
         ease: "power2.inOut",
       },
       "<",
     )


     .from(".text-21", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
    }, "<")

    gsap.to(".gift", {
    scale: 0.9,
    duration: 1,
    repeat: -1,
    yoyo: true,
  });

   

 
    

  return tl;
}