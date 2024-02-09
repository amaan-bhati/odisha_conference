import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "TNLC2024",
    img: "/A.png",
    desc: "The TNLC2024 stands at the crossroads of history and innovation, hosted in Bhubaneswar, the 'temple city', by KIIT and KISS — institutions renowned for their groundbreaking model of civic engagement. This year, we delve into how universities can act as catalysts for change, fostering global citizenship and building networks that transcend traditional boundaries. Together, we'll explore the roles of universities in addressing historic injustices, transforming to meet contemporary challenges, and nurturing the next generation of leaders equipped to forge inclusive futures.",
    info: "Know More",
    link: "https://talloiresnetwork.tufts.edu/tnlc2024-india/",
  },
  {
    id: 2,
    title: "KIIT",
    img: "/kiit-img.jpg",
    desc: "The Kalinga Institute of Industrial Technology (KIIT) stands as a beacon of innovation and excellence in higher education. Located in Bhubaneswar, Odisha, KIIT has carved a niche for itself as a premier university that offers a wide spectrum of courses across various disciplines. Renowned for its dynamic curriculum that blends academic rigour with practical experience, KIIT fosters an environment where students are prepared to meet the challenges of the modern world. Its commitment to societal development is exemplified through its symbiotic relationship with KISS, demonstrating a unique model of university-led social change.",
    info: "Know More",
    link: "https://kiit.ac.in/",
  },
  {
    id: 3,
    title: "KISS",
    img: "/kiss-img.jpg",
    desc: "The Kalinga Institute of Social Sciences (KISS) is a transformative educational institution that provides free education, healthcare, and vocational training to over 40,000 indigenous children. Situated in Bhubaneswar, Odisha, KISS is not just an institution but a movement that seeks to eradicate poverty through education, empowering the marginalized sections of society. Its holistic approach to education, focusing on the all-round development of its students, has been recognized globally as a model of inclusive education and sustainable development.",
    info: "Know More",
    link: "https://kiss.ac.in/",
  },
  {
    id: 4,
    title: "Founder KIIT & KISS",
    img: "/founder.jpg",
    desc: "Dr. Achyuta Samanta is a visionary educator and philanthropist, whose life's work has been dedicated to eradicating poverty through education. As the founder of both KIIT and KISS, Dr. Samanta has revolutionized the landscape of higher education and social entrepreneurship in India. His journey from humble beginnings to establishing one of the most successful models of integrated social and educational development is a testament to his unwavering commitment to societal upliftment. Dr. Samanta's contributions have been acknowledged worldwide, making him a respected figure in the realms of education and social change.",
    info: "Know More",
    link: "https://achyutasamanta.com/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2
              style={{
                fontFamily: "Poppins",
              }}
            >
              {item.title}
            </h2>
            <p>{item.desc}</p>
            <a href={item.link}>
              <button>{item.info}</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div
      className="portfolio"
      ref={ref}
      style={{
        backgroundImage: "url(/about-bg.png)",
      }}
    >
      <div
        className="progress"
        style={{
          zIndex: 99,
        }}
      >
        <h1>About</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
