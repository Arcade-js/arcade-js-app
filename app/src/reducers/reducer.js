import axios from "axios";

const ACTION = 'ACTION'

const performAction = (arg) => {
    return { type: ACTION, arg }
}

export const getAction = (item) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`/api/campuses/${item}`)
            dispatch(getAction(data))
        } catch (error) {
            console.error(error)
        }
    }
}

const reducer = (items = {}, action) => {
    switch (action.type) {
        case ACTION:
            return { ...action.item }
        default:
            return items
    }
}

export default reducer
