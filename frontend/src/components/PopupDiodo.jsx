import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react"
import dZener from '../assets/diodo-zener.jpg'
import dRectificador from '../assets/diodo-rectificado.jpeg'
import dSchottky from '../assets/diodo-schottky.jpeg'
import transparente from '../assets/transparente.webp'
import Rojo from '../assets/Rojo.webp'
import Verde from '../assets/Verde.jpeg'
import Azul from '../assets/Azul.webp'
import Blanco from '../assets/Blanco.jpeg'
import Ambar from '../assets/Ambar.jpeg'

function PopupDiodo( {dataDiodo,tipo,onClose} ) {
  const [close, setClose] = useState(false)
  const handleClick = () =>{
    setClose(!close)
    onClose()
  }
  const colorImages = {
    Rojo: Rojo,
    Verde: Verde,
    Azul: Azul,
    Blanco: Blanco,
    Ambar: Ambar,
  };
  useEffect (()=>{
    document.body.style.overflow = 'hidden'
    
    return () =>{
      document.body.style.overflow = 'auto'
    }
  },[])
  useEffect(() => {
    if (!close) {
      window.scrollTo(0, document.body.scrollHeight)
    }
  }, [close])


  return (
    <section className={`fixed bottom-0 h-full w-full ${close? 'hidden':''} z-30 flex justify-center items-center   `}>
      <div className="fixed inset-0 bg-black opacity-70 z-40 w-full h-full"></div>
      <div className="relative z-50 border-4 border-blue rounded-2xl bg-gray-100 mx-3 h-auto w-auto  flex flex-col justify-center items-center p-2 sm:p-4 " style={{ maxHeight: '100vh', overflowY: 'auto' }}>
        <IoCloseOutline className="absolute right-3 top-3 text-2xl text-red-600 font-bold hover:cursor-pointer" onClick={handleClick}/>
        <div className="flex w-full
         flex-col justify-center items-center gap-8 p-2">
          {tipo == "rectificador" && 
          <>
            <h3 className="text-3xl font-bold text-center ">Diodo Rectificador</h3>
            <img src={dRectificador} alt="Diodo Rectificador" className=" aspect-video h-[100px] hidden md:flex"/>
            
            <section className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-6 md:gap-3 ">
              <div className=" flex-1 flex flex-col justify-center items-center gap-3 text-center"> 
                <p className="text-base">Código: {dataDiodo.codigo}</p>
                <p className="text-base">Función: {dataDiodo.funcion}</p>
                <p className="text-base">Corriente máxima: {dataDiodo.corriente_max}A</p>
                <p className="text-base">Voltaje en inversa: {dataDiodo.v_inversa}V</p>
                <p className="text-base">Voltaje en directa: {dataDiodo.v_directa}V</p>
              </div>
              <div className="h-[1px] w-full md:h-[180px] md:w-[1px] bg-back "></div>
              <div className="flex-1 flex flex-col justify-center items-center gap-3">
                <h3 className=" font-semibold text-lg">Aplicaciones</h3>
                <ul className=" flex flex-col gap-3 pl-6">
                  <li>- Convertir CA a CC</li>
                  <li>- Rectificador de onda completa</li>
                  <li>- Filtrado de condensadores</li>
                </ul>
              </div>
              
            </section>
          </>
          }
          {tipo == "zener" && 
          <>
            <h3 className="text-3xl font-bold text-center">Diodo Zener</h3>
            <img src={dZener} alt="Diodo Zener" className=" aspect-video h-[120px] hidden md:flex"/>
            <section className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-6 md:gap-3 ">
              <div className=" flex-1 flex flex-col justify-center items-center gap-3 text-center">
                
                <p className=" text-base">Código: {dataDiodo.codigo}</p>
                <p className="text-base">Función: {dataDiodo.funcion}</p>
                <p className="text-base">Corriente Zener: {dataDiodo.c_zener} mA</p>
                <p className="text-base">Voltaje Zener: {dataDiodo.v_zener}V</p>
                <p className="text-base">Potencia: {dataDiodo.potencia}W</p>
              </div>
              <div className="h-[1px] w-full md:h-[180px] md:w-[1px] bg-back "></div>
              <div className="flex-1 flex flex-col justify-center items-center gap-3">
                <h3 className=" font-semibold text-lg">Aplicaciones</h3>
                <ul className=" flex flex-col gap-3 pl-6">
                  <li>- Mantener voltaje fijo en polarización inversa</li>
                  <li>- Protección contra sobretensiones</li>
                  <li>- Limitar formas de onda</li>
                </ul>
              </div>              
            </section>
          </>
          }
          {tipo == "schottky" && 
          <>
            <h3 className="text-3xl font-bold text-center">Diodo Schottky</h3>
            <img src={dSchottky} alt="Diodo Zener" className=" aspect-video h-[120px] hidden md:flex"/>
            <section className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-6 md:gap-3 ">
              <div className=" flex-1 flex flex-col justify-center items-center gap-3 text-center">
                
                <p className="text-base">Código: {dataDiodo.codigo}</p>
                <p className="text-base">Corriente salida máx: {dataDiodo.corriente_max}A</p>
                <p className="text-base">Voltaje inversa máx: {dataDiodo.v_inversa}V</p>
                <p className="text-base">Caáda de voltaje directo: {dataDiodo.v_directa}V</p>
                <p className="text-base">Corriente directa máx: {dataDiodo.corriente_dir}A</p>
                <p className="text-base">Corriente fuga inversa: {dataDiodo.corriente_fug} mA</p>
              </div>
              <div className="h-[1px] w-full md:h-[200px] md:w-[1px] bg-back "></div>
              <div className="flex-1 flex flex-col justify-center items-center gap-3">
                <h3 className=" font-semibold text-lg">Aplicaciones</h3>
                <ul className=" flex flex-col gap-3 pl-6 ">
                  <li>- Operar en altas velocidades</li>
                  <li>- Fuentes de potencia</li>
                  <li>- Circuitos de alta frecuencia</li>
                </ul>
              </div>              
            </section>
          </>
          }
          {tipo == "led" && 
          <>
            <h3 className="text-3xl font-bold text-center">Diodo Led</h3>
            <img src={dataDiodo.capsula === "Transparente" ? transparente : colorImages[dataDiodo.color]} alt="Diodo Led" className=" aspect-square h-[100px] hidden md:flex"/>
            
            <section className="flex flex-col md:flex-row w-full justify-center items-center md:items-start gap-6 md:gap-3 ">
              <div className=" flex-1 flex flex-col justify-center items-center gap-3 text-center">
                
                <p className="text-base">Cádigo: {dataDiodo.codigo}</p>
                <p className="text-base">Cápsula: {dataDiodo.capsula}</p>
                <p className="text-base">Color: {dataDiodo.color}</p>
                <p className="text-base">Intensidad luminosa: {dataDiodo.intensidad_lum} mcd</p>
                <p className="text-base">Corriente alimentación: {dataDiodo.corriente_al} mA</p>
                <p className="text-base">Tensión alimentación: {dataDiodo.tension_al} VDC</p>
              </div>
              <div className="h-[1px] w-full md:h-[210px] md:w-[1px] bg-back "></div>
              <div className="flex-1 flex flex-col justify-center items-center gap-3">
                <h3 className=" font-semibold text-lg">Aplicaciones</h3>
                <ul className=" flex flex-col gap-3 pl-6 ">
                  <li>- Iluminación</li>
                  <li>- Publicidad</li>
                  <li>- Señales de tráfico y luces de freno</li>
                </ul>
              </div>              
            </section>
          </>
          } 
        </div>
      </div>
    </section>
  )
}

export default PopupDiodo