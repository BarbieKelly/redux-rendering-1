const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const height = document.getElementById('height');
const width = document.getElementById('width');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

height.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch ({
        type: 'INCREMENT_HEIGHT',
        height: height
    })
})

// case 'INCREMENT_HEIGHT':
// case 'INCREMENT_WIDTH':
// case 'CHANGE_COLOR':
// const addCircle = document.getElementById('addCircle');

// addCircle.addEventListener('click', (e) => {
//     e.preventDefault();
//     var randomRadius = Math.floor(Math.random() * 100);
//     var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    
//     const circle = {
//         radius: randomRadius,
//         color: randomColor
//     }

//     dispatch({
//         type: 'ADD_CIRCLE',
//         circle: circle
//     })
// })