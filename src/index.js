import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './components/Usuario'
import FormularioInicioSesion from './components/FormularioInicioSesion'
import ContadorClass from './components/ContadorClass'
import ContadorFuncional from './components/ContadorFuncional'

const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(true)

  return (
    <>

    {sesion === true ?
    <div>
     <Usuario/>
     <ContadorFuncional cantidadAIncrementar={3} cantidadADisminuir={3}/>
     <ContadorClass cantidadAIncrementar={10} cantidadADisminuir={2}/>
     <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button>
    </div>
    :
    <div>
    <h2 style={{color: 'red'}}>No has iniciado sesion</h2>
    <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
    {/* <button onClick={() => cambiarEstadoSesion(true)}>Inciar Sesion</button> */}
    </div>
    }

    </>
  )
};


ReactDOM.render(<App/>, document.getElementById('root'));
