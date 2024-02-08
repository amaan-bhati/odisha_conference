import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({setOpen}) => {
  // "Homepage", "About", "Contact", "TLCC2024" ,"Register"
  const items = [{
    name: "Homepage",
    link: "#Homepage"
  },{
    name: "About",
    link: "#Portfolio"
  },{
    name: "Contact",
    link: "#Contact"
  },{
    name: "TNLC2024",
    link: "https://talloiresnetwork.tufts.edu/tnlc2024-india/"
  },{
    name: "Register",
    link: "https://www.givepulse.com/event/412037"
  }];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => {
        return(
      
        <motion.a
          href={`${item.link}`}
          key={item.name}
          target={item.link.split(":")[0]==="https" ? "_blank": "_self"}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item.name}
        </motion.a>
      )})}
    </motion.div>
  );
};

export default Links;
