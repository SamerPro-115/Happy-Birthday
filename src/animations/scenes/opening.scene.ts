

import gsap from "gsap";


export default function OpeningScene() {

   const tl = gsap.timeline();


   tl.to(".light", {
     opacity: 0,
     duration: 2,
     ease: "power2.inOut"
   })

     .to(".text-4", {
       opacity: 0,
       duration: 0.5,
       ease: "power2.inOut",
     }, "<");

     return tl

 }