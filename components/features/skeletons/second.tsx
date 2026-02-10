import { cn } from "@/lib/utils";
import {
  IconCheck,
  IconCircleCheckFilled,
  IconCircleDashedCheck,
  IconLoader2,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";
import { Tag } from "./one";

export const SkeletonTwo = () => {
  return (
    <div
      style={{
        transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg) ",
        
      }}
      className={cn(
        "max-w-[85%] my-auto h-full mx-auto w-full border p-3 rounded-lg shadow-2xl bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 group",
        " translate-x-10 -translate-y-10",
        "[--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/15",
      )}
    >
      <div className="flex gap-3 items-center">
        <IconCircleDashedCheck className="size-4" />
        <p className="text-sm font-normal text-black dark:text-white">
          Campaign Planner
        </p>
      </div>
      <div className="relative h-[85%] mt-4 dark:bg-neutral-600 bg-neutral-200 rounded-2xl">
        <Pattern />
        <div className="absolute rounded-2xl translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 inset-0 bg-white h-full w-full divide-y divide-neutral-200">
          <Row
            icon={<IconCheck className="size-4 fill-green-500 stroke-white" />}
            text="Fetching Data"
            time="10s"
          />
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Processing Data"
            time="20s"
          />
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Performing Action"
            time="30s"
          />
          <Row
            icon={<IconLoader2 className="size-3 text-white animate-spin" />}
            text="Waiting for Approval"
            time="40s"
            variant="warning"
          />
          <Row
            icon={<IconCheck className="size-3 fill-green-500 stroke-white" />}
            text="Success"
            time="40s"
          />
        </div>
      </div>
    </div>
  );
};
export const Row = ({
  icon,
  text,
  time,
  variant = "success",
}: {
  icon: React.ReactNode;
  text: string;
  time: string;
  variant?: "success" | "warning" | "danger";
}) => {
  return (
    <div className="flex justify-between items-center py-2 px-4">
      <div className="flex items-center gap-2">
        <div
          className={cn(
            "size-4 flex items-center justify-center rounded-full",
            variant === "success" && "bg-green-500",
            variant === "warning" && "bg-yellow-500",
            variant === "success" && "bg-green-500",
          )}
        >
          {icon}
        </div>
        <p className="text-neutral-500 font-medium text-sm">{text}</p>
      </div>
      <div className="flex items-center gap-1 tetx-neutral-400">
        <IconRipple className="size-3" />
        <p className="text-xs font-normal">{time}</p>
      </div>
    </div>
  );
};

export const Pattern = () => {
  return (
    <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed"></div>
  );
};
