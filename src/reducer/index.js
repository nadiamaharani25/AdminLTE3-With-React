import { combineReducers } from "redux";

const listGenreReducer = (state = [], action) => {
    if (action.type === "AMBIL_DATA") {
        return action.data
    }

    return state
}

export default combineReducers({
    listGenre: listGenreReducer
})