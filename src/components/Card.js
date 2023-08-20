import { TitleText } from "./MainText"

export const Card = (props) => {
  return (
    <div className="mb-5">
      <img src={props.cardImg} alt="" className="object-cover w-full h-[23vh] md:h-[20vh] rounded-2xl"></img>
      <div className="px-2 md:px-5">
        <TitleText text3={props.cardTitle} />
        <p className="text-sm">{props.cardText}</p>
      </div>
    </div>
  )
}