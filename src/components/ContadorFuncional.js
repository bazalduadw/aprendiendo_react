import React, {useState} from 'react'
import './ContadorFuncional.css'
const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0)
    const incrementar = (cantidad) => cambiarCuenta(cuenta + cantidad)
    const disminuir = (cantidad) => cambiarCuenta(cuenta - cantidad)
    return ( 
        <div>
            <h1>Contador: {cuenta}</h1>
            <button onClick={() => {incrementar(props.cantidadAIncrementar)}} className="boton-sumar">Incrementar +</button>
            <button onClick={() => {disminuir(props.cantidadADisminuir)}} className="boton-restar">Disminuir -</button>
        </div>
     );
}
export default ContadorFuncional;
