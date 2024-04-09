import { TypeAnimation } from "react-type-animation";
import Button from "../Button/index.jsx";

function Hero() {
  return (
    <div className="h-screen flex items-center justify-between mb-0">
      <div className="relative -top-20">
        <h6 className="text-black font-[500] uppercase">
          👋, My name is Shanu
        </h6>
        <h1 className="text-black font-[700} text-4xl lg:text-[40px] pt-10">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'm a Developer ",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "I'm a Designer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <p className="text-gray-600 pt-5">Based in Indore, India.</p>
        <Button text="Let's Start" path="contact" />
      </div>
      <div>
        <img></img>
      </div>
    </div>
  );
}

export default Hero;
