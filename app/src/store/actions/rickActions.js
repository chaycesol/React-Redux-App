import axios from 'axios'

export const FETCHING_CHARACTERS_START = "FETCHING_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";

export const fetchCharacters = () => (dispatch) => {
        dispatch({ type: FETCHING_CHARACTERS_START });
        axios
            .get("https://rickandmortyapi.com/api/character")
            .then((res) => {
                dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results})
            }) 
            .catch((err) => console.log(err));
    };

//redux-thunk
const thunk = (store) => (next) => (action) => {
    if (typeof action === "object") {
      next(action);
    } else if (typeof action === "function") {
      action(store.dispatch);
    }
  };