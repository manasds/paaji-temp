import { cn } from "@/lib/utils";
import React from "react";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("bg-neutral-50 max-w-xl mx-auot dark:bg-neutral-800 rounded-lg", className)}
    >
      {children}
    </div>
  );
};
export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "pb-6 px-4 md:pb-12 md:px-8 flex items-center justify-between ",
        className,
      )}
    >
      {children}
    </div>
  );
};
export const CardCTA = ({
  className,
  children,
  ...rest
}: React.ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "size-5 md:size-10 shrink-0 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center active:scale-[0.98] transition duration-200",
        className,
      )}
    >
      {children}
    </button>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-lg md:text-2xl font-bold font-display", className)}>
      {children}
    </h3>
  );
};
export const CardSkeleton = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "h-80 sm:h-60 md:h-80 relative overflow-hidden perspective-distant transform-3d pt-8 md:pt-16 mask-radial-from-50%",
        className,
      )}
    >

      {children}
    </div>
  );
};
