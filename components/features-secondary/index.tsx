import React from "react";
import { Container } from "../container";
import { cn } from "@/lib/utils";
import { HubspotLogo, IntegrationIcon, LogoBoard, SalesForceLogo, SheetLogo, WorkflowIcon } from "@/icons";
import { SkeletonOne } from "./skeletons/first";
import { SkeletonTwo } from "./skeletons/second";
export const FeaturesSecondary = () => {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-20 lg:pt-32">
      <Container>
        <div className="dark:divide-nuetral-800 grid grid-cols-1 divide-x divide-neutral-200 border-y border-neutral-200 md:grid-cols-2 dark:border-neutral-800">
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800">Agent Studio</h2>
            <p className="mt-2 max-w-sm text-neutral-600">
              Design, Launch and customize AI agents for marketing, sales,
              support and ops, built around your workflows.
            </p>
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
          </div>
          <div className="p-8">
            <h2 className="text-lg font-bold text-neutral-800">
              Multi-Agent Orchestration
            </h2>
            <p className="mt-2 max-w-sm text-neutral-600">
              Coordinate multiple agents across workflows using memory,
              interrupts, and conditional logic.
            </p>
            <CardSkeleton className="mt-6 mask-radial-from-50%">
              <SkeletonTwo />
            </CardSkeleton>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:mt-20">
          <div>
          <div className="flex items-center gap-2">
            <WorkflowIcon />
            <h3 className="font-bold text-lg text-neutral-600">Workflow Automation</h3>
          </div>
          <p className="text-neutral-500 text-base mt-2">Automata campaigns, tickets and CRM updates without manual handoffs.</p>
          </div>

          <div>
          <div className="flex items-center gap-2">
            <IntegrationIcon />
            <h3 className="font-bold text-lg text-neutral-600">Integration Fabric </h3>
          </div>
          <p className="text-neutral-500 text-base mt-2">Connect CRMs, service desks, data warehouses and cloud apps seamlessly.</p>
          </div>

          <div>
          <div className="flex items-center gap-2">
            <LogoBoard className="size-4"/>
            <h3 className="font-bold text-lg text-neutral-600">Human-in-the-Loop</h3>
          </div>
          <p className="text-neutral-500 text-base mt-2">Add reviews, approvals and escalations without slowing work </p>
          </div>

        </div>
      </Container>
    </section>
  );
};

export const CardSkeleton = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-80 flex-col overflow-hidden sm:h-60 md:h-80",
        className
      )}
    >
      {children}
    </div>
  );
};
