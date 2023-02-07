const CarrouselItem = (props) => {
  return(
      <div className={"CarouselItem"}>
        <div className={"CarouselLeft"}>
          <img src={props.carouselImg} alt="First slide" className={"CarouselImg"}/>
        </div>
        <div className={"CarouselRight"}>
          <p className={"CarouseDesc"}>{props.carouselDesc}</p>
        </div>
      </div>
  )
}; export default CarrouselItem;