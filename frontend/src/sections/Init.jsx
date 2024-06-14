import diodo from '../assets/diodo.svg';

function Init() {
  return (
    <section className="flex flex-wrap flex-col justify-center items-center px-2 sm:px-20 py-5 text-white gap-5 mx-4 max-w-[1500px] lg:w-auto lg:flex-row my-20">
      <div className="sm:flex-1 flex flex-wrap flex-col gap-4 py-4 justify-center  lg:items-start">
        <h1 className="text-4xl sm:text-6xl leading-tight">
          Seleccionador de <br className='hidden sm:flex' />
          <span className="text-5xl sm:text-6xl lg:text-7xl font-bold text-sky">DIODOS</span>
        </h1>
        <p className="text-xs sm:text-base lg:text-lg break-words">
          ¡Bienvenido! Les presentamos nuestra innovadora interfaz web para la selección de diodos. Este portal está diseñado para facilitar a ingenieros, técnicos y aficionados la búsqueda y selección del diodo perfecto para sus proyectos electrónicos.
        </p>
        <div className="mt-6">
          <a href="#buscar" className="inline-block bg-sky self-center px-8 py-3 rounded-lg text-[1.3rem] text-back font-semibold hover:bg-back hover:text-sky hover:border-b-[3px] hover:border-b-sky hover:rounded-none transition-all hover:-translate-y-2">
            COMENZAR
          </a>
        </div>
      </div>
      <img src={diodo} alt="Imagen de diodos" className="flex-1 h-[200px] sm:h-[300px] lg:h-[500px]" />
    </section>
  );
}

export default Init;
