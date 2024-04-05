import { TypeAnimation } from "react-type-animation";
import Button from '../Button/index.jsx'

function Hero() {
  return (
    <div className=" pt-52">
      <h6 className="text-black font-[500] uppercase">👋, My name is Shanu</h6>
      <h1 className="text-black font-[700} text-4xl py-10 lg:text-[40px]">
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
      <p className="text-gray-600">Based in Indore, India.</p>
      <Button text="Let's Start" path="contact"/>
    </div>
  );
}

export default Hero;


{/* <h1 class="text-black font-[600] text-[40px] lg:text-[60px] xl:text-[70px] leading-[1] mb-[25px] md:mb-[35px]">I'm a <span id="type-it"><span><div style="display: inline-block;">Develo</div><span style="display: inline-block; transition: opacity 0.5s ease 0s; opacity: 1;">|</span></span></span></h1> */}