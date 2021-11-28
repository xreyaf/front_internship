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

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = './js/scripts.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <Router>
        <Header />
        <Suspense fallback={<div>Загрузка...</div>}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Home />
                  <Article />
                </>
              }
            />
            <Route exact path="/cards" element={<Cards />} />
            <Route exact path="/forms" element={<Forms />} />
            <Route exact path="/scripts" element={<Interaction />} />
            <Route path="*" element={() => 'ERROR 404 NOT FOUND'} />
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    );
  }
}

export default App;
