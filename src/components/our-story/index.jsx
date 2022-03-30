import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";
// import One from "../../assets/images/1.jpg";
// import Two from "../../assets/images/2.jpg";
// import Three from "../../assets/images/3.jpg";
// import Four from "../../assets/images/4.jpg";
// import Five from "../../assets/images/5.jpg";
// import Six from "../../assets/images/6.jpg";
// import Seven from "../../assets/images/7.jpg";
// import Eight from "../../assets/images/8.jpg";
// import Nine from "../../assets/images/9.jpg";
// import Ten from "../../assets/images/10.jpg";
// import Eleven from "../../assets/images/11.jpg";
// import Twelve from "../../assets/images/12.jpg";
// import Thirteen from "../../assets/images/13.jpg";
// import Fourteen from "../../assets/images/14.jpg";
// import Fifteen from "../../assets/images/15.jpg";

const cards = [
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616517/manan-shaadi/15_fd0k8r.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616516/manan-shaadi/14_jdmgxk.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616517/manan-shaadi/13_t8ld7r.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616518/manan-shaadi/12_qbqtil.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616516/manan-shaadi/11_u3tkdd.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616516/manan-shaadi/10_fp1lcl.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616516/manan-shaadi/9_ssrbi7.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616517/manan-shaadi/8_wupy6a.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616515/manan-shaadi/7_ljjycg.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616515/manan-shaadi/6_pmxaln.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616514/manan-shaadi/5_ezuveg.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616514/manan-shaadi/4_cgzlqd.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616515/manan-shaadi/3_be0say.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616515/manan-shaadi/2_qeszfu.jpg",
  "https://res.cloudinary.com/dkksvxoms/image/upload/v1648616514/manan-shaadi/1_gpok19.jpg",
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (i) => ({ x: 0, rot: 0, scale: 1.5, y: 1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(3000px) rotateX(10deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above

  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <>
      <animated.div
        key={i}
        style={{
          transform: interpolate(
            [x, y],
            (x, y) => `translate3d(${x}px,${y}px,0)`
          ),
          position: "absolute",
          width: "100vw",
          height: "90vh",
          willChange: "transform",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
        <animated.div
          {...bind(i)}
          style={{
            transform: interpolate([rot, scale], trans),
            backgroundImage: `url(${cards[i]})`,
            backgroundColor: "white",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            // backgroundRosition: "center center",
            width: "45vh",
            maxWidth: "300px",
            height: "70vh",
            maxHeight: "570px",
            willChange: "transform",
            borderRadius: "10px",
            boxShadow: "0 12.5px 100px -10px rgba(50, 50, 73, 0.4)",
          }}
        />
      </animated.div>
    </>
  ));
};

export default Deck;
