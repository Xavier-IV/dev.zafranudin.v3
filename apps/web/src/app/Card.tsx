"use client";

import { motion } from "@repo/ui/framer";
import { MoveRight } from "@repo/ui/lucide";
import { Link } from "@repo/ui/nextui";

export default function Card(props: {
  prefix: string;
  text: string;
  suffix: string;
}) {
  return (
    <motion.div
      id="card"
      initial={{ color: "#525252" }}
      whileHover={{
        color: "#a1a1aa",
      }}
      transition={{ duration: 0.2 }}
      className="opacity-0 w-full h-full min-h-20 flex flex-col justify-between text-zinc-600 hover:text-white cursor-default"
    >
      <div className="p-8 flex flex-col gap-2 grow">
        <span>{props.prefix}</span>
        <span className="text-4xl font-semibold text-zinc-50">
          {props.text}
        </span>
        <p>{props.suffix}</p>
      </div>
      <div className="px-8 pb-6">
        <Link href="#" className="text-zinc-600 flex gap-2" color="foreground">
          <span>Learn More</span> <MoveRight size="16" />
        </Link>
      </div>
    </motion.div>
  );
}
