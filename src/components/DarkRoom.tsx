import { useRef } from "react";

type DarkRoomProps = {
    onDoorClick: () => void,
      hallAudioRef: React.RefObject<HTMLAudioElement | null>

}

export default function DarkRoom({onDoorClick, hallAudioRef}: DarkRoomProps) {

    const audioRef = useRef<HTMLAudioElement | null>(null);

   const handleDoorClicked = () => {
        onDoorClick()

         if (audioRef.current) {
            audioRef.current.play();
        }

        setTimeout(() => {
            if (hallAudioRef.current) {
                hallAudioRef.current.play();
            }
        }, 4900);
    }


  

  return (
    <>
      <img
        src="/images/dark-room.png"
        className="dark-room w-full  object-fill brightness-[1.1] h-screen "
      />

            <audio src="/audio/open-door-sfx.mp3" ref={audioRef}  />


      {/* <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-5 text-white text-4xl vibes-regular gap-3 tracking-widest flex justify-center items-center" dir="rtl">
       المكان مظلم  
        </h1>
      </div>

       <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-6 text-white text-4xl vibes-regular tracking-widest" dir="rtl">
      تدري . .
        </h1>
      </div>

      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-7 text-white text-4xl vibes-regular tracking-widest" dir="rtl">
            خلينا نطلع برا
        </h1>
      </div> */}

      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full z-99999">
   <img src="/images/door.webp" className="w-23 m-auto door z-99999" onClick={handleDoorClicked} />
</div>

 <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-8 text-white text-4xl vibes-regular tracking-widest" dir="rtl">
          يمكن في احد برا ؟
        </h1>
      </div>

      
<div className="absolute top-[64%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
    <h1 className="text-9 text-white text-xs lemonada-uniquifier  w-full text-center">اضغط على الباب</h1>
</div>

       <audio src="/audio/scary-sound.mp3"  ref={hallAudioRef} />



    </>
  );
}