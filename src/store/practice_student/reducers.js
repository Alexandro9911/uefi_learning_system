import {SET_PRACTICE_STUDENT,SET_CURRENT_PRACTICE} from "./actions";
const initialState = {
    listPractice: [],
    current_practice: null,
    selected_practice: {}
}

export const studentsPracticeReducer =(state = initialState, action) => {
    switch (action.type) {
        case SET_PRACTICE_STUDENT:
            return{
                ...state,
                listPractice: action.payload
            }
        case SET_CURRENT_PRACTICE:
            let result = {}
            for(let i = 0; i < state.listPractice.length; i++){
                if(+state.listPractice[i].id === action.payload){
                    result = state.listPractice[i]
                }
            }
            return {
                ...state,
                current_practice: action.payload,
                selected_practice: result
            }
    }
    return state;
}
