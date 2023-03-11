import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Graph from './pages/Graph';
import Calender from './pages/Calender';
import MyFooter from './components/MyFooter';
import MyButton from './components/MyButton';
import MyHeader from './components/MyHeader';

function App() {


  const date = new Date();
  const weekly = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          leftChild={`${weekly[date.getDay()]} . ${month[date.getMonth()]} . ${date.getDate()}`}
          rightChild={<MyButton text={'모드'} onClick={()=>{alert("클릭")}} />}
        />
      {/*
        <MyButton text={'모드'} onClick={()=>{alert("클릭")}}></MyButton>
        <MyButton text={'모드'} onClick={()=>{alert("클릭")}} type={"positive"}></MyButton>
        <MyButton text={'모드'} onClick={()=>{alert("클릭")}} type={"negative"}></MyButton>
      */}
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/calender' element={ <Calender />} />
          <Route path='/graph' element={ <Graph />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
