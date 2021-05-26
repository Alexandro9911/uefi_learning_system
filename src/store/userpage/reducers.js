import {
    USER_SET_PRACTICE,
    USER_SET_TESTS,
    USER_SET_GROUPS
} from "./actions";

const initialState = {
    groups: [],
    tests: [],
    practice: [],
}

export const userActivityReducer = (state = initialState, action) =>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case USER_SET_GROUPS:
            return {
                ...state,
                groups: action.payload
            }
        case USER_SET_TESTS:
            return {
                ...state,
                tests: action.payload
            }
        case USER_SET_PRACTICE:
            return {
                ...state,
                practice: action.payload
            }
    }
    return state;
}