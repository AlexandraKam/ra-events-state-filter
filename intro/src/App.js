import Portfolio from './components/Portfolio'
import './App.css';
import ItemModel from './models/ItemModel';

function App() {

  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
