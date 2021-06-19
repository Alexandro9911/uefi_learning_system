import {
    INIT_PRACTICE_RESULTS,
    ACTION_RESULTS_PAGE,
    SET_LIST_RESULTS_OF_PRACTICE,
    SET_PRACTICE_RESULT
} from "./actions";

const initialState = {
    fio: '',
    user_id: 0,
    group_id: 0,
    practice_id: 0,
    emulator_str: '',
    result: {},

    ena_results: false,
    listResults: []
}

export const practiceResultsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_LIST_RESULTS_OF_PRACTICE:
            return {
                ...state,
                listResults: JSON.parse(action.payload)
            }
        case INIT_PRACTICE_RESULTS:
            return {
                ...state,
                result: JSON.parse(action.payload)
            }
        case ACTION_RESULTS_PAGE:
            return {
                ...state,
                ena_results: action.payload
            }
        case SET_PRACTICE_RESULT:
            return {
                ...state,
                result: action.payload
            }
    }
    return state
}