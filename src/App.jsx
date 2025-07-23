import { BrowserRouter, Route, Routes } from 'react-router';
import { NavbarApp } from './components/navbarApp/NavbarApp';
import { Home } from './pages/home/Home';
import { Register } from './pages/register/Register';
import { RegisterOk } from './pages/registerOk/RegisterOk';
import { Login } from './pages/login/Login';
import { User } from './pages/user/User';
import { Characters } from './pages/chararcters/Characters';
import { ErrorPage } from './pages/errorPage/ErrorPage';

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavbarApp />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/register' element={<Register />} />
          <Route path='/registerOk' element={<RegisterOk />} />
          <Route path='/login' element={<Login />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
