const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const form = document.getElementById('nameForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = form.elements['name'].value;
    dispatch ({
        type: 'ADD_NAME',
        name: newName
    })
})