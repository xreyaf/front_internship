import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = React.memo(() => (
  <div className="container--nf">
    <br />
    <h1>404 error</h1>
    <h1>Страница не найдена</h1>
    <br />
    <Link to="/">Вернуться на главную</Link>
  </div>
));

export default NotFound;
