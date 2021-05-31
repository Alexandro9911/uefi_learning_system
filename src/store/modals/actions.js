export const SHOW_MODAL_CREATE_PRACTICE = 'SHOW_MODAL_CREATE_PRACTICE';
export const HIDE_MODAL_CREATE_PRACTICE = 'HIDE_MODAL_CREATE_PRACTICE';

export const SHOW_MODAL_DOWNLOADING = 'SHOW_MODAL_DOWNLOADING';
export const HIDE_MODAL_DOWNLOADING = 'HIDE_MODAL_DOWNLOADING';

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