export const SELECT_GROUP_PRACTICE_CREATE = 'SELECT_GROUP_PRACTICE_CREATE';
export const CHANGE_TASK_STRING = 'CHANGE_TASK_STRING';
export const CHANGE_THEME = 'CHANGE_THEME';
export const CHANGE_DATE_TO = 'CHANGE_DATE_TO';
export const CHANGE_DATE_FROM = 'CHANGE_DATE_FROM';

export const setForGroupPractice = (group_id,group_title) => ({
   type: SELECT_GROUP_PRACTICE_CREATE,
   payload: {
       group_id: group_id,
       group_title: group_title
   }
});

export const changeTaskString = (text) => (
    {
        type: CHANGE_TASK_STRING,
        payload: text
    }
);

export const setTheme = (theme) => ({
    type: CHANGE_THEME,
    payload: theme
});

export const setDateTo = (date_to) =>({
    type: CHANGE_DATE_TO,
    payload: date_to
});

export const setDateFrom = (date_from) =>({
    type: CHANGE_DATE_FROM,
    payload: date_from
})