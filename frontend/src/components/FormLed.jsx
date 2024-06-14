import { useState } from "react"
import { FaQuestionCircle } from "react-icons/fa";

function FormLed({handleSelectChange,data,diodo}) {
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
              <label htmlFor="capsula" className=" flex items-center text-lg font-medium" title="Este es el valor de la corriente maxima">Cápsula de diodo<FaQuestionCircle className={ `${open?"text-blue":"text-stone-300"} ml-3 hover:cursor-pointer`} onClick={handleOpen}/></label>
              <div className={`${open?"absolute":"hidden"} bg-back p-2 rounded-md top-7 w-[150px] right-2 text-center z-10`}>
                <p className="text-white">Es el exterior que recubre el diodo</p>
              </div>
              <select id="capsula" onChange={handleSelectChange} className=" bg-gray-100 rounded-md px-4 py-2">
                <option value="">-</option>
              {
                [...new Set(data.map(item => item.capsula))].map((capsula, index) =>
                  <option value={capsula} key={index}>{capsula} </option>
                )
              }
              </select>
            </div>
            <div className="relative flex flex-col gap-3 ">
                <label htmlFor="color" className=" flex items-center text-lg font-medium" >Color de diodo </label>
                <select id="color" onChange={handleSelectChange} className=" bg-gray-100 rounded-md px-4 py-2">
                  <option value="">-</option>
                  {
                    diodo.capsula === "Tintada" ?
                      data
                        .filter(item => item.capsula === "Tintada")
                        .reduce((unique, item) => {
                          return unique.includes(item.color) ? unique : [...unique, item.color];
                        }, [])
                        .map((color, index) => (
                          <option value={color} key={index}>{color}</option>
                        ))
                      : null
                  }
                  {
                    diodo.capsula === "Transparente" ?
                      data
                        .filter(item => item.capsula === "Transparente")
                        .reduce((unique, item) => {
                          return unique.includes(item.color) ? unique : [...unique, item.color];
                        }, [])
                        .map((color, index) => (
                          <option value={color} key={index}>{color}</option>
                        ))
                      : null
                  }
                </select>
            </div>
            <div className="flex flex-col gap-3 relative">
              <label htmlFor="intensidad_lum" className=" flex items-center text-lg font-medium" title="Este es el valor de la corriente maxima">Intensidad luminosa<FaQuestionCircle className={ `${open2?"text-blue":"text-stone-300"} ml-3 hover:cursor-pointer`} onClick={handleOpen2}/></label>
              <div className={`${open2?"absolute":"hidden"} bg-back p-2 rounded-md top-7 w-[150px] right-2 text-center z-10`}>
                <p className="text-white">La luz que se emite bajo condiciones normales, se puede usar un fotómetro</p>
              </div>
              <select id="intensidad_lum" onChange={handleSelectChange} className=" bg-gray-100 rounded-md px-4 py-2">
                <option value="">-</option>
                { diodo.capsula == "Tintada" && diodo.color !== " " ?
                    data.filter(item => item.capsula === diodo.capsula && item.color == diodo.color ).map((item, index) => (
                      <option value={item.intensidad_lum} key={index}>{item.intensidad_lum} mcd</option>
                    )) : null
                }
                { diodo.capsula == "Transparente" && diodo.color !== " " ?
                    data.filter(item => item.capsula === diodo.capsula && item.color == diodo.color).map((item, index) => (
                      <option value={item.intensidad_lum} key={index}>{item.intensidad_lum} mcd</option>
                    )) : null
                }
              </select>
            </div>
            
    </>
  )
}

export default FormLed