import {
    SET_DDR,
    SET_QUANTITY_DDR,
    SET_HDD,
    SET_QUANTITY_HDD,
    SET_CPU,
    SET_MOTHERBOARD,
    SET_DYNAMIC_DDR,
    SET_DYNAMIC_HDD,
    SET_DYNAMIC_CPU,
    SET_DYNAMIC_MOTHERBOARD,
    SET_ENABLED_CPU_INPUT,
    SET_DISABLED_CPU_INPUT,
    SET_DISABLED_SELECTS_HDD,
    SET_ENABLED_SELECTS_HDD,
    SET_DISABLED_SELECTS_DDR,
    SET_ENABLED_SELECTS_DDR,

    SET_BOOT_PRIORITY,
    SET_STATE_CORES,
    SET_REQ_MULT_ARRAY,
    SET_REQ_MULT,
    SET_MODE_MULT,
    SET_BUS_FREQ_MODIFYED,
    SET_DATE_TIME_SETUP,
    SET_RAID_CREATED,
    SET_SYNC_DDR,
    SET_INTERVAL_CPU_FREQ,
    SET_INTERVAL_TEMP
} from "./actions";


const initialState = {
    motherboard: {},  // выбранные компоненты
    cpu: {},
    quantity_hdd: null,
    listHdd: [],
    quantity_ddr: 0,
    listDdr: [],

    dynamicMotherboardList: [], // список доступных компонентов
    dynamicCPUList: [],
    dynamicHDDList: [],
    dynamicDDRList: [],

    ena_cpu_input: false,
    ena_create_selects: false,
    ena_create_ddr_selects: false,

    interval_temp: [0,0],
    interval_freq_cpu: [0,0],
    sync_ddr: false,
    raid_created: false,
    date_time_setup: false,
    bus_freq_modifyed: false,
    mode_mult: '',
    req_mult: '',
    req_mult_array: [],
    state_cores: [],
    boot_priority: [],
}

export const createEmulatorReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_BOOT_PRIORITY:
            return {
                ...state,
                boot_priority: action.payload
            }
        case SET_STATE_CORES:
            return {
                ...state,
                state_cores: action.payload
            }
        case SET_REQ_MULT_ARRAY:
            return {
                ...state,
                req_mult_array: action.payload
            }

        case SET_REQ_MULT:
            return {
                ...state,
                req_mult: action.payload
            }
        case SET_MODE_MULT:
            return {
                ...state,
                mode_mult: action.payload
            }
        case SET_BUS_FREQ_MODIFYED:
            return {
                ...state,
                bus_freq_modifyed: action.payload
            }
        case SET_DATE_TIME_SETUP:
            return {
                ...state,
                date_time_setup: action.payload
            }

        case SET_RAID_CREATED:
            return {
                ...state,
                raid_created: action.payload
            }
        case SET_SYNC_DDR:
            return {
                ...state,
                sync_ddr: action.payload
            }
        case SET_INTERVAL_CPU_FREQ:
            return {
                ...state,
                interval_freq_cpu: action.payload
            }
        case SET_INTERVAL_TEMP:
            return {
                ...state,
                interval_temp: action.payload
            }
        case SET_DISABLED_SELECTS_DDR:
            return {
                ...state,
                ena_create_ddr_selects: action.payload
            }
        case SET_ENABLED_SELECTS_DDR:
            return {
                ...state,
                ena_create_ddr_selects: action.payload
            }
        case SET_DISABLED_SELECTS_HDD:
            return {
                ...state,
                ena_create_selects: action.payload
            }
        case SET_ENABLED_SELECTS_HDD:
            return {
                ...state,
                ena_create_selects: action.payload
            }
        case SET_MOTHERBOARD:
            return {
                ...state,
                motherboard: action.payload
            }
        case SET_CPU:
            return {
                ...state,
                cpu: action.payload
            }
        case SET_QUANTITY_HDD:
            let arr = [];
            for(let i = 0; i < action.payload; i++){
                arr.push({id: i});
            }
            return  {
                ...state,
                quantity_hdd: action.payload,
                listHdd: arr
            }
        case SET_QUANTITY_DDR:
            return {
                ...state,
                quantity_ddr: action.payload
            }
        case SET_HDD:
            return {
                ...state,
                listHdd: action.payload
            }
        case SET_DDR:
            return {
                ...state,
                listDdr: action.payload
            }
        case SET_DYNAMIC_MOTHERBOARD:
            return {
                ...state,
                dynamicMotherboardList: action.payload
            }
        case SET_DYNAMIC_CPU:
            return {
                ...state,
                dynamicCPUList: action.payload
            }
        case SET_DYNAMIC_HDD:
            return {
                ...state,
                dynamicHDDList: action.payload
            }
        case SET_DYNAMIC_DDR:
            return {
                ...state,
                dynamicDDRList: action.payload
            }
        case SET_ENABLED_CPU_INPUT:
            return {
                ...state,
                ena_cpu_input: action.payload
            }
        case SET_DISABLED_CPU_INPUT:
            return {
                ...state,
                ena_cpu_input: action.payload
            }
    }
    return state;
}