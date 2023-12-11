import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddUser from './components/pages/User/AddUser';
import EditUser from './components/pages/User/EditUser';
import ViewUser from './components/pages/User/ViewUser';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/contact' element={<Contact />}/>

        <Route exact path='/users/add' element={<AddUser />}/>
        <Route exact path='/users/edit/:userId' element={<EditUser />}/>
        <Route exact path='/users/view/:userId' element={<ViewUser />}/>

        <Route exact path='*' element={<NotFound />}/>
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;
