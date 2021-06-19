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
export const SET_DISABLED_SELECTS_DDR = 'SET_DISABLED_SELECTS_DDR';

export const SET_INTERVAL_TEMP = 'SET_INTERVAL_TEMP';
export const SET_INTERVAL_CPU_FREQ = 'SET_INTERVAL_CPU_FREQ';
export const SET_SYNC_DDR = 'SET_SYNC_DDR';
export const SET_RAID_CREATED = 'SET_RAID_CREATED';
export const SET_DATE_TIME_SETUP = 'SET_DATE_TIME_SETUP';
export const SET_BUS_FREQ_MODIFYED = 'SET_BUS_FREQ_MODIFYED';
export const SET_MODE_MULT = 'SET_MODE_MULT';
export const SET_REQ_MULT = 'SET_REQ_MULT';
export const SET_REQ_MULT_ARRAY = 'SET_REQ_MULT_ARRAY';
export const SET_STATE_CORES = 'SET_STATE_CORES';
export const SET_BOOT_PRIORITY = 'SET_BOOT_PRIORITY';

export const setBootPriority = (arr) => ({
    type: SET_BOOT_PRIORITY,
    payload: arr
});

export const setStateCores = (arr) => ({
    type: SET_STATE_CORES,
    payload: arr
});


export const setReqMultArray = (arr) => ({
    type: SET_REQ_MULT_ARRAY,
    payload: arr
});

export const setReqMult = (value) => ({
    type: SET_REQ_MULT,
    payload: value
});

export const setModeMult = (value) => ({
    type: SET_MODE_MULT,
    payload: value
});

export const setBusFreqModifyed = (stat) => ({
    type: SET_BUS_FREQ_MODIFYED,
    payload: stat
});

export const setDateTimeSetup = (stat) => ({
    type: SET_DATE_TIME_SETUP,
    payload: stat
});

export const setRaidCreated = (stat) => ({
    type: SET_RAID_CREATED,
    payload: stat
});

export const setSyncDDR = (stat) => ({
    type: SET_SYNC_DDR,
    payload: stat
});

export const setIntervalCpuFreq = (arr) => ({
    type: SET_INTERVAL_CPU_FREQ,
    payload: arr
});

export const setIntervalTemp = (arr) => ({
    type: SET_INTERVAL_TEMP,
    payload: arr
});


export const setSelectsDDRenabled = () => ({
    type: SET_ENABLED_SELECTS_DDR,
    payload: true
});

export const setSelectsDDRdisabled = () => ({
    type: SET_DISABLED_SELECTS_DDR,
    payload: false
});
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

export const setHDD = (hdd) => ({
    type: SET_HDD,
    payload: hdd
});

export const setQuantityDDR = (num) => ({
    type: SET_QUANTITY_DDR,
    payload: num
});

export const setDDR = (ddr) => ({
    type: SET_DDR,
    payload: ddr
})