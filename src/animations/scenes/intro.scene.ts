import gsap from "gsap";


export default function introScene() {

  const tl = gsap.timeline();



  tl
    .from(".text-1", {
        opacity: 0,
      duration: 1.5,
       ease: "power2.inOut"
    })

    .to(".text-1", {
        opacity: 0,
      duration: 2,
      ease: "power4.in"
    })


    
      .from(".text-2", {
        opacity: 0,
      duration: 1.5,
       ease: "power2.inOut"
    })

      .to(".text-2", {
        opacity: 0,
      duration: 3,
      ease: "power4.in"
    })

     .from(".text-3", {
        opacity: 0,
      duration: 1.5,
       ease: "power2.inOut"
    })
     .to(".text-3", {
        opacity: 0,
      duration: 2,
      ease: "power2.in"
    })

 .from(".light", {
        opacity: 0,
        y: 100,
  duration: 1,
    })


    // This is independent animation outside the timeline cuz it has loop.
    // To not break the timeline flow so the pasue can work properly.
gsap.to(".light", {
    scale: 0.9,
    duration: 1,
    repeat: -1,
    yoyo: true
})

     tl.from(".text-4", {
        opacity: 0,
      duration: 0.5,
       ease: "power2.inOut"
    }, "<")


  return tl;
}