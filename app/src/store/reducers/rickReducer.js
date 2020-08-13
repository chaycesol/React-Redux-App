import { FETCHING_CHARACTERS_START, FETCH_CHARACTERS_SUCCESS } from "../actions";



const initialState = {
    characters: [],
    isLoading: false,
    error: ''
}

export const rickReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_CHARACTERS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
        default:
        return state;
    }
};