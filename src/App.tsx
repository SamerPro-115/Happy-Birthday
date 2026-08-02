import { useRef } from "react";
import { createStory, type StoryController } from "./animations/createStory";
import DarkRoom from "./components/DarkRoom"
import Hall from "./components/Hall"
import Intro from "./components/Intro"
import { useGSAP } from "@gsap/react";

function App() {


const story = useRef<StoryController | null>(null);
const hallAudioRef = useRef<HTMLAudioElement | null>(null);


    useGSAP(() => {
       story.current = createStory();
    }, []);

    const continueStory = () => {
    story.current?.resume();  
};
  


  return (
    <>
   <Intro onLightClick={continueStory} />
    <DarkRoom onDoorClick={continueStory} hallAudioRef={hallAudioRef}/>
    <Hall onDoorClick={continueStory} hallAudioRef={hallAudioRef}  />
    </>
  )
}

export default App
