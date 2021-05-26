export const SHOW_MODAL_CREATE_PRACTICE = 'SHOW_MODAL_CREATE_PRACTICE';
export const HIDE_MODAL_CREATE_PRACTICE = 'HIDE_MODAL_CREATE_PRACTICE';

export const showCreatePractice = () =>({
        type: SHOW_MODAL_CREATE_PRACTICE,
        payload: true
});

export const hideCreatePractice = () =>({
    type: HIDE_MODAL_CREATE_PRACTICE,
    payload: false
});
