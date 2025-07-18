import Link from "next/link";
import BlurText from "./components/reactbits";

export default function Home() {
  return (
    <>
      <div className="flex gap-20 mt-20 flex-col md:flex-row justify-center items-center p-4">
        {/* Image */}
       <div className="relative w-60 h-60 md:w-[28rem] md:h-[28rem] m-6">
  <div className="absolute inset-0 rounded-full bg-gray-200 blur-2xl opacity-60 scale-110 z-0"></div>
  <img
    className="relative z-10 h-full w-full cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out rounded-full object-cover "
    src="MYself.jpg"
    alt="profile"
  />
</div>
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
          <div className="text-3xl textcolors md:text-6xl typing-container text-blue-600 mt-2">
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