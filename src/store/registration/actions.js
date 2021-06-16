export const REG_EMAIL_CHANGE = 'REG_EMAIL_CHANGE';
export const REG_PASSW_CHANGE = 'REG_PASSW_CHANGE';
export const REG_REP_PASSW_CHANGE = 'REG_REP_PASSW_CHANGE';

export const setEmail = (email) => ({
    type: REG_EMAIL_CHANGE,
    payload: email
});

export const setPassw = (passw) => ({
    type: REG_PASSW_CHANGE,
    payload: passw
});

export const setRepPassw = (reppassw) => ({
    type: REG_REP_PASSW_CHANGE,
    payload: reppassw
});

// todo