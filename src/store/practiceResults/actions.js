export const INIT_PRACTICE_RESULTS = 'INIT_PRACTICE_RESULTS';
export const ACTION_RESULTS_PAGE = 'ACTION_RESULTS_PAGE';
export const SET_LIST_RESULTS_OF_PRACTICE = 'SET_LIST_RESULTS_OF_PRACTICE';
export const SET_PRACTICE_RESULT = 'SET_PRACTICE_RESULT';

export const setPracticeResult = (value) => ({
    type: SET_PRACTICE_RESULT,
    payload: value
})

export const setListResults = (value) => ({
    type: SET_LIST_RESULTS_OF_PRACTICE,
    payload: value
});

export const  initPracticeResults = (value) => ({
    type: INIT_PRACTICE_RESULTS,
    payload: value
});

export const actionResultsPage = (value) => ({
    type: ACTION_RESULTS_PAGE,
    payload: value
})