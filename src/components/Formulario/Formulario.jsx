/* eslint-disable react/prop-types */
import Campo from '../Campo/Campo'
import ListaOpciones from '../ListaOpciones/ListaOpciones'
import Boton from '../Boton/Boton'
import './Formulario.css'
import { useState } from 'react'
const Formulario = ({equipos,registrarColaborador,crearEquipo}) => {
 const [nombre, setNombre] = useState('')
 const [puesto, setPuesto] = useState('')
 const [foto, setFoto] = useState('')
 const[equipo,setEquipo]=useState('')
 const [titulo,setTitulo]=useState('')
 const [color,setColor]=useState('')
  const manejarEnvio=(e)=>{
    e.preventDefault()
   
    let datosEnviar={
      nombre,
      puesto,
      foto,
      equipo
    }
    registrarColaborador(datosEnviar)

    setPuesto('')
    setFoto('')
    setNombre('')
    setEquipo('')
  }
 const manejarNuevoEquipo=(e)=>{
  e.preventDefault()
   
  crearEquipo({
    titulo,
    color
  })
  console.log('se creo equipo desde el manejador')

  setTitulo('')
  setColor('')
 }
 
  return (
    <section className='section-formulario'>

    <form className='form-formulario' onSubmit={manejarEnvio} >
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo name='nombre' 
        title='Nombre'
       description='ingresar el nombre'
       required={true}
       actualizarValor={setNombre}
       value={nombre}
       />
        <Campo name='puesto' 
        title='Puesto'
        description='ingresa Puesto'
        required={true}
        actualizarValor={setPuesto}
        value={puesto}
        />
        <Campo name='foto'
        title='Foto'
        description='ingresa enlace de la foto' 
        actualizarValor={setFoto}
        value={foto}
        />
        <ListaOpciones actualizarValor={setEquipo} equipos={equipos}/>
        <Boton>Crear</Boton>
    </form>
    <form className='form-formulario' onSubmit={manejarNuevoEquipo} >
        <h2>Rellena el formulario del equipo.</h2>
        <Campo name='titulo' 
        title='titulo'
       description='ingresar titulo'
       required={true}
       actualizarValor={setTitulo}
       value={titulo}
       />
        <Campo name='color' 
        type={'color'}
        title='color-primario'
        description='Ingresar el color en Hex'
        required={true}
        actualizarValor={setColor}
        value={color}
        />
        <Boton>Registrar equipo</Boton>
        </form>
    </section>
  )
}

export default Formulario
