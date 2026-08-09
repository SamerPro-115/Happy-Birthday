import gsap from "gsap";

export default function hallScene() {
  const tl = gsap.timeline();

  tl.to(".door", {
    autoAlpha:0,
    duration: 0.6,
    ease: "power2.inOut",
  })

    .to(
      ".text-8",
      {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      "<",
    )

    .to(
      ".text-9",
      {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      "<",
    )

    .to(
      ".dark-room",
      {
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.inOut",
      },
      "<",
    )
    .set(".dark-room", {
      display: "none",
    })

    .from(
      ".hall",
      {
        autoAlpha: 0,
        duration: 7,
        ease: "power2.inOut",
      },
      "<",
    );

  gsap.to(".hall", {
    scale: 1.1,
    duration: 13,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  tl.from(".text-10", {
    autoAlpha: 0,
    duration: 1,
    ease: "power2.inOut",
  })

    .to(".text-10", {
      autoAlpha: 0,
      duration: 3.5,
      ease: "power4.in",
    })

    .from(".text-11", {
      autoAlpha: 0,
      duration: 2,
      ease: "power2.inOut",
    })

    .to(".text-11", {
      autoAlpha: 0,
      duration: 3.5,
      ease: "power4.in",
    })

    .from(".text-12", {
      autoAlpha: 0,
      duration: 2,
      ease: "power2.inOut",
    })

    .to(".text-12", {
      autoAlpha: 0,
      duration: 3.5,
      ease: "power4.in",
    });

  tl.from(".text-13", {
    autoAlpha: 0,
    duration: 2,
    ease: "power2.inOut",
  })

    .to(".text-13", {
      autoAlpha: 0,
      duration: 3.5,
      ease: "power4.in",
    })

   

    .from(".door-2", {
      autoAlpha: 0,
      duration: 1,
      ease: "power2.inOut",
    });

  // This is independent animation outside the timeline cuz it has loop.
  // To not break the timeline flow so the pasue can work properly.
  gsap.to(".door-2", {
    scale: 0.9,
    duration: 1.3,
    repeat: -1,
    yoyo: true,
  });

  tl.from(".text-14", {
    autoAlpha: 0,
    ease: "power2.inOut",
  });

  return tl;
}
