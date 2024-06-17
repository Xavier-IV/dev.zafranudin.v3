"use clients";

import FancySeparator from "@/components/FancySeparator";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const SoftwareDevBadge = dynamic(
  () => import("../components/SoftwareDevBadge"),
  { ssr: false },
);

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center gap-6 px-10 py-40 overflow-y-scroll">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl md:text-5xl">Zafranudin Zafrin</h1>
          <h2 className="text-lg font-light">a software craftsman.</h2>
        </div>

        <div className="flex gap-3 text-2xl">
          <a href="https://github.com/Xavier-IV" target="_blank">
            <i className="lni lni-github-original"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/zafranudin-zafrin"
            target="_blank"
          >
            <i className="lni lni-linkedin-original"></i>
          </a>
          <a href="https://www.facebook.com/hobielektronik.101" target="_blank">
            <i className="lni lni-facebook-original"></i>
          </a>
          <a href="https://www.youtube.com/c/ZafranudinZafrin" target="_blank">
            <i className="lni lni-youtube"></i>
          </a>
          <a href="https://www.youtube.com/c/ZafranudinZafrin" target="_blank">
            <i className="lni lni-itch"></i>
          </a>
        </div>

        <FancySeparator />

        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-semibold">About This Guy</h1>
          <p>Malaysian. Software Engineer in Germany.</p>
          <div className="flex flex-wrap gap-1 justify-center">
            <span className="chip sm border-yellow-300">NodeJS</span>
            <span className="chip sm border-rose-500">Ruby</span>
            <span className="chip sm border-orange-400">AWS</span>
            <span className="chip sm border-blue-500">Typescript</span>
            <span className="chip sm border-purple-500">Terraform</span>
            <span className="chip sm border-blue-600">All Stack</span>
          </div>

          <div className="flex flex-col gap-4 max-w-2xl items-center text-center">
            <div className="flex flex-wrap items-center gap-4 justify-center">
              <h2>Klarna Bank AB, Germany (current)</h2>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm justify-center">
              <h2>Carsome Sdn Bhd, Malaysia</h2>
              <h2>Innity Sdn Bhd, Malaysia</h2>
              <h2>Compwnd IT Solutions, Malaysia</h2>
            </div>
          </div>
        </div>

        <FancySeparator />

        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-semibold">Open Source Projects</h1>
          <p>
            I engage with my local Malaysian tech communities, and enjoy
            building open source projects.
          </p>
          <a
            href="https://github.com/Xavier-IV"
            target="_blank"
            className="text-4xl"
          >
            <i className="lni lni-github-original"></i>
          </a>

          <div className="flex gap-2 items-center justify-center max-w-2xl flex-wrap">
            <a
              href="https://github.com/Xavier-IV/windclutter"
              target="_blank"
              className="border rounded-md px-4 py-2 w-fit hover:bg-rose-600 hover:border-transparent"
            >
              Windclutter (Ruby)
            </a>

            <a
              href="https://github.com/Xavier-IV/regeular_io"
              target="_blank"
              className="border rounded-md px-4 py-2 w-fit hover:bg-rose-600 hover:border-transparent"
            >
              Regeular.io (Ruby on Rails)
            </a>
            <a
              href="https://github.com/Xavier-IV/regeular_io.terraform"
              target="_blank"
              className="border rounded-md px-4 py-2 w-fit hover:bg-rose-600 hover:border-transparent"
            >
              Regeular.io Infra (Ruby/Terraform)
            </a>
            <a
              href="https://github.com/Xavier-IV/dev.zafranudin.arduino.toll-system"
              target="_blank"
              className="border rounded-md px-4 py-2 w-fit hover:bg-rose-600 hover:border-transparent"
            >
              Arduino Toll (C++)
            </a>
          </div>

          <div className="my-10">
            <div className="flex flex-col my-4 gap-2">
              <h3 className="text-lg">Mini Series</h3>
              <h4>Collection of mini-projects I created.</h4>
            </div>
            <div className="flex gap-2 items-center justify-center">
              <a
                href="https://mini-seo.vercel.app/"
                target="_blank"
                className="border rounded-md px-4 py-2 w-fit hover:bg-rose-600 hover:border-transparent"
              >
                Mini SEO
              </a>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col my-4 gap-2 max-w-2xl items-center">
              <h3 className="text-lg">Game Development</h3>
              <p>
                Currently building open-source game, feel free to give it a try
                on the web browser. Made with Godot Engine.
              </p>
              <SoftwareDevBadge />
            </div>
          </div>
        </div>

        <FancySeparator />

        <div className="flex flex-col items-center gap-6 text-center text-sm">
          <p>
            Built with{" "}
            <a
              href="https://astro.build/"
              target="_blank"
              className="text-rose-500"
            >
              AstroJS
            </a>
            . Styled with{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-rose-500"
            >
              TailwindCSS
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
