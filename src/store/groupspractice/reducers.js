
import {
    SET_LIST_GROUPS_PRACTICE,
    ADD_PRACTICE_TO_GROUP,
    DELETE_PRACTICE_FROM_GROUP,
    SET_CURRENT_TASKS_GROUP
} from "./actions";

const initialState = {
    listGroups: [],
    practiceList: [],
    current_group: 0,
    list_tasks_of_group: []
}

export const practiceGroupReducer = (state = initialState, action) => {
    switch (action.type) {
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

