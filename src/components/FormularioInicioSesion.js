import React, {useState} from 'react'
import './FormularioInicioSesion.css'

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    const onChange = (evento) => {
        if(evento.target.name === 'usuario'){
            cambiarUsuario(evento.target.value)
        } else if (evento.target.name === 'password') {
            cambiarPassword(evento.target.value)
        } 
    }

    const onSubmit = (e) => {
        e.preventDefault();
        

        if(usuario && password ){
            props.cambiarEstadoSesion(true);
        } else {
            alert('Porfavor inicia sesion');
        }
    }

    return ( 
        <form action="" onSubmit={onSubmit} className="formulario">
            <h1 style={{color: 'red'}}>No has iniciado sesion</h1>
            <div>
                <label htmlFor="usuario" className="label">Usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                    className="input"   
                />
                
            </div>
            <div>
                <label htmlFor="password" className="label">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={onChange}
                    className="input"           
                />
            </div>
            <button type="submit" className="boton">Iniciar Sesion</button>
        </form>
     );
}
 
export default FormularioInicioSesion;
