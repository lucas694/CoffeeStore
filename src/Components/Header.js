import "./Header.css"
import HeaderLogo from "../assets/logo.png"
import { BiUser } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import {FaBars} from "react-icons/fa";
import {useState} from "react";

const Header = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <div className={"HeaderContainer"}>
      <div>
        <img src={HeaderLogo} alt="HeaderLogo" className={"HeaderLogo"} />
      </div>
      <div className={"flex items-center"}>
        <div className={"Nav-Funcs"}>
          <BiUser className={"HeaderIcons"}/>
          <FiShoppingCart className={"HeaderIcons"}/>
        </div>
        <ul className={"UlHeader"}>
          <li className={"LiHeader"}>Home</li>
          <li className={"LiHeader"}>Menu</li>
          <li className={"LiHeader"}>Services</li>
          <li className={"LiHeader"}>Product</li>
          <li className={"LiHeader"}>Blog</li>
          <li className={"LiHeader"}>Contact</li>
        </ul>

        <button onClick={toggle} className={"BtnHeader"}>
          <FaBars className={"HeaderIcons"}/>
        </button>
      </div>

    </div>
  )
}; export default Header