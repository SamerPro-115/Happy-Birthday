import { useRef } from "react";
import { createStory, type StoryController } from "./animations/createStory";
import DarkRoom from "./components/DarkRoom"
import Hall from "./components/Hall"
import Intro from "./components/Intro"
import { useGSAP } from "@gsap/react";

function App() {


const story = useRef<StoryController | null>(null);



    useGSAP(() => {
       story.current = createStory();
    }, []);

    const continueStory = () => {
    story.current?.resume();
};
  

  return (
    <>
   {/* <Intro onLightClick={continueStory} /> */}
    <DarkRoom onDoorClick={continueStory} />
    <Hall />
    </>
  )
}

export default App
