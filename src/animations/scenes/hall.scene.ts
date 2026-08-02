

import gsap from "gsap";


export default function hallScene() {

   const tl = gsap.timeline();


   tl.to(".door", {
     opacity: 0,
     duration: 0.2,
     ease: "power2.inOut"
   })


     .to(".text-9", {
       opacity: 0,
       duration: 0.2,
        ease: "power2.inOut"
     }, "<")

 .to(".dark-room", {
  opacity: 0,
  duration: 0.2,
   ease: "power2.inOut"
})
.set(".dark-room", {
  display: "none"
}, "<")

   

       .from(".hall", {
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
     }, "<")

   



     

     return tl

 }