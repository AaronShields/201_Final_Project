import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Computer Science and Business Administration Major",
          "Junior at the University of Southern California",
          "2022 Software Engineer at Oracle",
          "Scope Software Devloper",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Type;
