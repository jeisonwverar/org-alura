
import './Colaborador.css'   
import { IoIosCloseCircle } from "react-icons/io" 
import { AiFillHeart,AiOutlineHeart  } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const Colaborador = ({colaborador,colorPrimario,eliminarColaborador,like}) => {

  
  // eslint-disable-next-line react/prop-types
  const{id,nombre,puesto,foto,fav}=colaborador;
  return (
    <div className='colaborador' >
      <IoIosCloseCircle  className='icon-close' onClick={()=>eliminarColaborador(id)}/>
        <div className='colaborador-encabezado' style={{backgroundColor:colorPrimario}}>
            <img src={foto} alt={nombre} />

        </div>
        <div className='colaborador-info'>
            <h4 className='colaborador-h4'>{nombre}</h4>
            <h5 className='colaborador-h5'>{puesto}</h5>
            {fav?
            <AiFillHeart color='#F14B4B ' onClick={()=>like(id)}/>
            :

            <AiOutlineHeart onClick={()=>like(id)}/>

            }
        </div>
    </div>
  ) 
}

export default Colaborador