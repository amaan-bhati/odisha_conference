import "./hero.scss";
import { motion } from "framer-motion";
import ToggleButton from "../sidebar/toggleButton/ToggleButton"
import Sidebar from "../sidebar/Sidebar"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
        <div>
          <Sidebar />
        </div>
        
        <motion.h1 variants={textVariants}>
          Talloires Network Leaders<br/> Conference (TNLC2024)
          </motion.h1>
          <motion.h2 variants={textVariants}>3-5 December 2024</motion.h2>
          <motion.h3 variants={textVariants}>Organised by</motion.h3>
          <motion.img
          variants={textVariants}
          // animate="scrollButton"
          src="/organisers.png"
          alt=""
        />
        <motion.h3 variants={textVariants}> Global congregation where education meets action, hosted in the heart of Odisha, India. This year, we invite you to immerse yourself in a transformative experience in Bhubaneswar, a city where ancient art and culture breathe life into our contemporary </motion.h3>
        <motion.div variants={textVariants} className="buttons">
        {/* <motion.button variants={textVariants}>
        See the Latest Works
      </motion.button>*/}
              <a href="https://www.givepulse.com/event/412037">
                <motion.button variants={textVariants} >Register Now</motion.button>
              </a>
              </motion.div>
         {/* <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />*/}
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
      Talloires Network Leaders Conference
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt=""
        className="rotatingImage" />
      </div>
    </div>
  );
};

export default Hero;
