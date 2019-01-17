const defaultState = { counter: 0 };
const content = document.getElementById('content');

const { createStore } = window.Redux;
const { createActions, handleActions, combineActions } = window.ReduxActions;

// create actions
const { increment, decrement } = createActions({
  INCREMENT: (amount = 1) => ({ amount }),
  DECREMENT: (amount = 1) => ({ amount: -amount })
});

// write a reducer to handle the action
const reducer = handleActions(
  {
    [combineActions(increment, decrement)]: (
      state,
      { payload: { amount } }
    ) => {
      return {
        ...state,
        counter: state.counter + amount
      };
    }
  },
  defaultState
);

// create a store
const store = createStore(reducer, defaultState);

document
  .getElementById('increment')
  .addEventListener('click', () => store.dispatch(increment()));

document
  .getElementById('decrement')
  .addEventListener('click', () => store.dispatch(decrement()));

// render the counter value
const render = () => {
  content.innerHTML = store.getState().counter;
};

store.subscribe(render);

render();
