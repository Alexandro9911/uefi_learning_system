
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_BAD = 'AUTH_BAD';
export const GET_FIO = 'GET_FIO';


export const AUTH_EMAIL_CHANGE = 'AUTH_EMAIL_CHANGE';
export const AUTH_PASSW_CHANGE = 'AUTH_PASSW_CHANGE';
export const setEmail = (email) => ({
    type: AUTH_EMAIL_CHANGE,
    payload: email
});

export const setPassw = (password) => ({
    type: AUTH_PASSW_CHANGE,
    payload: password
});

export  const setAuthSuccess = (fio,id,link) => ({
   type: AUTH_SUCCESS,
   payload: {
       fio: fio,
       id: id,
       auth: true,
       link: link
   }
});

export  const setAuthBad = () => ({
    type: AUTH_BAD,
    payload: false
});


