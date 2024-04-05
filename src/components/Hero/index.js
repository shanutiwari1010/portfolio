import { TypeAnimation } from "react-type-animation";
import Button from '../Button/index.jsx'

function Hero() {
  return (
    <div>
      <h6>👋, My name is Shanu</h6>
      <h1>
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
      <p>Based in Indore, India.</p>
      <Button text="Let's Start" path="contact"/>
    </div>
  );
}

export default Hero;
