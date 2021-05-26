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
    SET_DYNAMIC_MOTHERBOARD
} from "./actions";


const initialState = {
    motherboard: {},
    cpu: {},
    quantity_hdd: 0,
    listHdd: [],
    quantity_ddr: 0,
    listDdr: [],

    dynamicMotherboardList: [],
    dynamicCPUList: [],
    dynamicHDDList: [],
    dynamicDDRList: []
}

export const createEmulatorReducer = (state = initialState, action) => {
    switch (action.type) {
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
            return  {
                ...state,
                quantity_hdd: action.payload
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
    }
}