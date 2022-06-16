import React from 'react';
import './App.css';
import {BoxPage, InputPage} from './views/index'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App: React.FC = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/inputpage">Input Page</Link>
              </li>
              <li>
                <Link to="/BoxPage">Box Page</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/inputpage">
              <InputPage />
            </Route>
            <Route path="/boxpage">
              <BoxPage />
            </Route>
            <Route path="/">

            </Route>
          </Routes>
        </div>
      </Router>
    )
}

export default App;
