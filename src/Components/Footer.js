import "./Footer.css";
import FooterImg from "../assets/FooterImg.png"
import {HiLocationMarker} from "react-icons/hi";
import {IoMdMail} from "react-icons/io";
import {GiSmartphone} from "react-icons/gi";

import {BsLinkedin} from "react-icons/bs";
import {FaPinterestSquare} from "react-icons/fa";
import {RiInstagramFill} from "react-icons/ri";

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className="FooterSocialMedia">
        Social Media :
        <BsLinkedin className={"FooterSocialMediaIcons"}/>
        <FaPinterestSquare className={"FooterSocialMediaIcons"}/>
        <RiInstagramFill className={"FooterSocialMediaIcons"}/>
      </div>
      <div className={"FooterContent"}>
        <div className={"FooterContentLeft"}>
          <img src={FooterImg} alt={"FooterImg"}  className={"FooterImg"}/>
        </div>
        <div className={"FooterContentRight"}>
          <ul className={"UlFooter"}>
            <li className={"LiFooter"}>
              <h1 className={"FooterListTitle"}>About</h1>
            </li>
            <li className={"LiFooter"}>Our Story</li>
            <li className={"LiFooter"}>FAQ</li>
            <li className={"LiFooter"}>Careers</li>
          </ul>

          <ul className={"UlFooter"}>
            <li className={"LiFooter"}>
              <h1 className={"FooterListTitle"}>Costumer Recourses</h1>
            </li>
            <li className={"LiFooter"}>Menu</li>
            <li className={"LiFooter"}>Locations</li>
            <li className={"LiFooter"}>Support</li>
          </ul>

          <ul className={"UlFooter"}>
            <li className={"LiFooter"}>
              <h1 className={"FooterListTitle"}>Services</h1>
            </li>
            <li className={"LiFooter"}>Payment Options</li>
            <li className={"LiFooter"}>Refunds & Exchanges</li>
            <li className={"LiFooter"}>Limitation Of Liability</li>
          </ul>
          <ul className={"UlFooter"}>
            <li className={"LiFooter"}>
              <HiLocationMarker className={"FooterIcons"}/>
              12 Jhon Avenue #35 - New York
            </li>
            <li className={"LiFooter"}>
              <IoMdMail className={"FooterIcons"}/>
              Elizacoffee@Coffee.com
            </li>
            <li className={"LiFooter"}>
              <GiSmartphone className={"FooterIcons"}/>
              Elizacoffee@Coffee.com
            </li>
          </ul>


        </div>
      </div>

    </div>
  )
}; export default Footer;