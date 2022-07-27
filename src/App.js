import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Courses from './pages/Courses';

function App() {
  return (
        <Routes>
        <Route element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        </Routes>
        
  );
}

export default App;
