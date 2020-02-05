const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    switch(type) {
        case 'ADD_NAME':
            return [
                ...state,
                action.name
            ]
            break;

        default:
            return state;
    }
    // Add a Name Tag

    return state;
}