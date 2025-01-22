import Typewriter from "typewriter-effect";
import React from "react";

interface TyperProps {
  text: string;
  classNames?: string;
}

const Typer = ({ text, classNames }: TyperProps) => {
  // TODO: Make this hacker esque

  return (
    <div className={classNames}>
      <Typewriter
        options={{
          cursor: "_",
          delay: 50,
          loop: true,

          // autoStart: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString(` ${text}`)
            .pauseFor(5000)
            .start();
        }}
      />
    </div>
  );
};

export default Typer;
