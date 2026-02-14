import { LogoIcon } from "@/components/logo";
import { cn } from "@/lib/utils";
import React from "react";
import { InstaLogo, MetaLogo, SheetLogo, SlackLogo } from "@/icons/index";
  export const SkeletonTwo = () => {
  return (
    <div
      className="relative flex w-full flex-1 items-center justify-center rounded-t-3xl p-2"
      style={{
        transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
      }}
    >
      <Circle className="flex items-center justify-center border-neutral-200 shadow-sm size-24 md:size-40">
        <LogoIcon className="size-8 md:size-10 text-neutral-400" />

        <RevolvingCard className="[--orbit-duration:10s] [--translate-position:20vw] md:[--translate-position:120px] [--orbit-delay:0s]">
          <SlackLogo className="size-6 md:size-8" />
        </RevolvingCard>
      </Circle>

      
      <Circle className="z-9 size-32 md:size-60 bg-neutral-100/80 shadow">
        <RevolvingCard className="[--orbit-duration:10s] [--translate-position:25vw] md:[--translate-position:160px] [--orbit-delay:-2.5s]">
          <MetaLogo className="size-6 md:size-8" />
        </RevolvingCard>
      </Circle>

      
      <Circle className="z-8 size-40 md:size-80 bg-neutral-100/40 shadow">
        <RevolvingCard className="[--orbit-duration:15s] [--translate-position:30vw] md:[--translate-position:200px] [--orbit-delay:-5s]">
          <InstaLogo className="size-6 md:size-8" />
        </RevolvingCard>
      </Circle>

    
      <Circle className="z-7 size-48 md:size-96 bg-neutral-100/60 shadow">
        <RevolvingCard className="[--orbit-duration:20s] [--translate-position:35vw] md:[--translate-position:240px] [--orbit-delay:-7.5s]">
          <SheetLogo className="size-6 md:size-8" />
        </RevolvingCard>
      </Circle>

     
      <Circle className="z-6 size-56 md:size-120 bg-neutral-100/20 shadow" />
    </div>
  );
};


const RevolvingCard = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "animate-orbit absolute inset-0 m-auto flex size-8 items-center justify-center rounded-sm border border-transparent bg-white ring-1 shadow-black/10 ring-black/10 [--orbit-duration:10s] [--translate-position:120px]",
        className
      )}
    >
      {children}
    </div>
  );
};

const Circle = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 m-auto size-20 md:size-40 rounded-full border border-transparent bg-white",
        className
      )}
    >
      {children}
    </div>
  );
};
