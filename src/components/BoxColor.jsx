import { useEffect, useRef, useState } from "react";

function BoxColor ({color, value}) {
  const [text, setText] = useState('')
  const boxRef = useRef(null)

  const changeColor = (background, textColor) => {
    boxRef.current.style.backgroundColor = background;
    boxRef.current.style.color = textColor;
    boxRef.current.style.borderColor = color;
  }

  useEffect(() => {
    changeColor('transparent', color)
    if(value === '' || !value) setText("I'm not a color")
    else if(value === color) {
      setText(`Yes, I'm ${value} color`)
      changeColor(color, 'black')
    }
    else setText(`I'm not a ${value} color`)
  }, [value])

  return (
    <>
      <div ref={boxRef} className={`boxColor ${color}`}>{text}</div>
    </> 
  )
}
export default BoxColor;  
