import { FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";
function FormRec({handleSelectChange,data,diodo}) {
  const [open,setOpen] = useState(false)
  const [open2,setOpen2] = useState(false)

  const handleOpen = () =>{
    setOpen(!open) 
  }

  const handleOpen2 = () => {
    setOpen2(!open2)
  }
  return (
    <>
            <div className="flex flex-col gap-3 relative">
              <label htmlFor="corriente_max" className=" flex items-center text-lg font-medium" title="Este es el valor de la corriente maxima">Corriente Máxima (I<sub>o</sub>)<FaQuestionCircle className={ `${open?"text-blue":"text-stone-300"} ml-3 hover:cursor-pointer`} onClick={handleOpen}/></label>
              <div className={`${open?"absolute":"hidden"} bg-back p-2 rounded-md top-7 w-[150px] right-2 text-center`}>
                <p className="text-white">Corriente rectificada media con polarización directa, medición con ayuda de Reostato </p>
              </div>
              <select id="corriente_max" onChange={handleSelectChange} className=" bg-gray-100 rounded-md px-4 py-2">
                <option value="">- A</option>
              {
                [...new Set(data.map(item => item.corriente_max))].map((corriente_max, index) =>
                  <option value={corriente_max} key={index}>{corriente_max} A </option>
                )
              }
              </select>
            </div>
            <div className="relative flex flex-col gap-3 ">
                <label htmlFor="v_inversa" className=" flex items-center text-lg font-medium" >Voltaje en inversa (V<sub>rrm</sub>) <FaQuestionCircle className={ `${open2?"text-blue":"text-stone-300"} ml-3 hover:cursor-pointer`} onClick={handleOpen2}/></label>
                <div className={`${open2?"absolute":"hidden"} bg-back p-2 rounded-md top-7 w-[150px] right-2 text-center`}>
                  <p className="text-white">Voltaje en inverso máximo que el diodo puede soportar de manera segura</p>
                 </div>
                <select id="v_inversa" onChange={handleSelectChange} className=" bg-gray-100 rounded-md px-4 py-2">
                  <option value="">- V</option>
                  { diodo.corriente_max == "1"?
                    data.filter(item => item.corriente_max === 1).map((item, index) => (
                      <option value={item.v_inversa} key={index}>{item.v_inversa} V</option>
                    )) : null
                  }
                  { diodo.corriente_max == "3"?
                    data.filter(item => item.corriente_max === 3).map((item, index) => (
                      <option value={item.v_inversa} key={index}>{item.v_inversa} V</option>
                    )) : null
                  }
                </select>
            </div>
    </>
  )
}

export default FormRec