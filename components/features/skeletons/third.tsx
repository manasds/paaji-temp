import { DottedGlowBackground } from '@/components/ui/dotted-glow-background'
import React from 'react'
import { ShieldIllustration } from '../../Illustrations/shield'

export const SkeletonThree = () => {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
      <div className="relative z-10 bg-neutral-50 dark:bg-neutral-800 rounded-full p-1.5 w-fit">
        <ShieldIllustration />
      </div>
    </div>
  )
}
