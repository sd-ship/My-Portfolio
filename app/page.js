import Link from "next/link";
import BlurText from "./components/reactbits";

export default function Home() {
  return (
    <>
      <div className="flex gap-20 mt-20 flex-col md:flex-row justify-center items-center p-4">
        {/* Image */}
        <img
          className="bg-amber-950 h-40 w-40 md:h-110 md:w-110 cursor-pointer m-6 hover:scale-110 transition-transform duration-300 ease-in-out rounded-full object-cover hover:border-4 hover:border-amber-400"
          src="MYself.jpg"
          alt="profile"
        />

        {/* Text Section */}
        <div className="text-white p-4 max-w-xl text-center md:text-left">
          {/* BlurText + Title */}
          <BlurText
            text="Hello, It's Me Dhiraj Birajdar And I'm"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl md:text-6xl"
          />
          <div className="text-3xl md:text-6xl typing-container text-blue-600 mt-2">
            Web Developer
          </div>

          {/* Paragraph */}
          <p className="mt-6 text-sm md:text-base text-gray-300">
            A frontend developer passionate about crafting clean, responsive, and interactive web experiences.
            I specialize in technologies like Next.js, React, and Tailwind CSS, bringing modern designs to life with smooth animations and optimized performance.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-15 mt-6">
            <Link href="https://www.instagram.com/dhiraj_birajdar_77/">
              <img
                className="w-10 h-10 cursor-pointer hover:bg-amber-900 hover:invert rounded-full"
                src="insta.svg"
                alt="Instagram"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/dhiraj-birajdar-b920302aa/">
              <img
                className="w-10 h-10 cursor-pointer hover:bg-black hover:invert rounded-full"
                src="Linkedin.svg"
                alt="LinkedIn"
              />
            </Link>
            <Link href="https://github.com/dashboard">
              <img
                className="w-10 h-10 cursor-pointer hover:bg-amber-900 hover:invert rounded-full"
                src="githubg.svg"
                alt="GitHub"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}