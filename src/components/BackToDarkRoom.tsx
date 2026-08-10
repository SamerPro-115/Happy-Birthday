
type Props = {
    handleGiftClick: () => void,
}

export default function BackToDarkRoom({handleGiftClick}: Props) {



    return (
      <>
        <img
          src="/images/dark-room.png"
          className="back-to-dark-room w-full  lg:object-cover object-fill brightness-[1.1] h-screen "
        />

        <h1
  className="story-text text-15 top-[30%] text-white text-4xl vibes-regular "
  dir="rtl"
>
  هووووف . .
</h1>

<h1
  className="story-text text-16 top-[50%] text-white text-3xl vibes-regular  letter"
  dir="rtl"
>
  كان مكان غريب !
</h1>

<h1
  className="story-text text-17 top-[30%] text-white text-3xl vibes-regular  letter"
  dir="rtl"
>
  دقيقة . .
</h1>

        {/* <audio src="/audio/object-drops.mp3" ref={objectDropAudioref} /> */}

       <h1
  className="story-text text-18 top-[60%] text-white text-3xl vibes-regular  letter"
  dir="rtl"
>
  ايش هذا ؟
</h1>

<h1
  className="story-text text-19 top-[50%] text-white text-3xl vibes-regular  letter"
  dir="rtl"
>
  شوف ايش حصلت !
</h1>

<h1
  className="story-text text-20 top-[35%] text-white text-3xl vibes-regular  letter"
  dir="rtl"
>
  حصلت هدية
</h1>

       <img
  src="/images/gift.webp"
  className="
    gift
    absolute
    top-1/2
    left-1/2
    -translate-x-1/2
    -translate-y-1/2
    z-99
    w-23
  "
  onClick={handleGiftClick}
/>

<h1
  className="story-text text-21 top-[64%] text-white text-xs lemonada-uniquifier"
>
  اضغط على الهدية
</h1>

        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 glowing-bg" />

      </>
    );
}