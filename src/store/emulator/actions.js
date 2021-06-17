export const INIT_EMULATOR_STORE = 'INIT_EMULATOR_STORE';
export const CHANGE_TO_EZ_MODE = 'CHANGE_TO_EZ_MODE';
export const CHANGE_TO_ADVANCED_MODE = 'CHANGE_TO_ADVANCED_MODE';

export const SET_DATE_SYSTEM = 'SET_DATE_SYSTEM';
export const SET_TIME_SYSTEM = 'SET_TIME_SYSTEM';

export const SET_BOOT_PRIORITY = 'SET_BOOT_PRIORITY';
export const SET_PAGE = 'SET_PAGE';

export const ACTION_MODAL_WARNING = 'ACTION_MODAL_WARNING';
export const SET_PAGE_ADVANCED_ACCORDION = 'SET_PAGE_ADVANCED_ACCORDION';

export const CHANGE_MULTIPLAYER_TO = 'CHANGE_MULTIPLAYER_TO';
export const CHANGE_MULTIPLAYER ='CHANGE_MULTIPLAYER';
export const CHANGE_AI_MODE ='CHANGE_AI_MODE';
export const CHANGE_MULTIPLAYER_ARR = 'CHANGE_MULTIPLAYER_ARR';
export const SET_CURR_INDEX = 'SET_CURR_INDEX';

export const actionModalWarningAlert = (stat) => ({
    type: ACTION_MODAL_WARNING,
    payload: stat
})

export const setCurrIndex = (value) => ({
    type: SET_CURR_INDEX,
    payload: value
})

export const changeMultiplayerArray = (value) =>({
    type: CHANGE_MULTIPLAYER_ARR,
    payload: value
});

export const changeMultiplayerTo = (value) => ({
    type: CHANGE_MULTIPLAYER_TO,
    payload: value
}) ;

export const changeMultiplayer = (value) => ({
   type: CHANGE_MULTIPLAYER,
   payload: value
});

export const changeAImode = (value) => ({
    type: CHANGE_AI_MODE,
    payload: value
})

export const setPageAdvancedAccordion = (selected) => ({
    type: SET_PAGE_ADVANCED_ACCORDION,
    payload: selected
});


export const setPage = (str) => ({
    type: SET_PAGE,
    payload: str
});

export const setBootPriority = (str) => ({
    type: SET_BOOT_PRIORITY,
    payload: str
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