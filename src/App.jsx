import { Component } from 'react';
import './App.scss';
import { Buscador } from './components';

class App extends Component {

  state = {
    termino: '',
    imagenes: []
  }

  consultarApi = () => {
    const url = `https://pixabay.com/api/?key=24027643-e061048978a1653bab76f5071&q=${this.state.termino}&per_page=30`;
    /* console.log(url); */

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({imagenes: resultado.hits}))
    /* .then(resultado => console.log(resultado.hits)) */
  }

  datosBusqueda = (termino) => {
    this.setState(
      {
        termino
      }, () => {
        this.consultarApi();
      }
    )
  }

  render(){

  return (
    <div className="container">
     <div className="h-100 p-5 text-white bg-dark rounded-3">
       <p className="lead text-center ">Buscador de Imágenes</p>
     <Buscador datosBusqueda={this.datosBusqueda}/>
     </div>
    </div>
  );
}
}

export default App;
