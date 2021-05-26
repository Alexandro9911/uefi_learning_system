import {
    SELECT_GROUP_PRACTICE_CREATE,
    CHANGE_TASK_STRING,
    CHANGE_DATE_FROM,
    CHANGE_DATE_TO,
    CHANGE_THEME
} from "./actions";

const initialState = {
    group_id: 0,
    group_title: "",
    task_string: "",
    theme: "",
    date_from: "",
    date_to: ""
}

export const practiceCreateReducer = (state = initialState,action) => {
    switch (action.type) {
        case  SELECT_GROUP_PRACTICE_CREATE:
            return {
                ...state,
                group_id: action.payload.group_id,
                group_title: action.payload.group_title
            }
        case CHANGE_TASK_STRING:
            return {
                ...state,
                task_string: action.payload
            }
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.payload
            }
        case CHANGE_DATE_FROM:
            return {
                ...state,
                date_from: action.payload
            }
        case CHANGE_DATE_TO:
            return {
                ...state,
                date_to: action.payload
            }
    }
    return state;
}