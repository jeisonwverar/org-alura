import "./ListaOpciones.css";

// eslint-disable-next-line react/prop-types
const ListaOpciones = ({ actualizarValor, equipos }) => {
  const manejarCambio = (e) => {
    actualizarValor(e.target.value);
  };
  return (
    <div className="lista-opcion">
      <label className="lista-opcion-label">Equipos</label>
      <select
        name="lista"
        className="lista-opcion-select"
        onChange={manejarCambio}
      >
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>

        {
        equipos.map((equ, index) => (
          
          <option value={equ} key={index}>
            {equ}
          </option>
))}
      </select>
    </div>
  );
};

export default ListaOpciones;
