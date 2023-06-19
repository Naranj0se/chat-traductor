import { useReducer } from "react";

const initialState = {
    isPointed: false,
    currentData: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case "SELECTED_CHAT":
            return {
                isPointed: true,
                currentData: action.data
            }
        default:
            return state  
    }

}