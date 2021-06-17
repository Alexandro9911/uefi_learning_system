export const SET_CURRENT_TEST = "SET_CURRENT_TEST";
export const SET_CURRENT_QUEST = "SET_CURRENT_QUEST";
export const SET_CURRENT_ANSWER = "SET_CURRENT_ANSWER";
export const SET_CURRENT_ARR_ANSWER = "SET_CURRENT_ARR_ANSWER";
export const SET_QUANTITY_ANSWERS = "SET_QUANTITY_ANSWERS";
export const SET_TYPE_QUEST = "SET_TYPE_QUEST";

export const SET_CREATE_TEST_ENABLED = 'SET_CREATE_TEST_ENABLED';
export const SET_CREATE_TEST_DISABLED = 'SET_CREATE_TEST_DISABLED';

export const SET_GROUP_TESTS = "SET_GROUP_TESTS";

export const SET_QUANTITY_QUEST = 'SET_QUANTITY_QUEST';
export const SET_NAME_TEST = 'SET_NAME_TEST';
export const SET_THEME_TEST = 'SET_THEME_TEST';
export const SET_GROUP_FOR_TEST = 'SET_GROUP_FOR_TEST';
export const SET_CURR_SELECTION_TEST = 'SET_CURR_SELECTION_TEST';

export const SET_CURR_GROUP_TESTS = 'SET_CURR_GROUP_TESTS';
export const SET_LIST_TESTS = 'SET_LIST_TESTS';
export const ACTION_MODAL = 'ACTION_MODAL';

export const SET_CURRENT_GROUP_TEST_SELECTED = 'SET_CURRENT_GROUP_TEST_SELECTED';

export const SET_RESULTS_OF_GROUP = 'SET_RESULTS_OF_GROUP';

export const setResultsOfGroup = (list) => ({
    type: SET_RESULTS_OF_GROUP,
    payload: list
});

export const setGroupSelection =(id) =>({
    type: SET_CURRENT_GROUP_TEST_SELECTED,
    payload: id
});

export const setActionModal =(ac) => ({
   type: ACTION_MODAL,
   payload: ac
});

export const setListTests = (list) => ({
    type: SET_LIST_TESTS,
    payload: list
});

export const setCurrGroupTests = (id) => ({
   type: SET_CURR_GROUP_TESTS,
   payload: id
});
export const setCurrSelection = (int) => ({
    type: SET_CURR_SELECTION_TEST,
    payload: int
});

export const setQuantityQuest = (int) => ({
   type: SET_QUANTITY_QUEST,
   payload: int
});

export const  setNameTest = (name) => ({
    type: SET_NAME_TEST,
    payload: name
});

export const setThemeTest = (theme) => ({
    type: SET_THEME_TEST,
    payload: theme
});

export const setGroupForTest = (id) => ({
    type: SET_GROUP_FOR_TEST,
    payload: id
});

export const openForm = () => ({
    type: SET_CREATE_TEST_ENABLED,
    payload: true
});

export const closeForm = () => ({
    type: SET_CREATE_TEST_DISABLED,
    payload: false
});

export const setCurrentTest =(obj) => ({
    type: SET_CURRENT_TEST,
    payload: obj
});

export const setCurrentQuest = (quest) => ({
   type: SET_CURRENT_QUEST,
   payload:  quest
});

export const setCurrentAnswer = (text) => ({
    type: SET_CURRENT_ANSWER,
    payload: text
});

export const setCurrentArrAnswer = (arr) => ({
    type: SET_CURRENT_ARR_ANSWER,
    payload: arr
});

export const setQuantityAnswers = (int) => ({
    type: SET_QUANTITY_ANSWERS,
    payload: int
});

export const setTypeQuest = (typ) => ({
    type: SET_TYPE_QUEST,
    payload: typ
});

export const setGroupTests = (arr) => ({
    type: SET_GROUP_TESTS,
    payload: arr
});

