import { useEffect, useState } from "react"
import FormRec from "../components/FormRec"
import FormZener from "../components/FormZener"
import PopupDiodo from "../components/PopupDiodo"
import FormSchottky from "../components/FormSchottky"
import FormLed from "../components/FormLed"
import Footer from "./Footer"
function Form() {
  
  const tiposDiodos = {
    rectificador: "Rectificador",
    zener: "Zener",
    schottky: "Schottky",
    led:"Led"
  }
  const [diodo, setDiodo] = useState({
    tipo:""
  })
  const [isLoading, setIsLoading] = useState(true)
  const [data,setData] = useState(null)
  const [filteredData, setFilteredData] = useState({})
  const [open, setOpen] = useState(false)
  
  const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5555'
  useEffect(() => {
    const fetchData = async () => {
      if (!diodo.tipo) {
        setIsLoading(false);
        return};
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}/${diodo.tipo}`);
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchData();
  }, [diodo.tipo]);

  useEffect(() => {
    // Solo intenta filtrar si hay datos y el tipo de diodo está seleccionado
    if (data && diodo.tipo) {
      let filtered = null;
      if ('corriente_max' in diodo) {
        filtered = data.filter(item => item.corriente_max == diodo.corriente_max && item.v_inversa == diodo.v_inversa)
      }
      if ('v_zener' in diodo) {
        filtered = data.filter(item => item.v_zener == diodo.v_zener)
      }
      if ('capsula' in diodo) {
        filtered = data.filter(item => item.capsula == diodo.capsula && item.color == diodo.color && item.intensidad_lum == diodo.intensidad_lum)
      }
      
      setFilteredData(filtered ? filtered[0] : {})
    }
  }, [diodo]);

 
 
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setDiodo(prevDiodo => {
      const newDiodo = { ...prevDiodo, [id]: `${value}` };
      return newDiodo;
    });
  }

  const filterData = (e) =>{
    e.preventDefault()
    setOpen(true)
  }

  const resetStates = () =>{
    setFilteredData({})
    setDiodo({tipo:""})
    setOpen(false)
  }




  return (
    <>
      <section className="flex flex-col justify-center items-center py-9 px-1 min-h-[300px] max-h-[1140px] gap-y-6 mb-10 " id="buscar">
        <h2 className="text-5xl text-blue font-bold text-center">Busca tu <span className="text-back">DIODO</span></h2>
        <div className="h-[2px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue to-transparent my-4"></div>
        <div className={`w-auto border-2 border-blue rounded-xl grid gap-6 gap-x-14 p-7 px-6 md:px-8  justify-center items-center ${diodo.tipo == ''? "grid-cols-1": "grid-cols-1 md:grid-cols-2"}`}>
          
          <div className="flex flex-col gap-5">
            <label htmlFor="tipo" className=" text-lg font-medium">Tipo de diodo</label>
            <select id="tipo" onChange={handleSelectChange} value = {diodo.tipo} className=" bg-gray-100 rounded-md px-4 py-2 focus:outline-none ">
              <option value="">Selecciona el tipo de diodo</option>
              {Object.keys(tiposDiodos).map((key) => (
                <option value={key} key={key}>
                  {tiposDiodos[key]}
                </option>
            ))}
            </select>
          </div>
          {isLoading && diodo.tipo !== "" ? <div>Cargando...</div> : null}
          {diodo.tipo == 'rectificador' && data ?(
            <FormRec handleSelectChange = {handleSelectChange} data ={data} diodo = {diodo}/>
          ): null}
          {diodo.tipo == 'zener' && data ?(
            <FormZener handleSelectChange = {handleSelectChange} data = {data}/>
          ): null}
          {diodo.tipo == 'schottky' && data ?(
            <FormSchottky handleSelectChange = {handleSelectChange} data = {data} diodo = {diodo}/>
          ): null}
          {diodo.tipo == 'led' && data ?(
            <FormLed handleSelectChange = {handleSelectChange} data = {data} diodo = {diodo}/>
          ): null}
        </div>
        <button className="bg-blue px-10 py-2 rounded-xl text-white" onClick={filterData}>
            Buscar
        </button>
        {open && Object.keys(filteredData).length>0 && <PopupDiodo dataDiodo ={filteredData} tipo={diodo.tipo} onClose={resetStates}/> }
      </section>
    </>
    
  )
}

export default Form

