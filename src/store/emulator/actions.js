export const INIT_EMULATOR_STORE = 'INIT_EMULATOR_STORE';
export const CHANGE_TO_EZ_MODE = 'CHANGE_TO_EZ_MODE';
export const CHANGE_TO_ADVANCED_MODE = 'CHANGE_TO_ADVANCED_MODE';

export const SET_DATE_SYSTEM = 'SET_DATE_SYSTEM';
export const SET_TIME_SYSTEM = 'SET_TIME_SYSTEM';

export const SET_TEMPERATURE_CPU = 'SET_TEMPERATURE_CPU';
export const SET_TEMPERATURE_MB = 'SET_TEMPERATURE_MB';

export const SET_BOOT_PRIORITY = 'SET_BOOT_PRIORITY';
export const SET_PAGE = 'SET_PAGE';
export const SET_CPU_SPEED = 'SET_CPU_SPEED';

export const SET_TEMPERATURE = 'SET_TEMPERATURE';
export const SET_CPU_FAN_SPEED = 'SET_CPU_FAN_SPEED';

export const SET_TOTAL_MEM = 'SET_TOTAL_MEM';

export const setTotalMem = (value) => ({
    type: SET_TOTAL_MEM,
    payload: value
})

export const setCPUtemperature = (value) => ({
    type: SET_TEMPERATURE,
    payload: value
});

export const setCPUfanSpeed = (value) => ({
    type: SET_CPU_FAN_SPEED,
    payload: value
});


export const setCPUfreq = (value) => ({
    type: SET_CPU_SPEED,
    payload: value
});

export const setPage = (str) => ({
    type: SET_PAGE,
    payload: str
});

export const setBootPriority = (str) => ({
    type: SET_BOOT_PRIORITY,
    payload: str
});

export const setTempCpu = (temp) => ({
   type: SET_TEMPERATURE_CPU,
   payload: temp
});

export const setTempMb = (temp) => ({
    type: SET_TEMPERATURE_MB,
    payload: temp
});


export const initEmulatorStore = (obj) => ({
    type: INIT_EMULATOR_STORE,
    payload: obj
});

export const changeToEzMode = () => ({
    type: CHANGE_TO_EZ_MODE,
    payload: false
});

export const changeToAdvancedMode = () => ({
    type: CHANGE_TO_ADVANCED_MODE,
    payload: true
});

export const setDateSystem = (date) => ({
    type: SET_DATE_SYSTEM,
    payload: date
});

export const setTimeSystem = (time) => ({
    type: SET_TIME_SYSTEM,
    payload: time
})