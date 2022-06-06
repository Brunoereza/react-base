import React from "react";
import "../styles/testimonio.css";


function Testimonio(props){
  return(
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
      src={require(`../image/testimonio-${props.imagen}.jpg`)} alt="Foto de Julian"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.ubicacion}</p>
        <p className="ocupacion-testimonio">{props.posicion} en <strong>{props.equipo}</strong></p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;