

import gsap from "gsap";


export default function OpeningScene() {

   const tl = gsap.timeline();


   tl.to(".light", {
     opacity: 0,
     duration: 1,
     scale: 0.9,
     repeat: -1,
     yoyo: true,
   })

     .to(".text-4", {
       opacity: 0,
       duration: 0.5,
       ease: "power2.inOut",
     }, "<");

 }