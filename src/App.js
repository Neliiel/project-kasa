import { BrowserRouter as Router, Route} from 'react-router-dom';

import Home from "./pages/Home";
import About from './pages/About';
import Error from './pages/Error';
import Fiche from './pages/Fiche';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Fiche">
            <Fiche />
          </Route>
          <Route path="/Error">
            <Error />
          </Route>
        </Router>
      </main>
      < Footer />
    </div>
  );
}

export default App;
