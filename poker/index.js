const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store

const card1Button = document.getElementById('card1Button');
const card2Button = document.getElementById('card2Button');

const randomSuit = function() {
    var aNumber = Math.floor(Math.random() * 4) + 1; 
    if (aNumber == 1){
        return "C";
    } 
    if (aNumber == 2){
        return "D";
    } 
    if (aNumber == 3){
        return "H";
    } 
    else {
        return "S";
    }
}

const randomValue = function () {
    var aNumber = Math.floor(Math.random()*13) + 1;
    if (aNumber == 1) {
        return "A";
    }
    if (aNumber >2 && aNumber < 11) {
        return aNumber;
    }
    if (aNumber == 11) {
        return "J";
    }
    if (aNumber == 12) {
        return "Q";
    }
    else {
        return "K";
    }

}

card1Button.addEventListener('click', (e) => {
    e.preventDefault();

    const card = {
        value: randomValue(),
        suit: randomSuit()
    }
    console.log(card);
    dispatch({
        type: 'RANDOMIZE_CARD_1',
        card: card
    })
})

card2Button.addEventListener('click', (e) => {
    e.preventDefault();

    const card = {
        value: randomValue(),
        suit: randomSuit()
    }
    console.log(card);
    dispatch({
        type: 'RANDOMIZE_CARD_2',
        card: card
    })
})