import { motion } from "framer-motion";
import SwiperPhotosDinamyc from "../components/utils/SwiperPhotosDinamyc"
import { Container } from "../components/utils/Container";
import { useFormik } from "formik";
import { createRef, useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaAddressBook, FaPhoneAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { Button, TextField } from "@mui/material";
import { FaCalendar, FaStar, FaUser } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";

export interface ProyectLayoutProps {
  url: string[]
  titulo?: string
  propietario: string
  ubicacion: string
  fecha: string
  cliente: string
  logo?: string
}

export default function ProyectLayout({ url, titulo, propietario, ubicacion, fecha, cliente, logo }: ProyectLayoutProps) {
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
            return response.json()
          }
        }).finally(() => {
          resetForm()
          setLoadingCorreo(false)
        })
        Swal.fire({
          title: 'Correo Enviado',
          icon: "success"
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
    <div>
      <header className="w-full min-h-screen relative overflow-hidden flex justify-center items-center">
        <SwiperPhotosDinamyc urls={url} />
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center font-bold text-2xl lg:text-6xl z-50 px-16"
        >
          {titulo}
        </motion.h1>
      </header>
      <section className="w-full py-16 bg-azul_oscuro text-white">
        <Container>
          <section className="flex flex-wrap gap-10 justify-evenly items-center">
            <div className="flex flex-col gap-10 items-center">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center font-bold text-4xl flex gap-2 items-center"
              >
                <FaUser />
                Propietario
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center font-medium text-xl"
              >
                {propietario}
              </motion.p>
            </div>
            <div className="flex flex-col gap-10 items-center">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center font-bold text-4xl flex gap-2 items-center"
              >
                <IoMdPin />
                Ubicación
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center font-medium text-xl"
              >
                {ubicacion}
              </motion.p>
            </div>
            <div className="flex flex-col gap-10 items-center">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center font-bold text-4xl flex gap-2 items-center"
              >
                <FaCalendar />
                Fecha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center font-medium text-xl"
              >
                {fecha}
              </motion.p>
            </div>
            <div className="flex flex-col gap-10">
              <motion.h1
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center font-bold text-4xl flex gap-2 justify-center items-center"
              >
                <FaAddressBook />
                Cliente
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-xl font-medium"
              >
                {cliente}
              </motion.p>
            </div>
          </section>
          {
            logo &&
            <section className="w-full py-16 flex flex-col gap-14 items-center">
              <h1 className="font-bold text-4xl flex gap-2 items-center">
                <FaStar />
                Logo del Cliente
              </h1>
              <img src={logo} alt="cliente" className="animate-bounce w-[200px] bg-white p-5 rounded-xl" />
            </section>
          }
        </Container>
      </section>
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
              <div className="w-full flex justify-center">
                <ReCAPTCHA
                  ref={refCAPTCHA}
                  sitekey="6LdptTUqAAAAAEN7szwumM1ksjY_WBlDGfSv6PPq"
                  onChange={onChange}
                />
              </div>
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
    </div>
  )
}
