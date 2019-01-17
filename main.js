const defaultState = { counter: 0 };
const content = document.getElementById('content');

const { createStore } = window.Redux;
const { createAction, handleActions } = window.ReduxActions;

// create actions
const increment = createAction('INCREMENT');
const decrement = createAction('DECREMENT');

// write a reducer to handle the action
const reducer = handleActions(
  {
    [increment]: state => ({ ...state, counter: state.counter + 1 }),
    [decrement]: state => ({ ...state, counter: state.counter - 1 })
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
