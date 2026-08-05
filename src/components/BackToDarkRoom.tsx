
type Props = {
    handleGiftClick: () => void,
    bulidUpAudioRef: React.RefObject<HTMLAudioElement | null>
}

export default function BackToDarkRoom({handleGiftClick, bulidUpAudioRef}: Props) {



    //  const handleGiftClicked = () => {
    //     handleGiftClick()

    //     //  if (audioRef.current) {
    //     //     audioRef.current.play();
    //     // }


    // }



    return (
      <>
        <img
          src="/images/dark-room.png"
          className="back-to-dark-room w-full  object-fill brightness-[1.1] h-screen "
        />

        {/* <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1
            className="text-15 text-white text-4xl vibes-regular tracking-widest"
            dir="rtl"
          >
            هووووف . .
          </h1>
        </div>

        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1
            className="text-16 text-white text-3xl vibes-regular tracking-widest letter"
            dir="rtl"
          >
            كان مكان غريب !
          </h1>
        </div>

        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1
            className="text-17 text-white text-3xl vibes-regular tracking-widest letter"
            dir="rtl"
          >
            دقيقة . .
          </h1>
        </div>

        <audio src="/audio/object-drops.mp3" ref={objectDropAudioref} />

        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1
            className="text-18 text-white text-3xl vibes-regular tracking-widest letter"
            dir="rtl"
          >
            ايش هذا ؟
          </h1>
        </div>

        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1
            className="text-19 text-white text-3xl vibes-regular tracking-widest letter"
            dir="rtl"
          >
            شوف ايش حصلت !
          </h1>
        </div> */}

        {/* <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <h1
            className="text-20 text-white text-3xl vibes-regular tracking-widest letter"
            dir="rtl"
          >
            حصلت هدية
          </h1>
        </div> */}

        <div className="absolute gift top-[50%] left-1/2 z-99 -translate-x-1/2 -translate-y-1/2 w-full">
          <img src="/images/gift.webp" className="w-23 m-auto gift" onClick={handleGiftClick}/>
        </div>

        <div className="absolute top-[64%] left-1/2 -translate-x-1/2 z-9999  -translate-y-1/2 w-full">
    <h1 className="text-21 text-white text-xs lemonada-uniquifier  w-full text-center">اضغط على الهدية</h1>
</div>

        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 glowing-bg" />

        <audio src="/audio/build-up.mp3" ref={bulidUpAudioRef} /> 
      </>
    );
}