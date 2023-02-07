import "./Recommended.css"
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";
const RecommendedCard = (props) => {
  return(
    <div className={"RecommendedCardContainer"}>
      <div className={"RecommendedCard-Img"}>
        <AiOutlineInfoCircle className={"InfoIcon"}/>
        <img src={props.Img} alt="RecommendedCard" className={"RecommendedCardPhoto"}/>
        <FiShoppingCart className={"ShopIcon"}/>
      </div>
      <div className={"RecommendedCard-Desc"}>
        <p className={"RecommendedName"}>{props.Name}</p>
        <p className={"RecommendedType"}>{props.Type}</p>
      </div>
    </div>
  )
};export default RecommendedCard