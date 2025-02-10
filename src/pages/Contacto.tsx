import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import { Container } from '../components/utils/Container'
import { Button, TextField } from '@mui/material'
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { useEffect } from 'react';


export default function Contacto() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors
  } = useFormik({
    initialValues: {
      nombre_empresa: '',
      ruc: '',
      email: '',
      telefono: '',
      mensaje: '',
    },
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <main className='min-h-[calc(100dvh_-_80px)] w-full'>
      <div className='h-[120px] bg-transparent w-full'></div>
      <Container>
        <div className='w-full h-full flex items-center justify-center'>
          <Container>
            <div className='w-full h-full flex flex-col gap-10 items-center justify-center'>
              <form
                className='flex flex-col gap-7 my-10 bg-white p-5 rounded-xl w-full lg:w-[600px] shadow-lg shadow-gray-600'
                onSubmit={handleSubmit}
              >
                <h1 className='text-center font-bold text-3xl'>Contáctanos</h1>
                <TextField
                  id="outlined-basic"
                  label="Nombre de la Empresa"
                  variant="outlined"
                  className='w-full'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='nombre_empresa'
                  value={values.nombre_empresa}
                  helperText={errors.nombre_empresa}
                  required
                />
                <div className='w-full flex max-lg:flex-col gap-5'>
                  <TextField
                    id="outlined-basic"
                    label="Numero de la Empresa"
                    variant="outlined"
                    className='w-full lg:w-1/2'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='telefono'
                    value={values.telefono}
                    helperText={errors.telefono}
                    required
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email de la Empresa"
                    variant="outlined"
                    className='w-full lg:w-1/2'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='email'
                    value={values.email}
                    helperText={errors.email}
                    required
                  />
                </div>
                <TextField
                  id="outlined-basic"
                  label="Mensaje "
                  variant="outlined"
                  className='w-full'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name='mensaje'
                  multiline
                  value={values.mensaje}
                  helperText={errors.mensaje}
                  required
                />
                <Button type='submit' variant="contained" className='w-fit mx-auto px-8 py-2 text-white' sx={{ background: '#BF212E', fontWeight: '600', marginInline: 'auto' }}>Enviar Formulario</Button>
              </form>
              <section className='w-full flex gap-10 flex-wrap justify-evenly py-10'>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='rounded-lg shadow-sm shadow-black hover:scale-105 duration-300 transition-all min-w-[300px] max-w-[400px] bg-rojo flex flex-col gap-5 items-center justify-center p-4'>
                  <SiGooglemaps size={45} />
                  <h1 className='text-center font-bold text-3xl'>Dirección</h1>
                  <p className='text-center text-black font-medium text-lg'>Jr. Elmer Faucet Mz. F Lt. 7 - Cajamarca</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='rounded-lg shadow-sm shadow-black hover:scale-105 duration-300 transition-all min-w-[300px] max-w-[400px] bg-rojo flex flex-col gap-5 items-center justify-center p-4'>
                  <FaPhoneAlt size={45} />
                  <h1 className='text-center font-bold text-3xl'>Celulares</h1>
                  <div>
                    <p className='text-center text-black font-medium text-lg'>923422004</p>
                    <p className='text-center text-black font-medium text-lg'>983807040</p>
                    <p className='text-center text-black font-medium text-lg'>934003145</p>
                    <p className='text-center text-black font-medium text-lg'>076 264915</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className='rounded-lg shadow-sm shadow-black hover:scale-105 duration-300 transition-all min-w-[300px] max-w-[400px] bg-rojo flex flex-col gap-5 items-center justify-center p-4'>
                  <MdOutlineMail size={45} />
                  <h1 className='text-center font-bold text-3xl'>Email</h1>
                  <div>
                    <p className='text-center text-black font-medium text-lg'>vartecsingenieria@gmail.com</p>
                    <p className='text-center text-black font-medium text-lg'>Proyectos@vartecs.com</p>
                    <p className='text-center text-black font-medium text-lg'>Jorge.teatino@vartecs.com</p>
                  </div>
                </motion.div>
              </section>
            </div>
          </Container>
        </div>
      </Container>
    </main>
  )
}
