import { useEffect, useState } from "react";
import FetchEffect from './FetchEffect'
const Toggle = () => {

    const [toggle, setToggle] = useState(true)

    const toggleBtn = () => {
        setToggle(prevState => !prevState)
    }


  return (
    <div>
       {toggle && <FetchEffect />}
        <button onClick={toggleBtn} className='btn'>toggle</button>
    </div>
  )
}
export default Toggle