import React from 'react';
import { Clock, Calculate, ConsoleLogic, Requests, DataProvider } from '.';
import Posts from './Posts';

const Interaction = () => {
  return (
    <section className="interaction section">
      <div className="interaction__container container">
        <h1 className="interaction__title">Секция взаимодействия</h1>
        <Clock /> <br />
        <Calculate />
        <ConsoleLogic />
        <Requests />
        <br />
        <h3>Использование кастомного хука</h3>
        <DataProvider
          renderContent={(data, isLoading) => (
            <Posts data={data} isLoading={isLoading} />
          )}
        />
      </div>
    </section>
  );
};

export default Interaction;
