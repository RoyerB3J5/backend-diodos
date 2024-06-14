import { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
function FormZener({handleSelectChange,data}) {
  const [open, setOpen] = useState(false)

  const handleOpen = () =>{
    setOpen(!open)
  }

  return (
    <>
            <div className="relative flex flex-col gap-3">
              <label htmlFor="v_zener" className=" flex items-center text-lg font-medium">Voltaje Zener (Vz) <FaQuestionCircle className={ `${open?"text-blue":"text-stone-300"} ml-3 hover:cursor-pointer`} onClick={handleOpen}/></label>
              <div className={`${open?"absolute":"hidden"} bg-back p-2 rounded-md top-7 w-[150px] right-2 text-center`}>
                  <p className="text-white">Voltaje en dirección inversa del diodo </p>
              </div>
              <select id="v_zener" onChange={handleSelectChange} className=" bg-gray-100 rounded-md px-4 py-2">
                <option value="">- V</option>
                {
                data.map((item,index)=>(
                  <option value={item.v_zener} key={index}>{item.v_zener} V</option>
                ))
                }
              </select>
            </div>
    </>
  )
}

export default FormZener