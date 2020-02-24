const initialState = {
    text: ''
}

const reducer = (state = initialState, action) => {
    if (action.type === 'SUBMIT_TEXT') {
        return {
            text: action.data
        }
    }
    return state;
}

export default reducer;