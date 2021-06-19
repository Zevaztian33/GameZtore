import React from 'react';
import NavBar from './components/NavBar/index';
import Home from './components/Home/index';
import Catalogue from './components/Catalogue/index';
import Footer from './components/Footer/index';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { AddCartProvider } from './context/AddCartContext'

function App() {
  
   return (
    <AddCartProvider>
      <div>
        <Router>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={ Home }/>
            <Route path="/catalogue" component={ Catalogue }/>
          </Switch>
        </Router>
        <Footer/>
      </div>
    </AddCartProvider>
  );
}

export default App;