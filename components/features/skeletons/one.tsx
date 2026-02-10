import { cn } from "@/lib/utils";
import {
  IconCircleDashedCheck,
  IconClock,
  IconExclamationCircle,
  IconPrison,
  IconRipple,
} from "@tabler/icons-react";
import React from "react";

export const SkeletonOne = () => {
  return (
    <div className="absolute rotate-z-15 -rotate-y-20 rotate-x-30 bottom-6  scale-[1.2] left-0 right-0 h-full w-full -translate-x-20 origin-bottom mask-radial-from-50% mask-r-from-50%">
      <SkeletonCard
        className="absolute left-12 bottom-0 z-30 max-w-[90%]"
        icon={<IconCircleDashedCheck className="size-4" />}
        title="Campaign Planner"
        badge={<Badge text="1205" variant="danger" />}
        description=" Creates clear , ready-to-use campaign briefs using product info ,
        audience data, and past results"
      />
      <SkeletonCard
        className="absolute bottom-10 left-8 z-20 "
        icon={<IconExclamationCircle className="size-4" />}
        title="Issue Tracker"
        badge={<Badge text="10S" variant="success" />}
        description=" Creates clear , ready-to-use campaign briefs using product info ,
        audience data, and past results"
      />
      <SkeletonCard
        className="absolute bottom-20 left-4 max-w-[80%] z-10 "
        icon={<IconPrison className="size-4" />}
        title="Risk Analysis"
        badge={<Badge text="10S" variant="warning" />}
        description=" Creates clear , ready-to-use campaign briefs using product info ,
        audience data, and past results"
      />
    </div>
  );
};

export const SkeletonCard = ({
  icon,
  title,
  badge,
  description,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  badge: React.ReactNode;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-[85%] my-auto h-fit mx-auto w-full border p-3 rounded-lg shadow-2xl bg-neutral-100 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700",
        className,
      )}
    >
      <div className="flex gap-3 items-center">
        {icon}
        <p className="text-sm font-normal">{title}</p>
        {badge}
      </div>
      <p className="text-sm text-neutral-400/80 dark:text-neutral-400 font-medium mt-3">
        {description}
      </p>
      <div className="flex items-center gap-2 flex-wrap mt-4">
        <Tag text="Google Ads" />
        <Tag text="SaaS" />
        <Tag text="Content" />
      </div>
    </div>
  );
};

export const Tag = ({ text }: { text: string }) => {
  return (
    <div className="px-2 text-xs py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700">
      {text}
    </div>
  );
};

export const Badge = ({
  variant,
  text,
}: {
  variant: "danger" | "success" | "warning";
  text: string;
}) => {
  return (
    <div
      className={cn(
        "p-1 py-0.5 rounded-full flex gap-1 items-center w-fit",
        variant === "danger" &&
          "bg-red-300/10 border border-red-400 text-red-500",
        variant === "warning" &&
          "bg-yellow-300/10 border border-yellow-400 text-yellow-500",
        variant === "success" &&
          "bg-green-300/10 border border-green-400 text-green-500",
      )}
    >
      <IconClock className={cn("size-3")} />
      <IconRipple className="size-3" />
      <p className="text-xs font-normal">{text}</p>
    </div>
  );
};
