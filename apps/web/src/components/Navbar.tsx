"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between shadow-md py-2 items-center w-full h-fit">
      <div className="hidden md:flex gap-4 p-4 text-sm">
        <a href="/" className={["nav", pathname == "" && "active"].join(" ")}>
          Home
        </a>
        <a
          href="/blog"
          className={["nav", /blog/.test(pathname) && "active"].join(" ")}
        >
          Blog
        </a>
        <a
          href="/devlog/game"
          className={["nav", /devlog\/game/.test(pathname) && "active"].join(
            " ",
          )}
        >
          Game Devlog
        </a>
      </div>
      <div className="mx-2 block md:hidden">
        <div
          id="popup-glass"
          className="hidden flex flex-col rounded-md px-8 py-4 absolute mt-2 gap-2 popup-glass"
        >
          <a href="/">Home</a>
          <a href="/blog">Blogs</a>
          <a href="/devlog/game">Game Devlog</a>
        </div>
      </div>
    </div>
  );
}
