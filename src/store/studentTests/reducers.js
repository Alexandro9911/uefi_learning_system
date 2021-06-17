import {
    SET_LIST_TESTS,
    FINISH_TEST,
    SET_LIST_QUEST,
    START_TEST,
    SET_LIST_ANSWER,
    SET_CURR_ANSWER,
    ACTION_ENA_RESULT,
    SET_TEST_RESULT,
    SET_SELECTED_ID
} from "./actions";

const initialState = {
    list_tests: [],

    ena_screen_test: false,
    ena_screen_result: false,

    current_test: 0,
    curr_list_quest: [],
    curr_list_answers: [],

    selected_id: 0,
    curr_answer: -1,
    result: {}
}

export const studentTestReducer =(state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_ID:
            return {
                ...state,
                selected_id: action.payload
            }
        case SET_TEST_RESULT:
            return {
                ...state,
                result: action.payload
            }
        case ACTION_ENA_RESULT:
            return {
                ...state,
                ena_screen_result: action.payload
            }
        case SET_CURR_ANSWER:
            return {
                ...state,
                curr_answer: action.payload
            }
        case SET_LIST_ANSWER:
            return {
                ...state,
                curr_list_answers: action.payload
            }
        case START_TEST:
            return {
                ...state,
                current_test: action.payload,
                ena_screen_test: true
            }
        case FINISH_TEST:
            return {
                ...state,
                ena_screen_test: false,
                current_test: 0
            }
        case SET_LIST_QUEST:
            return {
                ...state,
                curr_list_quest: action.payload
            }
        case SET_LIST_TESTS:
            return {
                ...state,
                list_tests: action.payload
            }
    }
    return state
}