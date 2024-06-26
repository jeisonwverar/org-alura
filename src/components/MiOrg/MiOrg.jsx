import './MiOrg.css'
import  {useState} from 'react'
const MiOrg = ({cambiarEstado}) => {
    //Estado - hooks
    // useState
    /* const [mostrar, setMostrar] = useState(false)
    const manejarClick=()=>{
        
        setMostrar(!mostrar)
        setMostrarFormulario(!mostrar)
    } */
  return (
    <section className='org-section'>
        <h3 className='org-section-h3'>Mi organizacion</h3>
        <img src="/img/botonadd.png" alt="add" className='org-section-img'  onClick={cambiarEstado} />
    </section>
  )
}

export default MiOrg