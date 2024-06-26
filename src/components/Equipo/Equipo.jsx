/* eslint-disable react/prop-types */
//import React from 'react'
import Colaborador from '../Colaborador/Colaborador'
import './Equipo.css'
import hexToRgba from 'hex-to-rgba'
// eslint-disable-next-line react/prop-types
const Equipo = ({datos,colaboradores,eliminarColaborador,actualizarColor,like}) => {
 // eslint-disable-next-line react/prop-types
 const{titulo,colorPrimario} =datos
 
  return (
    <>
    { colaboradores.length > 0 &&
      <section className='equipo' style={{background:`${hexToRgba(colorPrimario,0.6)}`}}>
        <input type="color" 
        className='input-color'
        value={colorPrimario}
        onChange={(e)=>{
          actualizarColor(e.target.value,datos.id)
        }}
        />
          <h3 className='equipo-h3' style={{borderBottom:`solid 4px ${colorPrimario}`}}>{titulo}</h3>
          <div className='colaboradores'>
            {
              // eslint-disable-next-line react/prop-types
              colaboradores.map((colaborador,index)=> <Colaborador 
              colaborador={colaborador} 
              key={index} 
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              like={like}
              />)
  
            }
            
           
            
          </div>
      </section>

    }
    </>
  )
}

export default Equipo