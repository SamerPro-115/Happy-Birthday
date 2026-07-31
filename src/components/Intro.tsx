// import { useGSAP } from "@gsap/react"
import { useGSAP } from "@gsap/react";
import { createStory, type StoryController } from "../animations/createStory";
import { useRef } from "react";

export default function Intro() {

    const story = useRef<StoryController | null>(null);
    
    const handleLightOn = () => {
        story.current?.resume();
    }

useGSAP(() => {

    // Create story timeline and start it
    story.current = createStory();

    story.current.start();

}, []);


  return (
    <section className="">
      <div className="h-screen w-full bg-black" />

      {/* Text container */}
<div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2  ">
    <h1 className="text-1 text-white text-3xl vibes-regular text-1">احم</h1>
</div>


<div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2">
    <h1 className="text-2 text-white text-4xl vibes-regular ">ليه الدنيا ظلام هنا؟</h1>
</div>

<div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
    <h1 className="text-3 text-white text-3xl vibes-regular tracking-widest w-full text-center">تقدر تشغل النور؟</h1>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
   <img src="/images/light.png" className="w-28 m-auto light" onClick={handleLightOn}/>
</div>

<div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
    <h1 className="text-4 text-white text-xs lemonada-uniquifier  w-full text-center">.اضغط على المصباح الكهربائي</h1>
</div>

    </section>
  );
}