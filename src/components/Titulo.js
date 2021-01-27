import React from 'react'


const Titulo = ({color = 'blue'}) => {
    return ( <h1 className="nombre-clase" style={{color: color}}>Hola Buen dia</h1> );
}


export {Titulo};