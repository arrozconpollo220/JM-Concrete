// importing React from the react module
import React from 'react';

// import ReactDom from 'react-dom';
import ReactDom from 'react-dom/client';

// Importing the createBrowserRouter and RouterProvider functions from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// importing bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the App component and the Error, Home, Contact, About, and Work pages
import App from './App';
import Error from './pages/Error';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Work from './pages/Work';

// Creating a new router using BrowserRouter from 'react-router-dom'
const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

ReactDom.createRoot(document.getElementById('root')).render(<Main />);