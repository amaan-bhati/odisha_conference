import { useRef, useState } from "react";
// import Modal from "../modal/Modal";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { FaCircleInfo } from "react-icons/fa6";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  // const [toggleModal, setToggleModal] = useState(false)
  // const handleToggleModal = () => setToggleModal(!toggleModal)
  // const content = "Rough Data"

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);


  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const data = [
    {
      name: "Historic Injustice",
      icon: "/public/icons/historic-injustice.png",
      content: "Historic Injustice"
    },
    {
      name: "Global Leaders",
      icon: "/public/icons/global-leader.png",
      content: "Global Leaders"
    },
    {
      name: "Fosturing Solutions",
      icon: "/public/icons/fosturing-solutions.png",
      content: "Fosturing Solutions"
    },
    {
      name: "Harnessing Technologies",
      icon: "/public/icons/harnessing-technologies.png",
      content: "Harnessing Technologies"
    },
    {
      name: "Stories",
      icon: "/public/icons/stories.png",
      content: "Stories"
    },
  ]

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        Each sub-theme is designed to provoke thought, encourage collaboration,<br />  and identify actionable steps towards realizing our shared vision for the future.
          
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>SubThemes</motion.b> that reflect the need for
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>university-led</motion.b> transformation
          </h1>
          <button>SUBTHEMES</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
      {
        data.map((d,i)=> {
          return (
            <motion.div
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >

              <img 
                src={d.icon}

              />
              <h2>{d.name}</h2>

              <FaCircleInfo style={{
                cursor: "pointer"
              }} />
              
              {/*
              <button onClick={handleToggleModal}>Read More</button>
              <Modal toggle={toggleModal} content={content} />
            */}
            </motion.div> 
          )
        })
      }

       
      </motion.div>
    </motion.div>
  );
};

export default Services;
