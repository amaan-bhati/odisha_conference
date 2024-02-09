import { useRef, useState } from "react";
// import Modal from "../modal/Modal";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import { FaCircleInfo } from "react-icons/fa6";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

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
  const [openModalID, setOpenModalID] = useState(1);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const ref = useRef();

  // const isInView = useInView(ref, { margin: "-100px" });

  const data = [
    {
      name: "Historic Injustice",
      fullName:
        "Addressing Historic Institutional Injustices and Harms to Repair and Heal",
      icon: "/icons/historic-injustice.png",
      content: [
        "In what ways have certain historical practices by universities caused harm in their communities and societies? In what ways have universities publicly acknowledged their historic role in their societies?",
        "In what ways are universities addressing historical injustices? How are universities contributing to create positive impacts in their communities and taking steps to repair harm?",
      ],
      id: 1,
    },
    {
      name: "Global Leaders",
      fullName:
        "Nurturing the Next Generation of Global Leaders and Engaged Scholars",
      icon: "/icons/global-leader.png",
      content: [
        "How can we nurture the development of intercultural competencies and prepare young people for active global citizenship?",
        "Which theories and capabilities are foundational to understanding and achieving equitable and inclusive societies?",
        "What innovative pedagogies are effective in preparing young people to operate effectively in highly uncertain and conflicted situations?",
        "How are universities supporting the use of evidence for public decision-making in local communities and higher levels of governance?",
      ],
      id: 2,
    },
    {
      name: "Fosturing Solutions",
      fullName:
        "Fostering Local Solutions and Inclusive Networks for Global Change",
      icon: "/icons/fosturing-solutions.png",
      content: [
        "How are universities fostering constructive community engagement and deliberation in a global context of increasing polarization, social conflict and decreasing civility?",
        "How can university networks become more responsive to community needs and promote continuous collaboration and knowledge co-creation with communities?",
        "How can universities redefine their role as civic actors and contribute to achieving increased higher education enrolment among refugees?",
        "How have universities engaged with each other to teach civic engagement internationally and across institutions?",
      ],
      id: 3,
    },
    {
      name: "Harnessing Technologies",
      fullName:
        "Harnessing Technology for Equitable Futures and Inclusive Progress",
      icon: "/icons/harnessing-technologies.png",
      content: [
        "How might universities use technology to adapt to a rapidly changing world to increase accessibility and promote diverse and creative ways of knowing?",
        "How can universities ethically integrate artificial intelligence into education while increasing access and inclusivity and supporting student learning and development?",
        "In what ways might universities equip students with the knowledge, resources, and skills needed to meet evolving technological landscapes and prepare them for the future?",
      ],
      id: 4,
    },
    {
      name: "Stories",
      fullName:
        "Sharing Stories of University Transformation and Collective Action",
      icon: "/icons/stories.png",
      content: [
        "How are universities - individually and collectively - engaging with pressing challenges (climate change, war and conflict, public health emergencies, migration, and displacement)?",
        "How can university leaders take risks and harness university resources? What innovative approaches and initiatives for engagement are contributing to more equitable and inclusive societies?",
        "How might universities mobilize as frontline responders in their communities and regions?",
      ],
      id: 5,
    },
  ];

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
          Each sub-theme is designed to provoke thought, encourage
          collaboration,
          <br /> and identify actionable steps towards realizing our shared
          vision for the future.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>SubThemes</motion.b> that
            reflect the need for
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>university-led</motion.b>{" "}
            transformation
          </h1>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {data.map((d, i) => {
          return (
            <motion.div
              key={i}
              className="box"
              whileHover={{ background: "lightgray", color: "black" }}
            >
              <img src={d.icon} />
              <h2>{d.name}</h2>

              <FaCircleInfo
                onClick={() => {
                  onOpenModal();
                  setOpenModalID(d.id);
                }}
                style={{
                  cursor: "pointer",
                }}
              />
            </motion.div>
          );
        })}
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          styles={{
            modal: {
              borderRadius: "10px",
              padding: "20px",
              maxWidth: "80%", // Set maximum width for larger screens
              width: "100%", // Set width to 100% for smaller screens
              background: "linear-gradient(180deg, #ffc176, #fcd7ab)",
              color: "black",
              fontFamily: "Poppins",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.25rem",
            }}
          >
            <div>
              <img
                src={data.find((d) => d.id === openModalID).icon}
                alt="icon"
              />
            </div>
            <h2>{data.find((d) => d.id === openModalID).fullName}</h2>

            <ul
              style={{
                padding: ".8rem",
                fontSize: "1.25rem",
              }}
            >
              {data
                .find((d) => d.id === openModalID)
                .content.map((c, i) => {
                  return (
                    <li
                      style={{
                        marginBottom: ".6rem",
                      }}
                      key={i}
                    >
                      {c}
                    </li>
                  );
                })}
            </ul>
          </div>
        </Modal>
      </motion.div>
    </motion.div>
  );
};

export default Services;
