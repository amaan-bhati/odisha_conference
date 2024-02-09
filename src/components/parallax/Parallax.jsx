import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg , #ffc176,  #fcd7ab)"
            : "linear-gradient(180deg, #ffc176,  #fcd7ab)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.h1 style={{ y: yText, fontFamily: "Poppins" }}>
          {type === "" ? "ABOUT" : "TNLC 2024"}
        </motion.h1>
        <motion.p
          style={{
            y: yText,
            fontFamily: "Poppins",
            maxWidth: "50%",
          }}
        >
          Global congregation where education meets action, hosted in the heart
          of Odisha, India. This year, we invite you to immerse yourself in a
          transformative experience in Bhubaneswar, a city where ancient art and
          culture breathe life into our contemporary
        </motion.p>
      </div>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
