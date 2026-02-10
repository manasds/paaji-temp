import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { LandingImages } from "./landing-images";
export const Hero = () => {
  return (
    <section className="pt-10 md:pt-20 lg:pt-32 relative overflow-hidden ">
      <Container>
        <Heading as="h1">
          Agents that do the work <br />Approvals that keep you safe
        </Heading>
        <SubHeading className="py-8">
          Deploy AI agents that plan, act through your tools, and report
          outcomes—without changing how your teams work.
        </SubHeading>
        <div className="flex items-center md:gap-6:px-2">
          <Button className="shadow-brand">Start 30 day free trial </Button>
          <Button asChild variant="outline"><Link href="#">View role based demos</Link></Button>
        </div>
        <LandingImages /> 
        <div className="absolute inset-x-0 bottom-0 h-40 md:h-100 w-full mask-t-from-10% bg-background z-50"></div>
      </Container>
      {/* <div className="absolute inset-x-0 bottom-0 h-40 md:h-100 w-full mask-t-from-10% bg-background z-50"></div> */}
    </section>
  );
};
