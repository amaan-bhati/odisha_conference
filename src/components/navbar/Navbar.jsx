import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <img
        style={{
          width: "180px",
          height: "auto",
          objectFit: "contain",
        }}
        src="/A.png"
        alt=""
      />
    </div>
  );
};

export default Navbar;
