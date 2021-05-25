import {
    GROUP_TITLE_CHANGE,
    GROUP_DESCR_CHANGE,
    GROUP_TOKEN_CHANGE,
    CLEAR_GROUPS_FORM,
    ADD_GROUP_TO_LIST,
    DELETE_GROUP_FROM_LIST,
    INIT_LIST

} from "./actions";

const  initialStateCreate = {
    title: '',
    token: '',
    descr: ''
}

const initialStateList = {
    groups: []
}

export const groupCreateReducer = (state=initialStateCreate, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case GROUP_TITLE_CHANGE:
            return {
                ...state,
                title: action.payload
            };
        case GROUP_TOKEN_CHANGE:
            return {
                ...state,
                token: action.payload
            };
        case GROUP_DESCR_CHANGE:
            return {
                ...state,
                descr: action.payload
            };
        case CLEAR_GROUPS_FORM:
            return {
                ...state,
                title: action.payload,
                descr: action.payload,
                token: action.payload
            };
    }
    return state
}
function add(group,state){
    state.groups.push(group)
    let gr
}

export const listGroupReducer = (state = initialStateList, action) => {
    switch (action.type) {
        case ADD_GROUP_TO_LIST:
            return {
                ...state,
                //  {
                //     id: action.payload.id,
                //     ovner: action.payload.ovner,
                //     title: action.payload.title,
                //     descr: action.payload.descr,
                //     token: action.payload.token
                // }
            }
        case INIT_LIST:
            return {
                ...state,
                groups: action.payload
            }

    }
    return state
}

