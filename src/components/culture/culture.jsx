import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Culture = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("",{
        body: {}
      })
  
      const data = res.json()
  
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <motion.div
      ref={ref}
      className="culture"
      variants={variants}
      initial="initial"
      whileInView="animate"
      style={{
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.4rem",
        marginTop: "2.4rem"
      }}
    >
    <h2 >Explore Odisha</h2>
    <iframe width={500*1.778} height="500" src="https://www.youtube.com/embed/HSzlmvwtPsQ?si=8TqA7zRsphSxMV-2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
    <p style={{
        maxWidth: "888.5px",
        textAlign: "center"
    }}>
    Embrace the visual odyssey that takes you on a profound journey through the vibrant art, rich culture, and transformative education landscape of Bhubaneswar, home to the esteemed KIIT and KISS.
    </p>
    </motion.div>

  );
};

export default Culture;
