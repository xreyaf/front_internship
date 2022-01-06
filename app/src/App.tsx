import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'boxicons';
import './scss/styles.scss';
import { Header, Footer, Home, Article, Forms } from './components';
import Cards from './components/Cards';
import Interaction from './components/Interaction';
import NotFound from './components/NotFound';
import Redux from './components/Redux';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Article />
              <Redux />
            </>
          }
        />
        <Route path="/cards" element={<Cards />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/scripts" element={<Interaction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
