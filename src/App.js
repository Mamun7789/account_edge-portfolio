import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Home from './Pages/Home';
import Navigation from './Share/Navigation/Navigation';
import NotFound from './Share/NotFound/NotFound';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease',
      anchorPlacement: 'top-bottom'
    });
  }, [])

  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<NotFound />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
