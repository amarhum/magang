import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home'
import Product from './component/Product';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Tanaman1 from './component/Tanaman1';
import Tanaman2 from './component/Tanaman2';
import Tanaman3 from './component/Tanaman3';
import Tanaman4 from './component/Tanaman4';
import Tanaman5 from './component/Tanaman5';
import Tanaman6 from './component/Tanaman6';
import Tanaman7 from './component/Tanaman7';
import Tanaman8 from './component/Tanaman8';
import Tanaman9 from './component/Tanaman9';
import Tanaman10 from './component/Tanaman10';
import Tanaman11 from './component/Tanaman11';
import Tanaman12 from './component/Tanaman12';
import Cart from './component/Cart';


const App = ()=> {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/tanaman1' element={<Tanaman1/>} />
          <Route path='/tanaman2' element={<Tanaman2/>} />
          <Route path='/tanaman3' element={<Tanaman3/>} />
          <Route path='/tanaman4' element={<Tanaman4/>} />
          <Route path='/tanaman5' element={<Tanaman5/>} />
          <Route path='/tanaman6' element={<Tanaman6/>} />
          <Route path='/tanaman7' element={<Tanaman7/>} />
          <Route path='/tanaman8' element={<Tanaman8/>} />
          <Route path='/tanaman8' element={<Tanaman9/>} />
          <Route path='/tanaman10' element={<Tanaman10/>} />
          <Route path='/tanaman11' element={<Tanaman11/>} />
          <Route path='/tanaman12' element={<Tanaman12/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
