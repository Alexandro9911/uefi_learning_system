export const USER_SET_GROUPS = 'USER_SET_GROUPS';
export const USER_SET_TESTS = 'USER_SET_TESTS';
export const USER_SET_PRACTICE = 'USER_SET_PRACTICE';
export const EMULATOR_STARTED = 'EMULATOR_STARTED';
export const EMULATOR_CLOSED = 'EMULATOR_CLOSED';
export const setUserGroups = (groups) => ({
    type: USER_SET_GROUPS,
    payload: groups
});

export const setUserTests = (tests) => ({
    type: USER_SET_TESTS,
    payload: tests
});

export const setUserPractice = (practice) => ({
    type: USER_SET_PRACTICE,
    payload: practice
});

export const setEmulatorStarted = () => ({
   type: EMULATOR_STARTED,
   payload: true
});

export const setEmulatorClosed = () => ({
    type: EMULATOR_CLOSED,
    payload: false
});