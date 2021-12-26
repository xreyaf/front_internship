/* eslint-disable react/prefer-stateless-function */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'boxicons';
import './scss/styles.scss';
import { Header, Footer } from './components';

const Home = lazy(() => import('./components/Home'));
const Article = lazy(() => import('./components/Article'));
const Cards = lazy(() => import('./components/Cards'));
const Forms = lazy(() => import('./components/Forms'));
const Interaction = lazy(() => import('./components/Interaction'));
const NotFound = lazy(() => import('./components/NotFound'));

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Article />
                </>
              }
            />
            <Route path="/cards" element={<Cards />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/scripts" element={<Interaction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    );
  }
}

export default App;
