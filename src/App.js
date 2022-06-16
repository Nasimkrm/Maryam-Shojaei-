import Navbar from './Navbar';
import Home from './Home';


import Facial from './Facial';
import YogaMed from './YogaMed';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';





function App() {

  return (
    <Router>
    <div className="App">

    
    <Navbar/>
    
       <div className='content'>
       
       <Routes>
         <Route path='/' element={<Home/>}></Route>
         
       </Routes>
       
       <Routes>
         <Route path='/yoga' element={ <YogaMed/>}></Route>
       </Routes>

       
       <Routes>
         <Route path='/facial' element={ <Facial/>}></Route>
       </Routes>
     
      
      
      </div> 
     
      <Footer />
      
    </div>
    </Router>
  );
}

export default App;