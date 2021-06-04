import {
    INIT_EMULATOR_STORE,
    CHANGE_TO_ADVANCED_MODE,
    CHANGE_TO_EZ_MODE,
    SET_TIME_SYSTEM,
    SET_DATE_SYSTEM
} from "./actions";

const initialState = {
    emulator_object: {},
    advanced_mode: false
}

export const emulatorRegucer = (state = initialState, action) =>{
    switch (action.type) {
        case INIT_EMULATOR_STORE:
            return {
                ...state,
                emulator_object: JSON.parse(action.payload)
            }
        case CHANGE_TO_ADVANCED_MODE:
            return  {
                ...state,
                advanced_mode: action.payload
            }
        case CHANGE_TO_EZ_MODE:
            return  {
                ...state,
                advanced_mode: action.payload
            }
        case SET_DATE_SYSTEM:
            return {
                ...state,
                emulator_object: action.payload
            }
        case SET_TIME_SYSTEM:
            return {
                ...state,
                emulator_object: action.payload
            }
    }
    return  state
}