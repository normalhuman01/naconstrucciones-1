import { arialBlackFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const Video = () => {
  return (
    <div className="flex items-center justify-center flex-col my-10">
      <h3
        className={cn("text-[32px] font-bold mb-5", arialBlackFont.className)}
      >
        VIDEO
      </h3>
      <video src="/video/video-demo.webm" width={670} height={370} controls></video>
      <p className="mt-3">El encanto de lo simple y funcional</p>
    </div>
  );
};
