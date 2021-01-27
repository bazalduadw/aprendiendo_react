import React from 'react'
import {Titulo} from './Titulo'

const Usuario = () => {

    const pais = "Mexico";
    const amigos = ['Diego', 'Juan', 'Eduardo', 'Alejrandro']

    return(
      <div>
          <Titulo color="red"/>
          <h2 style={{color: 'rgb(0,191,255)'}}>Has iniciado sesion</h2> 
          {pais && <p>Tu eres de: {pais}</p>}
          <p>Tu lista de amigos es: </p>
          <ul> 
            {amigos.map((amigo, index) => <li key={index}>{amigo}</li> )}
          </ul>
        </div>
    );
}; 

export default Usuario