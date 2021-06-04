export const INIT_EMULATOR_STORE = 'INIT_EMULATOR_STORE';
export const CHANGE_TO_EZ_MODE = 'CHANGE_TO_EZ_MODE';
export const CHANGE_TO_ADVANCED_MODE = 'CHANGE_TO_ADVANCED_MODE';

export const SET_DATE_SYSTEM = 'SET_DATE_SYSTEM';
export const SET_TIME_SYSTEM = 'SET_TIME_SYSTEM';

export const SET_TEMPERATURE = 'SET_TEMPERATURE';

export const setTemp = (temp) => ({
   type: SET_TEMPERATURE,
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