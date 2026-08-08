import gsap from "gsap";


const discoColors = [
  "#00E5FF",
  "#FF3CAC",
  "#7B61FF",
  "#FFD93D",
  "#00F5A0",
];

let discoTimeline: gsap.core.Timeline | null = null;
let overlayColorTween: gsap.core.Tween | null = null;

const rotations = [-35, -10, 15, 40, 65];

function cycleOverlayColors() {
  const overlay = document.querySelector<HTMLElement>(".disco-overlay");

  if (!overlay) return;

  const changeColor = () => {
    overlayColorTween = gsap.to(overlay, {
      backgroundColor: gsap.utils.random(discoColors),
      autoAlpha: 0.5,
      duration: 0.2,
      ease: "power2.inOut",
      onComplete: changeColor,
    });
  };

  changeColor();
}

function startDisco() {
  discoTimeline = gsap.timeline();

  const lights = gsap.utils.toArray<HTMLElement>(".disco-light");

  lights.forEach((light, i) => {
    gsap.set(light, {
      rotation: rotations[i],
      autoAlpha: 0,
      backgroundColor: discoColors[i % discoColors.length],
    });

    // Light flicker
    discoTimeline!.to(
      light,
      {
        autoAlpha: 0.45,
        duration: 0.15,
        repeat: -1,
        yoyo: true,
        delay: i * 0.08,
        ease: "power1.inOut",
      },
      0
    );

    // Light movement
    discoTimeline!.to(
      light,
      {
        rotation: "+=30",
        duration: gsap.utils.random(1, 2),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
      0
    );

    // Light colors
    discoTimeline!.to(
      light,
      {
        backgroundColor:
          discoColors[(i + 1) % discoColors.length],
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "none",
      },
      0
    );
  });

  // Zoom + rotate
  discoTimeline.to(
    ".hbd-bg",
    {
       scale: () => gsap.utils.random(1.03, 1.1),
    rotation: () => gsap.utils.random(-3, 3),
      duration: 0.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    },
    0
  );

  // Overlay runs independently
  cycleOverlayColors();

  // Stop after 13 seconds
  gsap.delayedCall(13, stopDisco);
}

function stopDisco() {
  // Kill lights
  if (discoTimeline) {
    discoTimeline.kill();
    discoTimeline = null;
  }

  // Kill overlay color cycling
  if (overlayColorTween) {
    overlayColorTween.kill();
    overlayColorTween = null;
  }

  // Fade everything out
  gsap.to(".disco-light", {
    autoAlpha: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  gsap.to(".disco-overlay", {
    autoAlpha: 0,
    duration: 0.6,
    ease: "power2.out",
  });

    // Return background to normal
  gsap.to(".hbd-bg", {
    scale: 1,
    rotation: 0,
    duration: 0.8,
    ease: "power2.out",
  });
}

export default function disco() {
  const tl = gsap.timeline();

  // Beat
  tl.call(startDisco, [], 11.5);

  return tl;
}