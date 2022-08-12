import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Tecnologias from './components/Tecnologias/Tecnologias'

function App() {
  const code = "</>"
  return (
    <div id='container'>
      <div className='wall'></div>
      <div className='wall'>{code}</div>
      <div className='wall'></div>
      <Header/>
      <Home/>
      <Tecnologias/>
    </div>
  );
}

export default App;
