import 'bulma/css/bulma.css';
import './App.scss';
import classNames from 'classnames';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGoods, setSelectedGoods] = useState([]);

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoods.length === 0
          ? 'No goods selected'
          : `${selectedGoods} is selected`}
        <button
          data-cy="ClearButton"
          type="button"
          className="delete ml-3"
          disabled={selectedGoods.length === 0}
          onClick={() => setSelectedGoods([])}
        />
      </h1>

      <table className="table">
        {[...goods].map(good => {
          const isSelected = selectedGoods.includes(good);

          return (
            <tbody key={good}>
              <tr data-cy="Good">
                <td>
                  {isSelected ? (
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => {
                        setSelectedGoods(selectedGoods.filter(g => g !== good));
                      }}
                    >
                      -
                    </button>
                  ) : (
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      disabled={isSelected}
                      onClick={() => {
                        if (!isSelected && selectedGoods.length < 1) {
                          setSelectedGoods([...selectedGoods, good]);
                        }
                      }}
                    >
                      +
                    </button>
                  )}
                </td>
                <td
                  data-cy="GoodTitle"
                  className={classNames('is-vcentered', {
                    'has-background-success-light': isSelected,
                  })}
                >
                  {good}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </main>
  );
};
