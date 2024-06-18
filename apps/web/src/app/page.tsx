import {
  RegularFacebookOriginal,
  RegularGithubOriginal,
  RegularLinkedinOriginal,
  RegularYoutube,
} from "@repo/ui/lineicons";
import { Button, Image, Tooltip } from "@repo/ui/nextui";
import CardList from "./CardList";

const clouds = [
  { name: "AWS", icon: "/icons/icon_aws.svg" },
  { name: "GCP", icon: "/icons/icon_gcp.svg" },
  { name: "Vercel", icon: "/icons/icon_vercel.svg" },
  { name: "Docker", icon: "/icons/icon_docker.svg" },
  { name: "Terraform", icon: "/icons/icon_terraform.svg" },
  { name: "Cloudflare", icon: "icons/icon_cloudflare.svg" },
];

const frontends = [
  { name: "React", icon: "/icons/icon_react.svg" },
  { name: "Tailwind", icon: "/icons/icon_tailwind.svg" },
  { name: "Vue", icon: "/icons/icon_vue.svg" },
  { name: "Angular", icon: "/icons/icon_angular.svg" },
  { name: "NextJS", icon: "/icons/icon_nextjs.svg" },
  { name: "NuxtJS", icon: "/icons/icon_nuxtjs.svg" },
];
const backends = [
  { name: "NestJS", icon: "/icons/icon_nestjs.svg" },
  { name: "Express", icon: "/icons/icon_express.svg" },
  { name: "Ruby on Rails", icon: "/icons/icon_rails.svg" },
  { name: "GraphQL", icon: "/icons/icon_graphql.svg" },
  { name: "Kafka", icon: "/icons/icon_kafka.svg" },
];
const languages = [
  { name: "Javascript", icon: "/icons/icon_javascript.svg" },
  { name: "Typescript", icon: "/icons/icon_typescript.svg" },
  { name: "Python", icon: "/icons/icon_python.svg" },
  { name: "Ruby", icon: "/icons/icon_ruby.svg" },
  { name: "C++", icon: "/icons/icon_cplusplus.svg" },
];
const databases = [
  { name: "MySQL", icon: "/icons/icon_mysql.svg" },
  { name: "PostgreSQL", icon: "/icons/icon_postgresql.svg" },
  { name: "MongoDB", icon: "/icons/icon_mongodb.svg" },
  { name: "Redis", icon: "/icons/icon_redis.svg" },
];

export default function Home() {
  return (
    <div className="dark h-screen overflow-y-scroll flex flex-col pt-40">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-4xl md:text-7xl">Zafranudin Zafrin</h1>
        <h2 className="text-lg font-light">a software craftsman.</h2>
      </div>
      <div className="flex flex-col items-center gap-6 px-4 md:px-10 pt-20 pb-20 bg-gradient-to-t from-zinc-800 from-0% via-black via-30% w-full border-b-2 border-b-zinc-500">
        <div className="flex flex-col gap-10 text-2xl">
          <Button size="lg" variant="solid" className="text-white fill-zinc-50">
            Connect <RegularLinkedinOriginal className="text-lg " />
          </Button>

          <div className="fill-zinc-100 flex gap-4 items-center justify-center">
            <a
              href="https://github.com/Xavier-IV"
              className="fill-zinc-100"
              target="_blank"
            >
              <RegularGithubOriginal />
            </a>
            <a
              href="https://www.facebook.com/hobielektronik.101"
              target="_blank"
            >
              <RegularFacebookOriginal />
            </a>
            <a
              href="https://www.youtube.com/c/ZafranudinZafrin"
              target="_blank"
            >
              <RegularYoutube />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center mt-20">
          <h2 className="text-3xl">
            Recent accomplishment?{" "}
            <span className="text-zinc-600">
              From startup to established bank industry.
            </span>
          </h2>
        </div>
        <div className="w-full max-w-7xl mx-auto">
          <CardList />
        </div>
      </div>
      <div className="mx-auto mt-10 px-4 md:px-10 flex flex-col text-center gap-10 items-center justify-center w-full border-b-2 border-b-zinc-500">
        <div className="mt-10 flex flex-col gap-10">
          <h2 className="text-3xl font-semibold">Technical Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Cloud &amp; Deployment</h3>
              <p>{clouds.map((cloud) => cloud.name).join(", ")}</p>
              <div className="flex gap-2 items-center justify-center fill-white">
                {clouds.map((cloud) => (
                  <div className="bg-white rounded-md">
                    <Tooltip content={cloud.name} className="bg-zinc-800">
                      <Image
                        src={cloud.icon}
                        alt="GCP Logo"
                        className="w-10 p-2"
                      />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Frontend Technologies</h3>
              <p>{frontends.map((frontend) => frontend.name).join(", ")}</p>
              <div className="flex gap-2 items-center justify-center fill-white">
                {frontends.map((frontend) => (
                  <div className="bg-white rounded-md">
                    <Tooltip content={frontend.name} className="bg-zinc-800">
                      <Image
                        src={frontend.icon}
                        alt="GCP Logo"
                        className="w-10 p-2"
                      />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Backend Technologies</h3>
              <p>{backends.map((backend) => backend.name).join(", ")}</p>
              <div className="flex gap-2 items-center justify-center fill-white">
                {backends.map((backend) => (
                  <div className="bg-white rounded-md">
                    <Tooltip content={backend.name} className="bg-zinc-800">
                      <Image
                        src={backend.icon}
                        alt="GCP Logo"
                        className="w-10 p-2"
                      />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl">Programming Languages</h3>
              <p>{languages.map((language) => language.name).join(", ")}</p>
              <div className="flex gap-2 items-center justify-center fill-white">
                {languages.map((language) => (
                  <div className="bg-white rounded-md">
                    <Tooltip content={language.name} className="bg-zinc-800">
                      <Image
                        src={language.icon}
                        alt="GCP Logo"
                        className="w-10 p-2"
                      />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
              <h3 className="text-xl">Database</h3>
              <p>{databases.map((database) => database.name).join(", ")}</p>
              <div className="flex gap-2 items-center justify-center fill-white">
                {databases.map((database) => (
                  <div className="bg-white rounded-md">
                    <Tooltip content={database.name} className="bg-zinc-800">
                      <Image
                        src={database.icon}
                        alt="GCP Logo"
                        className="w-10 p-2"
                      />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20"></div>
        </div>
      </div>
    </div>
  );
}
