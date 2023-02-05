export const actionType = {
    SET_SHOW_FORM : 'SET_SHOW_FORM',
    SET_SHOW_LOGIN : 'SET_SHOW_LOGIN',
    SET_MORNING_SEATS: 'SET_MORNING_SEATS',
    SET_EVENING_SEATS: 'SET_EVENING_SEATS',
    SET_UNIQUE_ID: 'SET_UNIQUE_ID',
    SET_USER_NAME:'SET_USER_NAME',
    SET_USER_EMAIL:'SET_USER_EMAIL',
    SET_MORNING_SHOW:'SET_MORNING_SHOW',
    SET_EVENING_SHOW:'SET_EVENING_SHOW',
    SET_BOOKING_DATE:'SET_BOOKING_DATE',
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
        case actionType.SET_USER_NAME:
                return {
                 ...state,
                 username: action.username,
            }
        case actionType.SET_USER_EMAIL:
                return {
                 ...state,
                 userEmail: action.userEmail,
            }
        case actionType.SET_MORNING_SHOW:
                return {
                 ...state,
                 morningShow: action.morningShow,
            }
        case actionType.SET_EVENING_SHOW:
                return {
                 ...state,
                 eveningShow: action.eveningShow,
            }
        case actionType.SET_BOOKING_DATE:
                return {
                 ...state,
                 bookDate: action.bookDate,
            }
        default:
           return state;
    }
}

export default reducer;