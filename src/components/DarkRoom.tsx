

export default function DarkRoom() {
  return (
    <>
      <img
        src="/images/dark-room.jpg"
        className="dark-room w-full  object-cover grayscale-10"
      />

      <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-5 text-white text-4xl vibes-regular gap-3 tracking-widest flex justify-center items-center" dir="rtl">
       المكان يخوف  
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
      </div>

      <div className="absolute top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
   <img src="/images/door.png" className="w-36 m-auto door" />
</div>

 <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
        <h1 className="text-8 text-white text-4xl vibes-regular tracking-widest" dir="rtl">
          يمكن في احد برا ؟
        </h1>
      </div>

      
<div className="absolute top-[64%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
    <h1 className="text-9 text-white text-xs lemonada-uniquifier  w-full text-center">اضغط على الباب</h1>
</div>


    </>
  );
}