
function Button({bgColor, textColor, text}) {
  return (
    <button className={`bg-${bgColor} font-bold text-${textColor} py-3 px-6`} style={{backgroundColor:bgColor}}>{text}</button>
  )
}

Button.defaultProps = {
  bgColor: "#4CAF50",
}
export default Button