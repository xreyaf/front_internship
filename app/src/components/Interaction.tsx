import React, { useState } from 'react';
import { Clock, Calculate, ConsoleLogic, Requests, DataProvider } from '.';
import useWindowEvent from '../hooks/useWindowEvent';
import Posts from './Posts';

const Interaction = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <section className="interaction section">
      <div className="interaction__container container">
        <h1 className="interaction__title">Секция взаимодействия</h1>
        <h2>
          {useWindowEvent('mousemove', (e: React.MouseEvent) =>
            setPosition({ x: e.clientX, y: e.clientY })
          )}
          Координаты мыши: {position.x}:{position.y}
        </h2>
        <Clock /> <br />
        <Calculate />
        <ConsoleLogic />
        <Requests />
        <br />
        <h3>Использование кастомного хука</h3>
        <DataProvider
          renderContent={(data: Array<any>, isLoading: boolean) => (
            <Posts data={data} isLoading={isLoading} />
          )}
        />
      </div>
    </section>
  );
};

export default Interaction;
