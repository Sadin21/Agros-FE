import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Reigster';
import About from './pages/About';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import { GlobalProvider } from './contexts/GlobalContext';

function App() {

  const LoginRoute = (props) => {

    if (Cookies.get('token') !== undefined) {
      return <Navigate to={'/'} />
    } else if (Cookies.get('token') === undefined) {
      return props.children
    }

  }

  const LoggedInRoute = (props) => {

    if (Cookies.get('token') !== undefined) {
      return props.children
    } else if (Cookies.get('token') === undefined) {
      return <Navigate to={'/login'} />
    }

  }

  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={
              <LoginRoute>
                <Login />
              </LoginRoute>
            } />
            <Route path='/register' element={
              <LoggedInRoute>
                <Register />
              </LoggedInRoute>
            } />
            <Route path='/about' element={<About />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
