//action types
export const ADD_CANDIDATE = 'ADD_CANDIDATE'
export const FIND_CANDIDATE = 'FIND_CANDIDATE'
export const UPDATE_CANDIDATE = 'UPDATE_CANDIDATE'
export const DELETE_CANDIDATE = 'DELETE_CANDIDATE'
export const FULL_RESET = 'FULL_RESET'

//Action creators
export const addCandidate = (candidate) => {
    return {
        type: ADD_CANDIDATE,
        candidate
    }
}

export const findCandidate = (candidate) => {
    return {
        type: FIND_CANDIDATE,
        candidate
    }
}

export const updateCandidate = (candidate) => {
    return {
        type: UPDATE_CANDIDATE,
        candidate
    }
}

export const deleteCandidate = (index) => {
    return {
        type: DELETE_CANDIDATE,
        index
    }
}

export const fullReset = () => {
    return {
        type: FULL_RESET
    }
}
