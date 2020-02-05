const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    switch(type) {
        case 'RANDOMIZE_CARD_1':
            return [
                action.card,
                ...state.slice(1)
            ]
            break;

        case 'RANDOMIZE_CARD_2':
                return [
                    ...state.slice(0, 1),
                    action.card
                ]
                break;

        default:
            return state;
    }

    return state;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    
    return state;
}