import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hello, I'm Kai Zin!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          (Insert some of your very Sigma qualities)
        </p>
        <p>
          (Insert some of your skibidi interest)
        </p>
        <p>
          (insert some of your dreams and goals)
        </p>
      </div>
    </section>
  );
}
