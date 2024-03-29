import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import SignIn from './components/signIn/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/mainPage/MainPage';
import Add from './components/addComics/Add';
import Dc from './components/dc-comics/Dc';
import SignUp from "../src/components/signUp/SignUp.js"
import Contact from "../src/components/contactUs/Contact.js"
import Marvel from "../src/components/marvel/Marvel.js"
import Cart from "../src/components/cart/Cart.js"

function App() {
  return (
    <BrowserRouter basename="/">

      <div>

<Navbar/>



        {/* link between pages */}
        <Routes>
 
          <Route path="/mainpage" element={<MainPage />}>
           
          </Route>
        
          <Route path="/cart" element={<Cart />} />
          <Route path="/marvel" element={<Marvel />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/additem" element={<Add />}>
         
          </Route>
          
          <Route path="/dc" element={<Dc />}>
         
          </Route>
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
