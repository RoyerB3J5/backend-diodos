import { useEffect, useState } from 'react';
import mecatronica from '../assets/mecatronica.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link, useMatch,useResolvedPath } from 'react-router-dom';

function CustomLink({ to, children,onClick, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      to={to}
      {...props}
      className={`${match ? 'border-b-[3px] border-b-sky' : ''} hover:border-b-[3px] hover:border-b-sky hover:text-sky-500 transition-all`} 
    >
      {children}
    </Link>
  );
}
function Header({location}) {
  //Poner los links de las páginas
  const [active,setActive] = useState(false)
  const [scroll, setScroll] = useState(false)
  const changeActive = () =>{
    setActive(!active)
  }


  useEffect(() =>{
    const handleScroll = () =>{
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scroll){
        setScroll(!scroll)
      }
    }
    document.addEventListener('scroll', handleScroll, {pasive:true})

    return () =>{
      document.removeEventListener('scroll', handleScroll)
    }
  },[scroll])
  return (
    <header className={`${location.pathname === '/' ? 'bg-transparent' : 'bg-back'} fixed top-0 z-20 flex items-center justify-between w-full px-12 py-5 text-sky`}>
      <div className={`absolute inset-0 -z-10 ${scroll?'backdrop-blur':'bg-transparent'}`}></div>
      <img src={mecatronica} alt="Logo UNT" className='h-[70px]  ' />
      <nav className='flex-1 hidden justify-center md:flex'>
        <ul className='flex justify-around gap-14 text-xl font-semibold '>
          <CustomLink to="/" >INICIO</CustomLink>
          <li><a href="#quienes_somos" className=' hover:border-b-[3px] hover:border-b-sky transition-all active:border-b-sky active:border-b-[3px] '>QUIÉNES SOMOS</a></li>
          <li><a href="#buscar" className=' hover:border-b-[3px] hover:border-b-sky transition-all active:border-b-sky active:border-b-[3px] '>BUSCAR</a></li>
          <CustomLink to="/catalogo">CATÁLOGO</CustomLink>
        </ul>
      </nav>
      <nav className={`absolute ${active?'flex':'hidden'} right-11 top-20 bg-sky rounded-xl px-6 py-5`}>
        <ul className='flex flex-col justify-center items-center gap-6 text-xl font-semibold text-back '>
          <Link to="" className=' hover:border-b-[3px] hover:border-b-white transition-all 'onClick={changeActive}>INICIO</Link>
          <li><a href="#quienes_somos" className=' hover:border-b-[3px] hover:border-b-white transition-all ' onClick={changeActive}>QUIÉNES SOMOS</a></li>
          <li><a href="#buscar" className=' hover:border-b-[3px] hover:border-b-white transition-all ' onClick={changeActive}>BUSCAR</a></li>
          <Link to="catalogo" className=' hover:border-b-[3px] hover:border-b-white transition-all ' onClick={changeActive}>CATÁLOGO</Link>
        </ul>
      </nav>
      <div onClick={changeActive}>
        {active ? <IoMdClose className='text-3xl cursor-pointer md:hidden' /> : <GiHamburgerMenu className='text-3xl cursor-pointer md:hidden' />}
      </div>
      
    </header>
  )
}

export default Header