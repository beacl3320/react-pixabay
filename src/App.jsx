import './App.scss';
import { Buscador } from './components';

function App() {
  return (
    <div className="container">
     <div className="h-100 p-5 text-white bg-dark rounded-3">
       <p className="lead text-center ">Buscador de Imágenes</p>
     <Buscador/>
     </div>
    </div>
  );
}

export default App;
