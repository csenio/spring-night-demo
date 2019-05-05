import React from "react";
import { Circle, Background } from "./styles";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-with-gesture";

const AnimatedCircle = animated(Circle);

const Gesture = props => {
  const [{ xy }, set] = useSpring(() => ({ xy: 0 }));
  const bind = useGesture(({ down, delta }) => {
    set({ xy: down ? delta[0] : 0 });
  });

  const AnimatedBackground = animated(Background);

  return (
    <>
      <AnimatedBackground
        style={{
          background: xy.interpolate({
            range: [0, 400],
            output: [`red`, `green`]
          })
        }}
      />
      <AnimatedCircle
        {...bind()}
        style={{
          transform: xy.interpolate((x, y) => `translate3d(${x}px,0px,0)`)
        }}
      />
    </>
  );
};

export default Gesture;
