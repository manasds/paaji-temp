import React from 'react'
import { Container } from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subheading";
import Link from "next/link";
import { LandingImages } from "./landing-images";
import { Button } from "./ui/button";

export const Outcomes = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-20 lg:py-10">
        <Container>
          <Heading as="h2">
            Governed Ai <br />
           Trusted Outcomes
          </Heading>
          <SubHeading className="py-8">
            Deploy AI agents that plan, act through your tools, and report
            outcomes—without changing how your teams work.
          </SubHeading>
    
          <LandingImages
            firstImageSrc="https://assets.aceternity.com/screenshots/3.jpg"
            secondImageSrc="https://assets.aceternity.com/screenshots/4.jpg"
          />
          <div className="bg-background absolute inset-x-0 bottom-0 z-50 h-40 w-full mask-t-from-10% md:h-100"></div>
        </Container>
        </section>
  )
}
