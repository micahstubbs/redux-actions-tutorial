const defaultState = { counter: 0 };
const content = document.getElementById('content');

const { createStore } = window.Redux;
const { createAction, handleAction } = window.ReduxActions;

// create an action
const increment = createAction('INCREMENT');

// write a reducer to handle the action
const reducer = handleAction(
  increment,
  (state, action) => ({
    ...state,
    counter: state.counter + 1
  }),
  defaultState
);

// create a store
const store = createStore(reducer, defaultState);

document.getElementById('increment').addEventListener('click', () => {
  store.dispatch(increment());
});

// render the counter value
const render = () => {
  content.innerHTML = store.getState().counter;
};

store.subscribe(render);

render();
