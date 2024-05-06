import Signup from "./components/Signup/Signup";
import Header from "./components/Header/Header";
import Statistics from "./components/Statistics/Statistics";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="/components/Statistics/Statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;
