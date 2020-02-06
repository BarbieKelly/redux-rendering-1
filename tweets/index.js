const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const sortLikes = document.getElementById('sortLikes');
const sortRetweets = document.getElementById('sortRetweets');
const sortReplies = document.getElementById('sortReplies');


sortLikes.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch ({
        type: 'SORT_LIKES'
    })
})

sortRetweets.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch ({
        type: 'SORT_RETWEETS'
    })
})

sortReplies.addEventListener('click', (e) => {
    e.preventDefault();
    dispatch ({
        type: 'SORT_REPLIES'
    })
})