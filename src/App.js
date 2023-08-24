

import Banner from './Componentes/Banner';
import CampoTexto from './Componentes/CampoTexto';

function App() {
  return (
    
    <div className="App">
      <Banner/>
      <CampoTexto label='Nome' placeholder='Digite seu nome'/>
      <CampoTexto label='Cargo' placeholder='Digite seu cargo'/>
      <CampoTexto label='Imagem' placeholder='Digite o endereço da sua imagem'/>
    
    </div>
  );
}

export default App;
