
import Init from "../sections/Init"
import Somos from "../sections/Somos"
import Form from "../sections/Form"

import { useEffect } from "react"

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" h-auto bg-back flex flex-col justify-center items-center lg:h-screen ">
        <Init />
      </div>
      <Somos />
      
      <Form />
      <footer className="w-full  mt-10 px-10 sm:px-32 py-5 flex items-center justify-around gap-x-3 text-center text-gray-300 ">
        <p>Copyright &copy; - UNT Ing. Mecatrónica - RRMIC</p>
      </footer>
    </>

  )
}

export default Home