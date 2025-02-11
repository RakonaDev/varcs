import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import { Container } from '../components/utils/Container'
import { Button, TextField } from '@mui/material'
import { SiGooglemaps } from "react-icons/si";
import { FaPhoneAlt } from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';
import { createRef, useEffect, useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';


export default function Contacto() {
  const [token, setToken] = useState<string | null | undefined>()
  const [loadingCorreo, setLoadingCorreo] = useState(false)
  const refCAPTCHA = createRef<ReCAPTCHA>()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const onChange = () => {
    setToken(refCAPTCHA.current?.getValue())
    console.log(token)
  }
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    values,
    errors
  } = useFormik({
    initialValues: {
      nombres: '',
      email: '',
      celular: '',
      mensaje: '',
    },
    onSubmit: (values) => {
      if (loadingCorreo) return
      if (!token) return
      setLoadingCorreo(true)
      const form = new FormData()
      form.append("nombres", values.nombres)
      form.append("email", values.email)
      form.append("celular", values.celular)
      form.append("mensaje", values.mensaje)
      try {
        fetch("https://api.vartecs.com/public/api/enviarCorreo", {
          method: "POST",
          body: form,
          mode: 'no-cors'
        }).then((response) => {
          if (!response.ok) {
            throw new Error
          }
          else if (response.status !== 200) {
            throw new Error
          }
          else {
            Swal.fire({
              title: 'Correo Enviado',
              icon: "success"
            })
            return response.json()
          }
        }).finally(() => {
          resetForm()
          setLoadingCorreo(false)
        })
      }
      catch (error) {
        console.log(error)
        Swal.fire({
          title: 'No se ha enviado el correo!',
          icon: "error"
        })
      }
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
                  name='nombres'
                  value={values.nombres}
                  helperText={errors.nombres}
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
                    name='celular'
                    value={values.celular}
                    helperText={errors.celular}
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
                <div className='w-full flex justify-center'>

                  <ReCAPTCHA
                    ref={refCAPTCHA}
                    sitekey="6LdptTUqAAAAAEN7szwumM1ksjY_WBlDGfSv6PPq"
                    onChange={onChange}
                  />
                </div>
                <Button type={loadingCorreo ? 'button' : 'submit'} variant="contained" className='w-fit mx-auto px-8 py-2 text-white' sx={{ background: '#BF212E', fontWeight: '600', marginInline: 'auto' }}>{loadingCorreo ? 'Enviando...' : 'Enviar Formulario'}</Button>
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
