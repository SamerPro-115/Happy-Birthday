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



 <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-10 text-white text-3xl vibes-regular tracking-widest" dir="rtl">
         امممم . .
        </h1>
      </div>

      
 <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-11 text-white text-3xl vibes-regular tracking-widest" dir="rtl">
        الوقت متأخر يمكن للخروج
        </h1>
      </div>

 <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-12 text-white text-3xl vibes-regular tracking-widest" dir="rtl">
       المكان يخوف . .
        </h1>
      </div>


 <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-13 text-white text-3xl vibes-regular tracking-widest" dir="rtl">
      خلينا نرجع للداخل
        </h1>
      </div>

      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-99999">
   <img src="/images/door.webp" className="w-23 m-auto door-2 z-99999 hidden" onClick={handleDoorClicked}  />
</div>

<div className="absolute top-[64%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
    <h1 className="text-14 text-white text-xs lemonada-uniquifier  w-full text-center">اضغط على الباب</h1>
</div>

            <audio src="/audio/open-door-sfx.mp3" ref={audioRef}  />




    </div>
  );
}