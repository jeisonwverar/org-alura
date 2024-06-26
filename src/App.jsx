import Header from "./components/header/Header";
import Formulario from "./components/Formulario/Formulario";
import MiOrg from "./components/MiOrg/MiOrg";
import { useState } from "react";
import Equipo from "./components/Equipo/Equipo";
import { listaEquipos } from "./utils/listaEquipos.js";
import Footer from "./components/Footer/Footer.jsx";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [colaboradores, setColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav:true
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:false
    },
    {
      id: uuidv4(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:false
    },
    {
      id: uuidv4(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:false
    },
  ]);

  const [equipos, setEquipos] = useState(listaEquipos);
  /* condicional rending con ternario */
  const cambiarEstado = () => {
    setMostrarFormulario(!mostrarFormulario);
  };
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaboradores);
    setColaboradores([...colaboradores, colaborador]);
  };

  const eliminarColaborador = (id) => {
    const eliminarColaborador = colaboradores.filter(
      (equipo) => equipo.id !== id
    );
    setColaboradores(eliminarColaborador);
    console.log("El usuario con el id: " + id + " fue eliminado con exito");
  };
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
  };

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    const equi = {
      id: uuidv4(),
      titulo: nuevoEquipo.titulo,
      colorPrimario: nuevoEquipo.color,
      colorSecundario: nuevoEquipo.color,
    };
    setEquipos([...equipos, equi]); 
  };

  const like=(id)=>{
    const colaboradorActualizador=colaboradores.map((colaborador)=>{
      if(colaborador.id===id){
        colaborador.fav= !colaborador.fav
      }
      
      return colaborador
    })
    setColaboradores(colaboradorActualizador)
  }
  return (
    <>
      <Header />
      {mostrarFormulario && (
        <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      )}
      <MiOrg cambiarEstado={cambiarEstado} />

      {equipos.map((equipo, index) => (
        <Equipo
          datos={equipo}
          key={index}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.equipo === equipo.titulo
          )}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />
      ))}

      <Footer />
    </>
  );
}

export default App;
