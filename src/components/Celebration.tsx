type Props = {
  HBAudioref: React.RefObject<HTMLAudioElement | null>;
  name: string[] | null;
};

export default function Celebration({ HBAudioref, name }: Props) {
  const confetti = Array.from({ length: 30 });
  const balloons = Array.from({ length: 15 });
  return (
    <div className=" overflow-hidden ">
      <div className="bg-white w-full h-screen absolute inset-0  white-fade" />

      <img
        src="/images/HBD-bg.jpg"
        className="fixed lg:object-cover inset-0 h-screen w-full object-fill hbd-bg"
      />

      {/* Celebration particles */}
      <div className="fixed inset-0  pointer-events-none overflow-hidden">
        {/* Confetti */}
        {confetti.map((_, i) => (
          <span
            key={`confetti-${i}`}
            className="confetti absolute -top-5 left-0 opacity-0"
          />
        ))}

        {/* Balloons */}
        {balloons.map((_, i) => (
          <span
            key={`balloon-${i}`}
            className="balloon absolute inset-0 opacity-0"
          />
        ))}
      </div>

      <img
        src="/images/cake.gif"
        className="cake absolute lg:w-96 lg:top-[60%] md:top-[53%] top-[50%] -translate-x-1/2 -translate-y-1/2 left-1/2 md:w-[50%] w-64 cake-shadow"
      />

      <img
        src="/images/decoration.svg"
        alt=""
        className="lg:w-[50%] w-full decoration-1 absolute top-[5%]  -translate-x-1/2 -translate-y-1/2 left-1/2 scale-x-[-1]"
      />
      <img
        src="/images/decoration.svg"
        alt=""
        className="lg:w-[30%] md:w-[70%] w-70 absolute top-[0%] decoration-2  -translate-x-1/2 -translate-y-1/2 left-1/2 "
      />

    <h1
  className="story-text h-[20%] hbd-text top-[34%] lg:top-[38%] md:w-[65%] w-[80%] md:text-6xl text-3xl lemonada-uniquifier text-white"
  dir="rtl"
>
  يوم ميلاد سعيد {name}
</h1>

      <audio src="/audio/HBD-music.mp3" ref={HBAudioref} />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        <div className="disco-light disco-light-1" />
        <div className="disco-light disco-light-2" />
        <div className="disco-light disco-light-3" />
        <div className="disco-light disco-light-4" />
        <div className="disco-light disco-light-5" />
      </div>

      <div className="disco-overlay fixed inset-0 z-30 pointer-events-none" />
    </div>
  );
}
