import './App.css';
import Listuser from './Listuser';
import Forms from './Form';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">ReactXpress</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/listuser">List Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/form">Add User</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/listuser" replace />} /> {/* Redirect to Listuser by default */}
          <Route path="/listuser" element={<Listuser showForm={false} />} />
          <Route path="/form" element={<Forms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

