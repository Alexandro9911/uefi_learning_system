export const SET_MOTHERBOARD = 'SET_MOTHERBOARD';
export const SET_CPU = 'SET_CPU';
export const SET_QUANTITY_HDD = 'SET_QUANTITY_HDD';
export const SET_HDD = 'SET_HDD';
export const SET_QUANTITY_DDR = 'SET_QUANTITY_DDR';
export const SET_DDR = 'SET_DDR';

export const SET_DYNAMIC_MOTHERBOARD = 'SET_DYNAMIC_MOTHERBOARD';
export const SET_DYNAMIC_CPU = 'SET_DYNAMIC_CPU';
export const SET_DYNAMIC_HDD = 'SET_DYNAMIC_HDD';
export const SET_DYNAMIC_DDR = 'SET_DYNAMIC_DDR';

export const SET_ENABLED_CPU_INPUT = 'SET_ENABLED_CPU_INPUT';
export const SET_DISABLED_CPU_INPUT = 'SET_DISABLED_CPU_INPUT';

export const SET_ENABLED_SELECTS_HDD = 'SET_ENABLED_SELECTS_HDD';
export const SET_DISABLED_SELECTS_HDD = 'SET_DISABLED_SELECTS_HDD'

export const SET_ENABLED_SELECTS_DDR = 'SET_ENABLED_SELECTS_DDR';
export const SET_DISABLED_SELECTS_DDR = 'SET_DISABLED_SELECTS_DDR'

export const setSelectsDDRenabled = () => ({
    type: SET_ENABLED_SELECTS_DDR,
    payload: true
})

export const setSelectsDDRdisabled = () => ({
    type: SET_DISABLED_SELECTS_DDR,
    payload: false
})
export const setSelectsEnabled = () => ({
    type: SET_ENABLED_SELECTS_HDD,
    payload: true
});

export const setSelectsDisabled = () => ({
    type: SET_DISABLED_SELECTS_HDD,
    payload: false
});


export const setCpuInputEnabled = () => ({
    type: SET_ENABLED_CPU_INPUT,
    payload: true
});

export const setCpuInputDisabled = () => ({
    type: SET_DISABLED_CPU_INPUT,
    payload: false
});

export const setDynamicMotherBoard = (list) => ({
    type: SET_DYNAMIC_MOTHERBOARD,
    payload: list
});

export const setDynamicCPU = (list) => ({
    type: SET_DYNAMIC_CPU,
    payload: list
});

export const setDynamicHDD = (list) => ({
    type: SET_DYNAMIC_HDD,
    payload: list
});

export const setDynamicDDR = (list) => ({
   type: SET_DYNAMIC_DDR,
   payload: list
});

export const setMotherBoard = (motherboard) => ({
    type: SET_MOTHERBOARD,
    payload: motherboard
});

export const setCpu = (cpu) =>({
   type: SET_CPU,
   payload: cpu
});

export const setQuantityHdd = (num) => ({
    type: SET_QUANTITY_HDD,
    payload: num
});

export const setHDD = (index,hdd,length) => ({
    type: SET_HDD,
    payload: {
        index: index,
        hdd: hdd,
        length: length
    }
});

export const setQuantityDDR = (num) => ({
    type: SET_QUANTITY_DDR,
    payload: num
});

export const setDDR = (ddr) => ({
    type: SET_DDR,
    payload: ddr
})