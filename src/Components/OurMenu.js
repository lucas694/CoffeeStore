import "./OurMenu.css"
import OurMenuImg from "../assets/PopularMenu/PopularmenuImg.png"
import LiOurMenu from "./LiOurMenu";
import {FiExternalLink} from "react-icons/fi";

const OurMenu = () => {
  return(
    <div className={"OurMenuContainer"}>
      <h1 className={"OurMenuTitle"}>Popular Menu</h1>
      <div className={"OurMenuContent"}>
        <div className={"UlControlMenu"}>
          <ul className={"UlMenu"}>
            <LiOurMenu firstText={"50$"} secondText={"Chocolate"}/>

            <LiOurMenu firstText={"50$"} secondText={"Double Es"}/>

            <LiOurMenu firstText={"50$"} secondText={"Caramel"}/>

            <LiOurMenu firstText={"50$"} secondText={"Doppio"}/>
          </ul>
        </div>

        <img src={OurMenuImg} alt={"OurMenuImg"} className={"OurMenuImg"} />

        <div className={"UlControlMenu"}>
          <ul className={"UlMenu"}>
            <LiOurMenu firstText={"Expresso"} secondText={"50$"}/>

            <LiOurMenu firstText={"Cappuccino"} secondText={"50$"}/>

            <LiOurMenu firstText={"Mocha"} secondText={"50$"}/>

            <LiOurMenu firstText={"Latte"} secondText={"50$"}/>
          </ul>
        </div>
      </div>
      <div className={"MenuLinks"}>
        <FiExternalLink className={"OurMenuLink"}/>
        <span>Our Menu </span>
      </div>
    </div>
  )
};export default OurMenu;