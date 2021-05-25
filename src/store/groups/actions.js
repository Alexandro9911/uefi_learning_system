export const GROUP_TITLE_CHANGE = 'GROUP_TITLE_CHANGE';
export const GROUP_DESCR_CHANGE = 'GROUP_DESCR_CHANGE';
export const GROUP_TOKEN_CHANGE = 'GROUP_TOKEN_CHANGE';
export const CLEAR_GROUPS_FORM = 'CLEAR_GROUPS_FORM';

export const ADD_GROUP_TO_LIST = 'ADD_GROUP_TO_LIST';
export const DELETE_GROUP_FROM_LIST = 'DELETE_GROUP_FROM_LIST';
export const INIT_LIST = 'INIT_LIST';

export const setTitle = (title) => ({
    type: GROUP_TITLE_CHANGE,
    payload: title
});

export const setDescr = (descr) => ({
    type: GROUP_DESCR_CHANGE,
    payload: descr
});
export const setToken = (token) => ({
    type: GROUP_TOKEN_CHANGE,
    payload: token
});

export const clearForm = () => ({
    type: GROUP_TOKEN_CHANGE,
    payload: ''
});

export const addGroup = (group) => ({
    type: ADD_GROUP_TO_LIST,
    payload: group
});

export const deleteGroup = (group) => ({
    type: DELETE_GROUP_FROM_LIST,
    payload: group
})

export const initList = (ovner) => ({
    type: INIT_LIST,
    payload: ovner
})
