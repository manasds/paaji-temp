"use client";
import {
  HubspotLogo,
  LogoBoard,
  LogoFile,
  LogoSetting,
  SalesForceLogo,
  SheetLogo
} from "@/icons";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";
export const SkeletonOne = () => {
  return (
    <div className="mx-auto flex w-full max-w-sm flex-1 flex-col gap-2 rounded-t-3xl border border-neutral-200 bg-neutral-100 p-2">
      <Card
        topIcon={<LogoFile className="size-4" />}
        title="Connect data"
        description="Link CRMs , helpdesks, and APIs to give agents secure , role based
          access"
        tags={[
          { text: "Salesfroce", icon: <SalesForceLogo className="size-3" /> },
          { text: "Hubspot", icon: <HubspotLogo className="size-3" /> },
          { text: "Sheets", icon: <SheetLogo className="size-3" /> }
        ]}
        className="bg-blue-500"
      />
      <Card
        topIcon={<LogoSetting className="size-4" />}
        title="Define Processing Logic"
        description="Create workflows ,decision points, and conditional actions for each task."
        className="bg-green-500"
      />
      <Card
        topIcon={<LogoBoard className="size-4" />}
        title="Manage Errors"
        description="Add retries , fallback paths, and to handle failures automatically"
        className="bg-red-500"
      />
    </div>
  );
};

const Card = ({
  topIcon,
  title,
  description,
  tags,
  className
}: {
  topIcon: React.ReactNode;
  title: string;
  description: string;
  tags?: { text: string; icon: React.ReactNode }[];
  className: string;
}) => {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-transparent bg-white px-4 py-2 ring-1 shadow-black/10 ring-black/30">
      <div
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-full text-white",
          className
        )}
      >
        {topIcon}
      </div>
      <div>
        <p className="text-lg font-bold text-neutral-800">{title}</p>
        <p className="text-sm font-medium text-neutral-700">{description}</p>
        {tags && (
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Tag key={tag.text} icon={tag.icon} text={tag.text} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Tag = ({ text, icon }: { text: string; icon: React.ReactNode }) => {
  return (
    <div className="flex items-center gap-1 rounded-sm border border-neutral-100 px-1 py-0.5 text-sm">
      {icon}
      <p className="text-xs text-neutral-500">{text}</p>
    </div>
  );
};
