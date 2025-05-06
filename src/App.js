import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages';
import Error404 from './pages/nopage';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './pages/layout';
import Stay from './components/stay';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
