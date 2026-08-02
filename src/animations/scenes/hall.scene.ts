

import gsap from "gsap";


export default function hallScene() {

   const tl = gsap.timeline();


    tl.to(".door", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut"
    })


      .to(".text-8", {
        opacity: 0,
        duration: 0.6,
         ease: "power2.inOut"
      }, "<")

        .to(".text-9", {
        opacity: 0,
        duration: 0.6,
         ease: "power2.inOut"
      }, "<")

  .to(".dark-room", {
   opacity: 0,
   duration: 0.6,
    ease: "power2.inOut"
 }, "<")
 .set(".dark-room", {
   display: "none"
 })

 .set(".hall", {
   display: "block"
 })
 

        .from(".hall", {
       opacity: 0,
       duration: 7,
       ease: "power2.inOut",
      }, "<")

 gsap.to(".hall", {
   scale: 1.1,
   duration: 13,
   repeat: -1,
   yoyo: true,
   ease: "sine.inOut"
 });


          tl.from(".text-10", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
     })


               .to(".text-10", {
      opacity: 0,
      duration: 3.5,
      ease: "power4.in",
     })


           .from(".text-11", {
       opacity: 0,
       duration: 2,
       ease: "power2.inOut",
      })
     
     
           .to(".text-11", {
       opacity: 0,
       duration: 3.5,
       ease: "power4.in",
      })
     

     
           .from(".text-12", {
       opacity: 0,
       duration: 2,
       ease: "power2.inOut",
      })
     
     
           .to(".text-12", {
       opacity: 0,
       duration: 3.5,
       ease: "power4.in",
      })
     
         tl.from(".text-13", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
     })
     
     
          .to(".text-13", {
      opacity: 0,
      duration: 3.5,
      ease: "power4.in",
     })

     .set(".door-2", {
      display: "block"
     })

      .from(".door-2", {
        opacity: 0,
  duration: 1,
    ease: "power2.inOut",
    })

        // This is independent animation outside the timeline cuz it has loop.
    // To not break the timeline flow so the pasue can work properly.
gsap.to(".door-2", {
    scale: 0.9,
    duration: 1.3,
    repeat: -1,
    yoyo: true
})
    
        tl.from(".text-14", {
      opacity: 0,
      ease: "power2.inOut"
     })
     

     return tl

 }