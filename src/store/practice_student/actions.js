export const SET_PRACTICE_STUDENT = 'SET_PRACTICE_STUDENT';
export const SET_CURRENT_PRACTICE = 'SET_CURRENT_PRACTICE';

export const setStudentsPractice =(myid) => ({
    type: SET_PRACTICE_STUDENT,
    payload: myid
});

export const setCurrentPractice =(id) => ({
   type: SET_CURRENT_PRACTICE,
   payload: id
});