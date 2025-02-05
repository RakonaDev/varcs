import LogoPeru from '../../assets/lp.svg'

export default function Footer() {
  return (
    <footer className='w-full h-20 bg-black text-white text-center'>
      <div className='w-full h-full flex flex-col gap-1 justify-center items-center'>
        <p className='text-base'>
          &copy; {new Date().getFullYear()} Vartecs. Todos los derechos reservados.
        </p>
        <p className='flex items-center gap-1'>Design By: <a href='/'><img src={LogoPeru} alt="Logo" className='w-5 h-5' /></a></p>
      </div>
    </footer>
  )
}
