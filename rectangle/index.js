const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const height = document.getElementById('height');
const width = document.getElementById('width');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

const currentRectangle = document.getElementById('rectangleContainer');

height.addEventListener('click', (e) => {
    e.preventDefault();
    var rectangleHeight = parseInt(currentRectangle.childNodes[1].style.height.slice(0,3));
    dispatch ({
        type: 'INCREMENT_HEIGHT',
        height: rectangleHeight + 10
    })
})

width.addEventListener('click', (e) => {
    e.preventDefault();
    var rectangleWidth = parseInt(currentRectangle.childNodes[1].style.width.slice(0,3));
    dispatch ({
        type: 'INCREMENT_WIDTH',
        width: rectangleWidth + 10
    })
})
red.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch ({
        type: 'CHANGE_COLOR',
        color: '#F00'
    })
})

blue.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch ({
        type: 'CHANGE_COLOR',
        color: '#00F'
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