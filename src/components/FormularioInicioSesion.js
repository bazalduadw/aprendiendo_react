import React, {useState} from 'react'

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
        <form action="" onSubmit={onSubmit}>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input 
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}
                    onChange={onChange}
                />
                
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={password}
                    onChange={onChange}

                />
            </div>
            <button type="submit" >Iniciar Sesion</button>
        </form>
     );
}
 
export default FormularioInicioSesion;
