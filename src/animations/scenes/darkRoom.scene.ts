

import gsap from "gsap";


export default function darkRoomScene() {

   const tl = gsap.timeline();


  //  tl.to(".light", {
  //    display: "none",
  //    duration: 0.2,
  //    ease: "power2.inOut"
  //  })

  //     .to(".text-4", {
  //       display: "none",
  //       duration: 0.2,
  //     }, "<")

  //     .to(".black-bg", {
  //      display: "none",
  //        duration: 0.2,
  //        ease: "power2.inOut",
  //     }, "<")

  //     .from(".dark-room", {
  //      opacity: 0,
  //      duration: 0.4,
  //      ease: "power2.inOut",
  //     }, "<")

  //      .from(".text-5", {
  //       opacity: 0,
  //       duration: 4,
  //       ease: "power2.inOut"
  //      })

  //        .to(".text-5", {
  //       opacity: 0,
  //       duration: 3,
  //       ease: "power4.in"
  //      })
     

  //       .from(".text-6", {
  //       opacity: 0,
  //       duration: 2,
  //       ease: "power2.inOut"
  //      })
     
  //        .to(".text-6", {
  //       opacity: 0,
  //       duration: 3,
  //      ease: "power4.in"
  //     })

  //      .from(".text-7", {
  //      opacity: 0,
  //      duration: 2,
  //      ease: "power2.inOut"
  //     })

  //         .to(".text-7", {
  //       opacity: 0,
  //       duration: 3,
  //       ease: "power4.in"
  //      })



   

  //  .from(".text-8", {
  //     opacity: 0,
  //     duration: 2,
  //     ease: "power2.inOut"
  //    },)
 

  //       .to(".text-8", {
  //     opacity: 0,
  //     duration: 1,
  //     ease: "power4.in"
  //    })

             
 tl.from(".door", {
        opacity: 0,
  duration: 0.2,
    })



  

        // This is independent animation outside the timeline cuz it has loop.
    // To not break the timeline flow so the pasue can work properly.
gsap.to(".door", {
    scale: 0.9,
    duration: 1,
    repeat: -1,
    yoyo: true
})
    


        tl.from(".text-9", {
      opacity: 0,
      ease: "power2.inOut"
     }, "<")
        
     

     return tl

 }