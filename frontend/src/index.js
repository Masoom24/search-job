import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Home from './components/Home';
import JobCategories from './pages/JobCategories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div> {/* Parent div to wrap components */}
      <Header />
      <div className="pt-16"> {/* Add padding to push content below the header */}
        <Home />
        <JobCategories />
      </div>
    </div>
  </React.StrictMode>
);

reportWebVitals();
