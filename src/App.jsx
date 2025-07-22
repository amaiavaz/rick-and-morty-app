import { BrowserRouter } from 'react-router';
import './App.css'
import { NavbarApp } from './components/navbarApp/NavbarApp';

function App() {

  return (
    <BrowserRouter>
      <header>
        <NavbarApp />
      </header>
    </BrowserRouter>
  )
}

export default App
