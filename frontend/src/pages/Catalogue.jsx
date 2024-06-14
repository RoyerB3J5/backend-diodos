import { useEffect } from "react"
import { useState } from "react"
import rectificador from '../assets/rectificador.svg'
import zener from '../assets/zener.png'
import schottky from '../assets/schottky.svg'
import led from '../assets/led.svg'
import ledazul from '../assets/ledazul.svg'

function Catalogue() {

  const [diodos,setDiodos] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5555/1234-unt'
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(()=>{
    const fetchData =  async () =>{
      try{
        setIsLoading(true)
        const res = await fetch(`${URL}`)
        const data = await res.json()
        setDiodos(data)
      } catch (error){
        console.log(error)
      } finally {
        setIsLoading(false)
      
      }
    }
    fetchData()
  },[])



  return (
    <>  
      <section className=" pt-40 pb-16 px-14 flex flex-col items-center justify-center gap-8">
        <div className=" flex items-center justify-center gap-x-2 sm:gap-x-8 ">
          <img src={rectificador} alt="Rectificador"  />
          <h2 className="text-2xl text-center font-semibold">Diodos <span className=" text-blue text-[33px] font-semibold">Rectificadores</span> </h2>
          <img src={rectificador} alt="Rectificador" className=" text-blue"  />
          
        </div>
        <div className="h-[2px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue to-transparent my-4"></div>
        <div className="overflow-x-auto w-full flex sm:justify-center items-center">
          <table className="w-full max-w-[1100px] table-auto shadow-lg border-collapse  p-5">
            <thead className="bg-back text-blue">
              <tr>
                <th className="px-4 py-5 border">Código</th>
                <th className="px-4 py-5 border">Corriente Máxima (A)</th>
                <th className="px-4 py-5 border">Voltaje Máximo en Directa (V)</th>
                <th className="px-4 py-5 border">Voltaje en inversa (V)</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-gray-200 bg-gray-50">
              {diodos && diodos.rectificador && diodos.rectificador.map((diodo) => (
                <tr key={diodo.codigo} > 
                  <th className="px-4 py-5 border font-normal">{diodo.codigo}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.corriente_max}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.v_inversa}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.v_directa}</th>
                </tr>
              ))}
            </tbody>

          </table>
          
        </div>
        {isLoading && <div className="text-center">Cargando...</div>}
      </section>

      <section className=" py-16 px-14 flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-8">
          <img src={zener} alt="diodo zener iconos"/>
          <h2 className="text-2xl text-center font-semibold">Diodos <span className="text-blue text-[33px] font-semibold">Zener</span></h2> 
          <div className=" w-16 h-16 hidden sm:flex"></div>    
        </div>
        <div className="h-[2px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue to-transparent my-4 "></div>
        <div className="overflow-x-auto w-full flex sm:justify-center items-center">
          <table className="w-full max-w-[1100px] table-auto shadow-lg border-collapse p-5">
            <thead className="bg-back text-blue">
              <tr>
                <th className="px-4 py-5 border">Código</th>
                <th className="px-4 py-5 border">Voltaje Zener (V)</th>
                <th className="px-4 py-5 border">Corriente Zener (A)</th>
                <th className="px-4 py-5 border hidden sm:flex sm:justify-center sm:items-center">Potencia (W)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-gray-50">
              {diodos && diodos.zener && diodos.zener.map((diodo) => (
                <tr key={diodo.codigo} > 
                  <th className="px-4 py-5 border font-normal">{diodo.codigo}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.v_zener}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.c_zener}</th>
                  <th className="px-4 py-5 border font-normal hidden sm:flex sm:justify-center sm:items-center">{diodo.potencia}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </section>

      <section className="py-16 px-14 flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-8">
          <img src={schottky} alt="diodo schottky iconos" className="hidden sm:flex"/>
          <h2 className="text-2xl text-center font-semibold">Diodos <span className="text-blue text-[33px] font-semibold">Schottky</span></h2> 
          <div className="w-24 h-16 hidden sm:flex"></div>    
        </div>
        <div className="h-[2px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue to-transparent my-4"></div>
        <div className="overflow-x-auto w-full flex sm:justify-center items-center">
          <table className="min-w-[300px] table-auto shadow-lg border-collapse border border-back p-5">
            <thead className="bg-back text-blue">
              <tr>
                <th className="px-4 py-5 border">Código</th>
                <th className="px-4 py-5 border">Voltaje inversa max(V)</th>
                <th className="px-4 py-5 border">Corriente salida max(A)</th>
                <th className="px-4 py-5 border">Corriente directa max(A)</th>
                <th className="px-4 py-5 border">Voltaje directo(V)</th>
                <th className="px-4 py-5 border ">Corriente fuga(mA)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-gray-50 ">
              {diodos && diodos.schottky && diodos.schottky.map((diodo) => (
                <tr key={diodo.codigo} > 
                  <th className="px-4 py-5 border font-normal">{diodo.codigo}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.v_inversa}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.corriente_max}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.corriente_dir}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.v_directa}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.corriente_fug}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className=" py-16 px-14 flex flex-col items-center justify-center gap-8">
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-8">
          <img src={ledazul} alt="diodo zener iconos" className=" aspect-square h-[60px] font-semibold"/>
          <h2 className="text-2xl text-center font-semibold">Diodos <span className="text-blue text-[33px] font-semibold">Led</span></h2> 
          <img src={led} alt="diodo zener iconos" className=" aspect-square h-[60px]"/>
        </div>
        <div className="h-[2px] w-1/2 mx-auto bg-gradient-to-r from-transparent via-blue to-transparent my-4"></div>
        <div className="overflow-x-auto w-full flex sm:justify-center items-center">
          <table className="w-full max-w-[1100px] table-auto shadow-lg border-collapse border border-back p-5">
            <thead className="bg-back text-blue">
              <tr>
                <th className="px-4 py-5 border">Código</th>
                <th className="px-4 py-5 border">Cápsula</th>
                <th className="px-4 py-5 border">Color</th>
                <th className="px-4 py-5 border">Intensidad Luminosa (mcd)</th>
                <th className="px-4 py-5 border">Corriente de alimentación (mA)</th>
                <th className="px-4 py-5 border">Voltaje de alimentación (VCD)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-gray-50">
              {diodos && diodos.led && diodos.led.map((diodo) => (
                <tr key={diodo.codigo} > 
                  <th className="px-4 py-5 border font-normal">{diodo.codigo}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.capsula}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.color}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.intensidad_lum}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.corriente_al}</th>
                  <th className="px-4 py-5 border font-normal">{diodo.tension_al}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </section>
    </>
  )
}

export default Catalogue