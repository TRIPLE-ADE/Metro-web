
function Button({bgColor, textColor, text}) {
  return (
    <button className={`bg-${bgColor} font-bold text-${textColor} py-3 px-6`} style={{backgroundColor:'color'}}>{text}</button>
  )
}

Button.defaultProp = {
  color: "#4CAF50",
}
export default Button