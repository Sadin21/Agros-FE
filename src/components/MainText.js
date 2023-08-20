export const MainText = (props) => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold">{props.text1}</h1>
  )
}

export const SubText = (props) => {
  return (
    <h1 className="text-xl md:text3xl font-bold mb-4 md:mb-8">{props.text2}</h1>
  )
}

export const TitleText = (props) => {
  return (
    <h1 className="text-xl md:text2xl font-bold my-3 md:mt-6 md:mb-3">{props.text3}</h1>
  )
}