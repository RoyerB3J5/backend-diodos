
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
      
    </>

  )
}

export default Home