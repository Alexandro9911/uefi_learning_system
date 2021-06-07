import {
    INIT_EMULATOR_STORE,
    CHANGE_TO_ADVANCED_MODE,
    CHANGE_TO_EZ_MODE,
    SET_TIME_SYSTEM,
    SET_DATE_SYSTEM,
    SET_TEMPERATURE_CPU,
    SET_TEMPERATURE_MB,
    SET_BOOT_PRIORITY,
    SET_PAGE,
    SET_CPU_SPEED,
    SET_CPU_FAN_SPEED,
    SET_TEMPERATURE,
    SET_TOTAL_MEM
} from "./actions";

const initialState = {
    emulator_object: {},

    temperature_cpu : 30,
    temperature_mb: 23,
    cpu_speed: 0,
    bus_speed: 0,
    multiplayer_str: '',
    multiplayer_mode: true,
    voltage_cpu: 1.3,
    voltage_low: 3.29,
    voltage_mid: 5.01,
    voltage_hight: 11.99,
    boot_priority_str: '',
    cpu_fan_speed: 0,
    total_mem: 0,

    advanced_mode: false,
    current_select: 'main'
}

export const emulatorRegucer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_TOTAL_MEM:
            return {
                ...state,
                total_mem: action.payload
            }
        case SET_TEMPERATURE:
            return {
                ...state,
                temperature_cpu: action.payload
            }
        case SET_CPU_FAN_SPEED:
            return {
                ...state,
                cpu_fan_speed: action.payload
            }

        case SET_CPU_SPEED:
            return {
                ...state,
                cpu_speed: action.payload
            }
        case SET_PAGE:
            return  {
                ...state,
                current_select: action.payload
            }
        case SET_BOOT_PRIORITY:
            return {
                ...state,
                boot_priority_str: action.payload
            }
        case SET_TEMPERATURE_MB:
            return {
                ...state,
                temperature_mb: action.payload
            }
        case SET_TEMPERATURE_CPU:
            return {
                ...state,
                temperature_cpu: action.payload
            }
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