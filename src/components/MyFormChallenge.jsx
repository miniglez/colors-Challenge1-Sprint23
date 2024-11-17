import { useState, useRef, useEffect } from "react";

function MyForm({value, setValue}) {
  const [color, setColor] = useState('')
  const colorRef = useRef(null)

  useEffect(() => {
    colorRef.current.focus()
  }, [])
  
  return (
    <>
      <input 
        type="text"
        placeholder="Chose a color"
        ref={colorRef}
        value={value}
        onChange={() => setValue(colorRef.current.value)}  />
    </>
  );
}

export default MyForm;