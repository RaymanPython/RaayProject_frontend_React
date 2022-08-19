import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';
// import Form from './pages/Form';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
        <Routes>
        <Route element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
          <Route path="registration" element={<Registration/>} />
          <Route path="login" element={<Login/>} />
        </Route>
        </Routes>
        
  );
}

export default App;
