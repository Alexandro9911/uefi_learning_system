import {SET_PRACTICE_STUDENT,SET_CURRENT_PRACTICE} from "./actions";
const initialState = {
    listPractice: [],
    current_practice: null
}

export const studentsPracticeReducer =(state = initialState, action) => {
    switch (action.type) {
        case SET_PRACTICE_STUDENT:
            return{
                ...state,
                listPractice: action.payload
            }
        case SET_CURRENT_PRACTICE:
            return {
                ...state,
                current_practice: action.payload
            }
    }
    return state;
}
