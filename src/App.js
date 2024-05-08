import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import Feedback from './components/Feedback/Feedback'
import Statistics from './components/Statistics/Statistics'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/components/Home/Home" element={<Home />} />
        <Route path="/components/Signup/Signup" element={<Signup />} />
        <Route path="/components/Feedback/Feedback" element={<Feedback />} />
        <Route path="/components/Statistics/Statistics" element={<Statistics />} />
      </Routes>

    </Router>
  );
}

export default App;
