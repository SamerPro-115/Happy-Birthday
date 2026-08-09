import { useEffect, useRef, useState } from "react";
import { createStory, type StoryController } from "@/animations/createStory";
import DarkRoom from "@/components/DarkRoom"
import Hall from "@/components/Hall"
import Intro from "@/components/Intro"
import { useGSAP } from "@gsap/react";
import BackToDarkRoom from "@/components/BackToDarkRoom";
import gsap from "gsap";
import Celebration from "@/components/Celebration";
import { names } from "@/utils/names";
import { preloadImages } from "./utils/preloadImages";

function App() {


const story = useRef<StoryController | null>(null);

const hallAudioRef = useRef<HTMLAudioElement | null>(null);

const objectDropAudioref = useRef<HTMLAudioElement>(null!);
const HBAudioref = useRef<HTMLAudioElement>(null!);
const giftAnimation = useRef<gsap.core.Tween | null>(null);


const params = new URLSearchParams(window.location.search);

const nameKey = params.get("name")?.toLowerCase();

// map single name string to expected string[] | null for Celebration
const name = nameKey ? [names[nameKey as keyof typeof names]] : null;
const [loading, setLoading] = useState(true);




// Wait for images to load so GSAP animation can work proparally with images
useEffect(() => {
  const init = async () => {
    await preloadImages([
      "/images/light.png",
      "/images/door.webp",
      "/images/cake.gif",
      "/images/decoration.svg",
      "/images/gift.webp",
    ]);

    setLoading(false);
  };

  init();
}, []);

 useGSAP(() => {
  if (loading) return;

  story.current = createStory(
    objectDropAudioref,
    HBAudioref
  );

  giftAnimation.current = gsap.to(".gift", {
    scale: 0.9,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  return () => {
    story.current?.pause();
    giftAnimation.current?.kill();
  };
}, [loading]);

    const continueStory = () => {
    story.current?.resume();  
};

 const handleGiftClick = () => {
    giftAnimation.current?.kill();
    story.current?.resume();

    setTimeout(() => {
      document.title = "يوم ميلاد سعيد 🎉"
    }, 2000)

  };
  
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="text-center text-white" dir="rtl">
          <p className="text-2xl">نحضّر لك شيئًا مميزًا...</p>
          <p className="mt-2 text-sm opacity-60">لحظات فقط...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="overflow-hidden">
   <Intro onLightClick={continueStory} />
    <DarkRoom onDoorClick={continueStory} hallAudioRef={hallAudioRef}/>
    <Hall onDoorClick={continueStory} hallAudioRef={hallAudioRef}  />

    <BackToDarkRoom handleGiftClick={handleGiftClick} objectDropAudioref={objectDropAudioref} />

    <Celebration HBAudioref={HBAudioref} name={name}/>
    </div>
  )
}

export default App
