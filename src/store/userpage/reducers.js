import {
    USER_SET_PRACTICE,
    USER_SET_TESTS,
    USER_SET_GROUPS,
    EMULATOR_CLOSED,
    EMULATOR_STARTED
} from "./actions";

const initialState = {
    groups: [],
    tests: [],
    practice: [],
    emulator_status: false
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
        case EMULATOR_STARTED:
            return  {
                ...state,
                emulator_status: action.payload
            }
        case EMULATOR_CLOSED:
            return {
                ...state,
                emulator_status: action.payload
            }
    }
    return state;
}