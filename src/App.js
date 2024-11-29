import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/post/:id" element={<Post />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
