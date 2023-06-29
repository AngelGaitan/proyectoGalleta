import { useState } from "react"

const Citas = ({cita}) =>{
    const [on, setOn]= useState(false)

    const btnFunct = () => {
        setOn(!on)
    }

return  (
    <>
 <div className="citas">
<button className="btnCitas" onClick={btnFunct}><i class='bx bxs-leaf'></i></button>
<span className={`cita1 ${on ?"cita2": ""}`}>{cita.author}</span>
 </div>
 </>
)
}

export default Citas