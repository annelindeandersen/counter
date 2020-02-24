const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    if (action.type === 'STORE_RESULT') {
        return {
            ...state,
            results: state.results.concat({ id: new Date(), value: action.countResult + ' ' + action.textResult })
        }
    }

    return state;
};

export default reducer;