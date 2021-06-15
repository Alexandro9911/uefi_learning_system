import {
    SET_GROUP_TESTS,
    SET_CREATE_TEST_DISABLED,
    SET_CREATE_TEST_ENABLED,
    SET_CURRENT_ANSWER,
    SET_CURRENT_QUEST,
    SET_CURRENT_TEST,
    SET_GROUP_FOR_TEST,
    SET_THEME_TEST,
    SET_NAME_TEST,
    SET_QUANTITY_QUEST,
    SET_CURR_SELECTION_TEST,
    SET_CURR_GROUP_TESTS,
    SET_LIST_TESTS,
    SET_CURRENT_GROUP_TEST_SELECTED,
    ACTION_MODAL
} from "./actions";

const initialState = {
    current_test: [],
    current_quest: "",
    current_answer: "",

    quant_quest: 0,
    name_test: "",
    theme_test: "",
    for_group_test: 0,

    curr_selection: null,

    selected_group: null,
    ena_tests: false,

    list_test: [],
    group_tests: [],
    form_create_ena: false
}

export const teacherTestReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_GROUP_TEST_SELECTED:
            return {
                ...state,
                selected_group: action.payload
            }
        case ACTION_MODAL:
            return {
                ...state,
                ena_tests: action.payload
            }
        case SET_CURR_GROUP_TESTS:
            return {
                ...state,
                selected_group: action.payload
            }
        case SET_CURR_SELECTION_TEST:
            return {
                ...state,
                curr_selection: action.payload
            }
        case SET_QUANTITY_QUEST:
            let res;
            if(action.payload.isNaN){
                res = 0
            } else {
                res = action.payload
            }
            return {
                ...state,
                quant_quest: res
            }
        case SET_NAME_TEST:
            return {
                ...state,
                name_test: action.payload
            }
        case SET_THEME_TEST:
            return {
                ...state,
                theme_test: action.payload
            }
        case SET_GROUP_FOR_TEST:
            return {
                ...state,
                for_group_test: action.payload
            }
        case SET_CREATE_TEST_DISABLED:
            return  {
                ...state,
                form_create_ena: false
            }
        case SET_CREATE_TEST_ENABLED:
            return {
                ...state,
                form_create_ena: true
            }
        case SET_CURRENT_TEST:
            return {
                ...state,
                current_test: action.payload
            }
        case SET_CURRENT_QUEST:
            return {
                ...state,
                current_quest: action.payload
            }
        case SET_CURRENT_ANSWER:
            return {
                ...state,
                current_answer: action.payload
            }
        case SET_GROUP_TESTS:
            return  {
                ...state,
                group_tests: action.payload
            }
    }
    return state
}