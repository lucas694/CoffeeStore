const ServicesCard = (props) =>{
  return(
    <div className={"ServicesCardContainer"}>
      <div className={"ServicesCardImgDiv"}>
        <img src={props.img} alt={props.name} className={"ServicesCardImg"}/>
      </div>
      <div className={"ServicesCardDesc"}>
        <p className={"ServicesCardName"}>{props.name}</p>
      </div>
    </div>
  )
};export default ServicesCard;