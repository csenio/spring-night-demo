import React from "react";
import Circle from "./Circle";
import { animated, useSpring } from "react-spring";
import { useGesture } from "react-with-gesture";

const AnimatedCircle = animated(Circle);

const Gesture = props => {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));
  const bind = useGesture(({ down, delta }) => {
    set({ xy: down ? delta : [0, 0] });
  });

  return (
    <AnimatedCircle
      {...bind()}
      style={{
        transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    />
  );
};

export default Gesture;
