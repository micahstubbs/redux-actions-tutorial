const defaultState = { counter: 0 };

const content = document.getElementById('content');

const render = () => {
  content.innerHTML = defaultState.counter;
};

render();

//
//
//

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
const store = createStore(reducer, defaultState)