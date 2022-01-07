import { useState } from 'react';
import {
  amountAdded,
  decremented,
  incremented
} from '../redux-toolkit/app/features/counter/counterSlice';
import { useFetchBreedsQuery } from '../redux-toolkit/app/features/dogs/dogsApiSlice';
import { useAppDispatch, useAppSelector } from '../redux-toolkit/app/hooks';

const ReduxToolkit = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const [numDogs, setNumDogs] = useState(5);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <section className="redux section">
      <div className="redux__container container ">
        <h1 className="redux__title">Немножко Redux</h1>
        <h2>Счетчик</h2>
        <p>Значение: {count}</p>
        <button
          type="button"
          className=" redux__button button"
          onClick={() => dispatch(incremented())}>
          +1
        </button>
        <button
          type="button"
          className=" redux__button button"
          onClick={() => dispatch(decremented())}>
          -1
        </button>
        <button
          type="button"
          className=" redux__button button warning"
          onClick={() => dispatch(amountAdded(3))}>
          + 3
        </button>
        <br />

        <div>
          <h2>Загрузка данных</h2>
          <p>Сколько собачек загрузить?</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <div>
          <br />
          <p>Количество загруженных собачек: {data?.length}</p>
          {isFetching && <div>Загрузка собачек...</div>}
          <table>
            <thead>
              <tr>
                <th>Порода</th>
                <th>Изображение</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((breed) => (
                <tr key={breed.id}>
                  <td>{breed.name}</td>
                  <td>
                    <img
                      src={breed.image.url}
                      alt={breed.name}
                      height={50}
                      width={250}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ReduxToolkit;
