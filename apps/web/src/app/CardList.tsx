"use client";

import { useEffect } from "react";
import Card from "./Card";
import { animate, motion, stagger } from "@repo/ui/framer";

const achievements = [
  {
    prefix: "Led and achieved",
    text: "99.999% SLOs",
    suffix: "for Black Friday/Cyber Monday, resulting in Zero Incident.",
  },
  {
    prefix: "Scale and manage",
    text: "2X Loads",
    suffix: "than usual, for microservices during Peak Season.",
  },
  {
    prefix: "Managed and handled",
    text: "Incidents",
    suffix: "including high security related and downtime cases.",
  },
  {
    prefix: "Onboarded and",
    text: "Evangelise",
    suffix: "NodeJS and Typescript within company and local community.",
  },
];

export default function CardList() {
  const staggerMenuItems = stagger(0.3, { startDelay: 1 });

  useEffect(() => {
    animate(
      "#card",
      { opacity: 1, filter: "blur(0px)" },
      { duration: 1, delay: staggerMenuItems },
    );
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.2 }}
      className="border bg-black rounded-xl border-zinc-600 max-w-7xl mt-10 grid grid-cols-1 divide-y lg:divide-y-0 lg:grid-cols-4 w-full text-left divide-x-0 lg:divide-x divide-zinc-800"
    >
      {achievements.map((achievement) => {
        return <Card {...achievement} />;
      })}
    </motion.div>
  );
}
