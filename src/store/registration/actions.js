export const REG_EMAIL_CHANGE = 'REG_EMAIL_CHANGE';
export const REG_PASSW_CHANGE = 'REG_PASSW_CHANGE';
export const REG_REP_PASSW_CHANGE = 'REG_REP_PASSW_CHANGE';
export const SET_NAME = 'SET_NAME';
export const SET_MID_NAME = 'SET_MID_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME'
export const SET_WHO_I_AM = 'SET_WHO_I_AM'

export const setName = (name) => ({
   type: SET_NAME,
   payload: name
});

export const setMidName = (midname) => ({
    type: SET_MID_NAME,
    payload: midname
});

export const  setLastName = (lastname) => ({
    type: SET_LAST_NAME,
    payload: lastname
});

export const  setWhoIam = (flag) => ({
    type: SET_WHO_I_AM,
    payload: flag
});

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

