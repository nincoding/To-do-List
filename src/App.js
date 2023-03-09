import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Graph from './pages/Graph';
import Calender from './pages/Calender';
import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/calender' element={ <Calender />} />
          <Route path='/graph' element={ <Graph />} />
        </Routes>
      </div>
      <RouteTest />
    </BrowserRouter>
  );
}

export default App;
