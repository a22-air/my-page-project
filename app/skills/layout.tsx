"use client";
import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";
import { Desktop, RocketLaunch, PencilRuler, PersonArmsSpread } from "@phosphor-icons/react";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
    <Hero title="Skills"></Hero>
    <Sheet>{children}</Sheet>
    </>
  )
}