export const SHOW_MODAL_CREATE_PRACTICE = 'SHOW_MODAL_CREATE_PRACTICE';
export const HIDE_MODAL_CREATE_PRACTICE = 'HIDE_MODAL_CREATE_PRACTICE';

export const SHOW_MODAL_DOWNLOADING = 'SHOW_MODAL_DOWNLOADING';
export const HIDE_MODAL_DOWNLOADING = 'HIDE_MODAL_DOWNLOADING';

export const SHOW_MODAL_TASKS = 'SHOW_MODAL_TASKS';
export const HIDE_MODAL_TASKS = 'HIDE_MODAL_TASKS';
export const SET_INDEX_GROUP = 'SET_INDEX_GROUP';

export const SHOW_ALERT_MODAL = 'SHOW_ALERT_MODAL';
export const HIDE_ALERT_MODAL = 'HIDE_ALERT_MODAL';

export const showAlertModal = () => ({
   type: SHOW_ALERT_MODAL,
   payload: true
});

export const hideAlertModal = () => ({
   type: HIDE_ALERT_MODAL,
   payload: false
});

export const showTasks = () =>({
    type: SHOW_MODAL_TASKS,
    payload: true
});

export const hideTasks = () =>({
    type: HIDE_MODAL_TASKS,
    payload: false
});
export const setIndex = (index) =>({
    type: SET_INDEX_GROUP,
    payload: index
});


export const showCreatePractice = () =>({
        type: SHOW_MODAL_CREATE_PRACTICE,
        payload: true
});

export const hideCreatePractice = () =>({
    type: HIDE_MODAL_CREATE_PRACTICE,
    payload: false
});

export const showModalDownloading = () =>({
   type: SHOW_MODAL_DOWNLOADING,
   payload: true
});
export const hideModalDownloading = () =>({
    type: HIDE_MODAL_DOWNLOADING,
    payload: false
});