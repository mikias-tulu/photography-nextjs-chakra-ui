"use client"
import CallToActionWithAnnotation from "@/components/HeroSection"
import SimpleThreeColumns from "@/components/Features"
import SplitWithImage from "@/components/Testimonials"
import ImpactSection from "@/components/ImpactCard"

export default function Home() {
  return (
    <>
      <CallToActionWithAnnotation />
      <SimpleThreeColumns />
      <ImpactSection />
      <SplitWithImage />
    </>
  )
}