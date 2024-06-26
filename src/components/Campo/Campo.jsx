import "./Campo.css";

// eslint-disable-next-line react/prop-types
const Campo = ({ title, name, description,required,actualizarValor,value,type }) => {

  const defaultType=!type?'text':type

  const handleList=(e)=>{
    
    //console.log(e.target.value)

    actualizarValor(e.target.value)
  }
  return (
    <div className="campo">
      <label htmlFor={title} className="campo-label">
        {title}
      </label>
      <input
        type={defaultType}
        id={name}
        name={name}
        placeholder={`${description}`}
        className={`campo-input-${defaultType}`}
      required={required} value={value}
      onChange={handleList}
      
      />
    </div>
  );
};

export default Campo;
