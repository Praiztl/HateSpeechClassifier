import Statistics from './components/Statistics/Statistics'
import Header from "./components/Header/Header";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Feedback from './components/Feedback/Feedback';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route  path="/" Component={Signup}/>
        <Route  path="/home" Component={Home}/>
        <Route  path="/feedback" Component={Feedback}/>
        <Route  path="/statistics" Component={Statistics}/>
      </Routes>
      
    </Router>
  );
}

export default App;
