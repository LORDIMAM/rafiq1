import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import chatbotimg from './assets/images/chatbot.png';
import './App.css';
import Home from './pages';
import Error404 from './pages/nopage';
import Services from './pages/services';
import About from './pages/about';
import Contact from './pages/contact';
import Layout from './pages/layout';
import Stay from './components/stay';
import Chatbot from './components/chatbot';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <span className="loader"></span>
        <h1>loading...</h1>
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Layout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/stay" element={<Stay />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>

      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>

      {/* Chatbot Toggle */}
      <button className="chatbot-toggle" onClick={() => setShowChatbot(!showChatbot)}>
        <img src={chatbotimg} alt="Chatbot" className='chatbot-img'/>
      </button>

      {/* Chatbot Window */}
      {showChatbot && <Chatbot onClose={() => setShowChatbot(false)} />}
    </div>
  );
}

export default App;
