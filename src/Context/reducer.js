export const actionType = {
    SET_SHOW_FORM : 'SET_SHOW_FORM',
    SET_SHOW_LOGIN : 'SET_SHOW_LOGIN',
}


function reducer(state , action) {
    switch (action.type) {
        case actionType.SET_SHOW_FORM:
           return {
            ...state,
            showform: action.showform,
           }
        case actionType.SET_SHOW_LOGIN:
           return {
            ...state,
            showlogin: action.showlogin,
           }
        default:
           return state;
    }
}

export default reducer;