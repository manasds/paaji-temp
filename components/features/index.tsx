import { Container } from "../container";
import React from "react";
import { Heading } from "../heading";
import { SubHeading } from "../subheading";
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from "./card";
import { Plus } from "lucide-react";
import { SkeletonOne } from "./skeletons/one";
import { SkeletonThree } from "./skeletons/third";
import { SkeletonTwo } from "./skeletons/second";

export const Features = () => {
  return (
    <Container className="py-10 md:py-20 lg:py-32">
      <div className="flex xl:flex-row flex-col lg:items-baseline-last justify-between gap-10">
        <Heading className="text-center lg:text-left">
          Built For Fast Moving <br /> Teams That Need Control.
        </Heading>
        <SubHeading className="text-center lg:text-left mx-auto lg:mx-0">
          Agents work inside your existing tools, with built-in approvals, brand
          and policy guardrails, and full traceability. Every action is
          auditable, every outcome accountable.
        </SubHeading>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-20">
          <Card className="rounded-tl-3xl rounded-bl-3xl">
            <CardSkeleton>
              <SkeletonOne />
            </CardSkeleton>
            <CardContent>
            <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
            <CardCTA>
            <Plus />
            </CardCTA>
            </CardContent>
          </Card>
          <Card >
            <CardSkeleton>
              <SkeletonTwo />
            </CardSkeleton>
            <CardContent>
            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
            <CardCTA>
            <Plus />
            </CardCTA>
            </CardContent>
          </Card>
          <Card className="rounded-tr-3xl rounded-br-3xl">
            <CardSkeleton>
              <SkeletonThree />
            </CardSkeleton>
            <CardContent>
            <CardTitle>Approvals, Grardrails, and Full Auditability </CardTitle>
            <CardCTA>
            <Plus />
            </CardCTA>
            </CardContent>
          </Card>
        </div>
    </Container>
  );
};
