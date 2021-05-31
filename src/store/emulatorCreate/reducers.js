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
    SET_ENABLED_SELECTS_DDR
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
    ena_create_ddr_selects: false
}

export const createEmulatorReducer = (state = initialState, action) => {
    switch (action.type) {
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