export const SET_LIST_GROUPS_PRACTICE = 'SET_LIST_GROUPS_PRACTICE';
export const ADD_PRACTICE_TO_GROUP = 'ADD_PRACTICE_TO_GROUP';
export const DELETE_PRACTICE_FROM_GROUP = 'DELETE_PRACTICE_FROM_GROUP';
export const SET_CURRENT_TASKS_GROUP = 'SET_CURRENT_TASKS_GROUP'

export const ACTION_ENA_LIST_RES = 'ACTION_ENA_LIST_RES';

export const actionEnaListRes = (value) => ({
    type: ACTION_ENA_LIST_RES,
    payload: value
})

export const setListGroupGractice = (list) =>({
    type: SET_LIST_GROUPS_PRACTICE,
    payload: list
});

export const setCurrentTasksGroup =(list) =>({
   type: SET_CURRENT_TASKS_GROUP,
   payload: list
});

