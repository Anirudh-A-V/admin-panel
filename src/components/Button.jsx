import React from 'react'

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width, Func }) => {
  return (
    <button
      type="button"
      onClick={Func}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  )
}

export default Button