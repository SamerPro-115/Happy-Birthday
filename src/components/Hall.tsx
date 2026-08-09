import { useRef } from "react";

type HallProps = {
  onDoorClick: () => void,
  hallAudioRef: React.RefObject<HTMLAudioElement | null>
}

export default function Hall({onDoorClick, hallAudioRef}: HallProps) {


     const audioRef = useRef<HTMLAudioElement | null>(null);

   const handleDoorClicked = () => {
        onDoorClick()

         if (audioRef.current) {
            audioRef.current.play();
        }
        if(hallAudioRef.current) {
          hallAudioRef.current.pause();
        }

  
    }


  

  return (
    <div className="overflow-hidden">
   <img
        src="/images/hall.png"
        className="hall w-full h-screen object-cover grayscale-50  m-auto brightness-90"
      />



<h1
  className="story-text text-10 top-[30%] text-white text-3xl vibes-regular tracking-widest"
  dir="rtl"
>
  امممم . .
</h1>


      
<h1
  className="story-text text-11 top-[20%] text-white text-3xl vibes-regular tracking-widest"
  dir="rtl"
>
  الوقت متأخر يمكن للخروج
</h1>


<h1
  className="story-text text-12 top-[60%] text-white text-3xl vibes-regular tracking-widest"
  dir="rtl"
>
  المكان يخوف . .
</h1>



<h1
  className="story-text text-13 top-[50%] text-white text-3xl vibes-regular tracking-widest"
  dir="rtl"
>
  خلينا نرجع للداخل
</h1>

<img
  src="/images/door.webp"
  className="
    door-2
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    w-23
  "
  onClick={handleDoorClicked}
/>

<h1
  className="story-text text-14 top-[64%] text-white text-xs lemonada-uniquifier"
>
  اضغط على الباب
</h1>
            <audio src="/audio/open-door-sfx.mp3" ref={audioRef}  />




    </div>
  );
}