
import './App.css';
import Testimonio from "./componentes/testimonio";


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>ESPN noticias de ultimo momento en el mundo del futbol</h1>
        <Testimonio 
          nombre="Julian Alavarez"
          ubicacion="El Monumental"
          imagen="julian"
          posicion="Delantero"
          equipo="River Plate"
          testimonio="La posibilidad de que Álvarez sea cedido por el Manchester City a otro club europeo fue barajada desde un principio. River intentó convencer al equipo inglés de que le permita al 9 riverplatense quedarse hasta el fin de la Copa Libertadores pero eso fue descartado. En la mañana del jueves, Juan Cortese reveló un posible destino del joven de 22 años: el Olympique de Marsella, equipo dirigido por Jorge Sampaoli."/>
        <Testimonio
          nombre="Lionel Andres Messi"
          ubicacion="Francia"
          imagen="messi"
          posicion="Varias"
          equipo="Paris Saint-Germain FC"
          testimonio="En el estadio del Osasuna de España, la selección argentina se floreó ante Estonia: le ganó 5-0 con cinco goles de Lionel Messi y cerró con una sonrisa la ventana FIFA en la que además obtuvo La Finalissima, la Copa en la que, como campeón de la Copa América, superó 3-0 a Italia, el vencedor de la última Eurocopa."
        />
        <Testimonio
          nombre="Gareth Bale"
          ubicacion="Millennium; Cardiff City"
          imagen="bale"
          posicion="Delantero"
          equipo="Seleccion de Gales"
          testimonio="Gales se clasificó 64 años después gracias a un tiro suyo de falta desviado por Yarmolenko que dio el histórico pase a Qatar. Estará en el grupo de Inglaterra, Irán y EEUU."
          />
      </div>
    </div>
  );
}

export default App;
