import {SHOW_MODAL_SET_TIME_DATE,HIDE_MODAL_SET_TIME_DATE} from "./actions";

const initialState = {
    modal_date_time : false
}

export const emulatorModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_SET_TIME_DATE:
            return {
                ...state,
                modal_date_time: action.payload
            }
        case HIDE_MODAL_SET_TIME_DATE:
            return {
                ...state,
                modal_date_time: action.payload
            }
    }
    return state
}