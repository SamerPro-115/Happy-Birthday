
type Props = {
    intoTheVoidAudioref: React.RefObject<HTMLAudioElement | null>
}


export default function Void({intoTheVoidAudioref}: Props) {
    return (
        <div className="overflow-hidden">

        <div className="w-full h-screen bg-white absolute inset-0 z-9999 white-fade" />

        {/* <div className="w-full h-screen bg-black absolute inset-0 z-99999 black-fade" /> */}

        <audio src="/audio/into-the-void.mp3" ref={intoTheVoidAudioref} /> 

        <img src="/images/void.gif" className="w-full h-screen absolute z-50 inset-0 void opacity-0" />
        

 </div>
    )
}