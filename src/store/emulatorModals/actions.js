export const SHOW_MODAL_SET_TIME_DATE = 'SHOW_MODAL_SET_TIME_DATE';
export const HIDE_MODAL_SET_TIME_DATE = 'HIDE_MODAL_SET_TIME_DATE';

export const showModalDateTime = () => ({
    type: SHOW_MODAL_SET_TIME_DATE,
    payload: true
});

export const hideModalDateTime = () => ({
    type: HIDE_MODAL_SET_TIME_DATE,
    payload: false
});