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
        className="dark-room w-full  lg:object-cover object-fill brightness-[1.1] h-screen "
      />

            <audio src="/audio/open-door-sfx.mp3" ref={audioRef}  />

<h1
  className="story-text text-5 top-[70%] text-white text-4xl vibes-regular tracking-widest"
  dir="rtl"
>
  المكان مظلم
</h1>


   <h1
  className="story-text text-6 top-[60%] text-white text-4xl vibes-regular tracking-widest"
  dir="rtl"
>
  تدري . .
</h1>

  <h1
  className="story-text text-7 top-[60%] text-white text-4xl vibes-regular tracking-widest"
  dir="rtl"
>
  خلينا نطلع برا
</h1>

<img
  src="/images/door.webp"
  className="
    door
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
  className="story-text text-8 top-[20%] text-white text-4xl vibes-regular tracking-widest"
  dir="rtl"
>
  يمكن في احد برا ؟
</h1>

<h1
  className="story-text text-9 top-[64%] text-white text-xs lemonada-uniquifier"
>
  اضغط على الباب
</h1>

       <audio src="/audio/scary-sound.mp3"  ref={hallAudioRef} />



    </>
  );
}