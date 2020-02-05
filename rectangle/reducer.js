const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;
    switch(type) {
        // ACTION 1 - Increment height by 10
        case 'INCREMENT_HEIGHT':
            return {
                ...state,
                height: action.height
            }
            break;
        // ACTION 2 - Increment width by 10
        case 'INCREMENT_WIDTH':
            return {
                ...state,
                width: action.width
            }
            break;
        // // ACTION 3 - Change the color
        case 'CHANGE_COLOR':
            return {
                ...state,
                color: action.color
            }
            break;
        default:
            return state;
    }
    return state;
}