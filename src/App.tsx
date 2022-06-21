import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import { InputPage } from '../src/docs/views/index'

function App() {
  return (
      <Router basename=''>
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
          <Routes>
        <Route path="/" />
        <Route path="/inputpage" element={<InputPage />} />
      </Routes>
        </div>
      </Router>
    )
}

export default App;
