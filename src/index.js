import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario'
import FormularioInicioSesion from './components/FormularioInicioSesion'
import ContadorFuncional from './components/ContadorFuncional'
import './index.css'

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true)

  return (
    <div className="contenedor">

      {sesion === true ?
        <div>
        <Usuario/>
        <ContadorFuncional cantidadAIncrementar={3} cantidadADisminuir={3}/>
        <button onClick={() => cambiarEstadoSesion(false)} className="boton-cerrar">Cerrar Sesion</button>
        </div>
      :
      <div>
        <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
        {/* <button onClick={() => cambiarEstadoSesion(true)}>Inciar Sesion</button> */}
      </div>
      }

    </div>
  )
};


ReactDOM.render(<App/>, document.getElementById('root'));
