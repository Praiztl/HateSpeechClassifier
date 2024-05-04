import Statistics from './components/Statistics/Statistics'
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Statistics/>
    </Router>
  );
}

export default App;
