export const actionType = {
    SET_SHOW_FORM : 'SET_SHOW_FORM',
    SET_SHOW_LOGIN : 'SET_SHOW_LOGIN',
    SET_MORNING_SEATS: 'SET_MORNING_SEATS',
    SET_EVENING_SEATS: 'SET_EVENING_SEATS',
    SET_UNIQUE_ID: 'SET_UNIQUE_ID',
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
        case actionType.SET_MORNING_SEATS:
           return {
            ...state,
            morningSeats: action.morningSeats,
           }
        case actionType.SET_EVENING_SEATS:
            return {
             ...state,
             eveningSeats: action.eveningSeats,
            }
        case actionType.SET_UNIQUE_ID:
                return {
                 ...state,
                 uniqueID: action.uniqueID,
            }   
        default:
           return state;
    }
}

export default reducer;