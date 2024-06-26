import './Boton.css'

// eslint-disable-next-line react/prop-types
const Boton = ({children}) => {

  

  return (
    <button className='boton'>{children}</button>
  )
}

export default Boton