// import { useGSAP } from "@gsap/react"
import { useRef } from "react";


type IntroProps = {
    onLightClick: () => void
}

export default function Intro({onLightClick}: IntroProps) {


    const audioRef = useRef<HTMLAudioElement | null>(null);
    
    const handleLightOn = () => {
          onLightClick();
         if (audioRef.current) {
            audioRef.current.play();
        }
    }






  return (
    <section className="">
      <div className=" w-full bg-black black-bg" />
      
      <audio src="/audio/light-sfx.mp3" ref={audioRef}  />

      {/* Text container */}
<h1
  className="story-text text-1 top-[30%] text-white text-3xl vibes-regular"
  dir="rtl"
>
  احم
</h1>

<h1
  className="story-text text-2 top-[45%] text-white text-4xl vibes-regular"
  dir="rtl"
>
  ليه الدنيا ظلام هنا؟
</h1>

<h1
  className="story-text text-3 top-[35%] text-white text-3xl vibes-regular"
  dir="rtl"
>
  تقدر تشغل النور؟
</h1>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-99999 -translate-y-1/2 w-full">
   <img src="/images/light.png" className="w-28 m-auto light" onClick={handleLightOn}/>
</div>

<h1
  className="story-text text-4 top-[65%] text-white text-xs lemonada-uniquifier"
  dir="rtl"
>
  اضغط على المصباح الكهربائي
</h1>
    </section>
  );
}