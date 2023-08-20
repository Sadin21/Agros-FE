export const InputForm = (props) => {
  return (
    <div className="md:w-1/2">
      <h1 className="font-bold">{props.title}</h1>
      <input
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        name={props.name}
        className=" rounded-lg border-1 border border-gray-400 w-full p-4 mt-4 mb-4 md:mb-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:ring-[#459467]"
        placeholder={props.placeholder}
      />
    </div>
  )
}

export const InputForm2 = (props) => {
  return (
    <div className="md:w-1/2">
      <h1 className="font-bold">{props.title2}</h1>
      <input
        value={props.value2}
        onChange={props.onChange2}
        type={props.type2}
        name={props.name2}
        className=" rounded-lg border-1 border border-gray-400 w-full p-4 mt-4 mb-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:ring-[#459467]"
        placeholder={props.placeholder2}
      />
    </div>
  )
}