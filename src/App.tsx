import { useRef } from "react";
import { createStory, type StoryController } from "./animations/createStory";
import DarkRoom from "./components/DarkRoom"
import Hall from "./components/Hall"
import Intro from "./components/Intro"
import { useGSAP } from "@gsap/react";
import BackToDarkRoom from "./components/BackToDarkRoom";
import Void from "./components/Void";
import gsap from "gsap";

function App() {


const story = useRef<StoryController | null>(null);

const hallAudioRef = useRef<HTMLAudioElement | null>(null);

const objectDropAudioref = useRef<HTMLAudioElement>(null!);
const intoTheVoidAudioref = useRef<HTMLAudioElement>(null!);
const giftAnimation = useRef<gsap.core.Tween | null>(null);



    useGSAP(() => {
       story.current = createStory(objectDropAudioref, intoTheVoidAudioref);
 giftAnimation.current = gsap.to(".gift", {
      scale: 0.9,
      duration: 1,
      repeat: -1,
      yoyo: true,
    });
       
    }, []);

    const continueStory = () => {
    story.current?.resume();  
};

 const handleGiftClick = () => {
    giftAnimation.current?.kill();
    story.current?.resume();

   giftAnimation.current = gsap.fromTo(
  ".gift",
  { y: -4 },
  {
    y: 4,
    duration: 0.1,
    repeat: -1,
    yoyo: true,
    ease: "bounce.inOut",
  }
);


// Temporary solution to stop the up & down animation
setTimeout(() => {
giftAnimation.current?.kill()
}, 2000)



  };
  


  return (
    <>
   {/* <Intro onLightClick={continueStory} />
    <DarkRoom onDoorClick={continueStory} hallAudioRef={hallAudioRef}/>
    <Hall onDoorClick={continueStory} hallAudioRef={hallAudioRef}  /> */}

    <BackToDarkRoom handleGiftClick={handleGiftClick} />

    <Void intoTheVoidAudioref={intoTheVoidAudioref}/>
    </>
  )
}

export default App
