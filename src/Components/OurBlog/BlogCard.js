import "./BlogCard.css"

const BlogCard = (props) => {
  return(
    <div className={"CardBlogContainer"}>
      <div className={"CardBlogContent"}>
        <h1 className={"CardBlogTitle"}>{props.Title}</h1>
        <p className={"CardBlogDesc"}>{props.Desc}</p>
        <div className={"CardBlogImgs"}>
          <img src={props.Img1} alt={"CoffeCard1"} className={"CardImg"} />
          <img src={props.Img2} alt={"CoffeCard1"} className={"CardImg"}/>
          <img src={props.Img3} alt={"CoffeCard1"} className={"CardImg"}/>
        </div>
      </div>
    </div>
  )
};export default BlogCard;