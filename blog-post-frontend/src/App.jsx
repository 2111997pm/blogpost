import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/blogs"
            element={isAuthenticated ? <BlogList /> : <Navigate to="/login" />}
          />
          <Route
            path="/blogs/new"
            element={isAuthenticated ? <BlogForm /> : <Navigate to="/login" />}
          />
          <Route
            path="/blogs/edit/:id"
            element={isAuthenticated ? <BlogForm /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/blogs" />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
