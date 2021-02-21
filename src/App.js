import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
      </BrowserRouter>
    </div>
  );
}

export default App;
