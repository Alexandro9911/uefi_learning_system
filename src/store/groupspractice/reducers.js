
import {
    SET_LIST_GROUPS_PRACTICE,
    ADD_PRACTICE_TO_GROUP,
    DELETE_PRACTICE_FROM_GROUP,
    SET_CURRENT_TASKS_GROUP,
    ACTION_ENA_LIST_RES
} from "./actions";

const initialState = {
    listGroups: [],
    practiceList: [],
    current_group: 0,
    list_tasks_of_group: [],

    ena_list_res: false
}

export const practiceGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_ENA_LIST_RES:
            return {
                ...state,
                ena_list_res: action.payload
            }
        case SET_LIST_GROUPS_PRACTICE:
            return {
                ...state,
                listGroups: action.payload
            }
        case ADD_PRACTICE_TO_GROUP:
            return {
                ...state,
                practiceList: action.payload
            }
        case SET_CURRENT_TASKS_GROUP:
            return {
                ...state,
                list_tasks_of_group: action.payload
            }
    }
    return state;
}

