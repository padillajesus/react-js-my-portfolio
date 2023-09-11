import { BrowserRouter} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './index.css'


import {
  Navbar,
  Home,
  About,
  Skill,
  Project,
  Footer,
} from './components'




function App() {

  return (


    <div>
      <BrowserRouter>
          <Navbar/>
          <Home/>
          <About/>
          <Skill/>
          <Project/>
          <Footer/>
         
      </BrowserRouter>
    </div>
    

  );
}

export default App;
