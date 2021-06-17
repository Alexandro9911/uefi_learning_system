export const SET_LIST_TESTS = 'SET_LIST_TESTS';
export const START_TEST = 'START_TEST';
export const SET_LIST_QUEST = 'SET_LIST_QUEST';
export const SET_LIST_ANSWER = 'SET_LIST_ANSWER';
export const FINISH_TEST = 'FINISH_TEST';
export const SET_CURR_ANSWER = 'SET_CURR_ANSWER';
export const ACTION_ENA_RESULT ='ACTION_ENA_RESULT';
export const SET_TEST_RESULT = 'SET_TEST_RESULT';
export const SET_SELECTED_ID = 'SET_SELECTED_ID';

export const setSelectedId = (id) => ({
    type:SET_SELECTED_ID,
    payload:id
});

export const setTestResult = (obj) => ({
    type: SET_TEST_RESULT,
    payload: obj
});

export const actionEnaResult = (stat) => ({
   type: ACTION_ENA_RESULT,
   payload: stat
});

export const setCurrAnswer = (id) => ({
    type: SET_CURR_ANSWER,
    payload: id
});
export const setListAnswers = (list) => ({
    type: SET_LIST_ANSWER,
    payload: list
});

export const finishTest = () => ({
    type: FINISH_TEST,
    payload: false
});

export const setListQuest = (list) => ({
    type: SET_LIST_QUEST,
    payload: list
});
export const startTest = (id) => ({
    type: START_TEST,
    payload: id
});

export const setListStudentTest = (list) => ({
    type: SET_LIST_TESTS,
    payload: list
});