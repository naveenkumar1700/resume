
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}> 
            <Route path="/home" element={<Home />} />
            <Route path="/aboutme" element={<Home />} />
            <Route path="/contact" element={<Home />} />
            <Route path="/resume" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
