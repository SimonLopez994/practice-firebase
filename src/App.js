import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Inicio from './components/inicio/inicio.component';
import Contacto from './components/contacto/contacto.component';
import SignIn from './components/sign-in/sign-in.component';
import Navigation from './routing/navigation/navigation.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Inicio />} />
        <Route path='contacto' element={<Contacto />} />
        <Route path='sign' element={<SignIn/>} />
      </Route>
    </Routes>
  )
}

export default App;
