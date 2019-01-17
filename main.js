const defaultState = { counter: 0 };

const content = document.getElementById('content');

const render = () => {
  content.innerHTML = defaultState.counter;
};

render();
