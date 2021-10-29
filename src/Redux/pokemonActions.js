import { TOGGLE_FALSE, TOGGLE_TRUE } from "./actionTypesPokemon";
import {
  GET_POKEMONS_FAIL,
  GET_POKEMONS_SUCCESS,
  GET_ALL_POKEMONS,
  GET_POKEMON,
} from "./actionTypesPokemon";
import axios from "axios";

export const toggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};
export const toggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};

export const getPokemons = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_POKEMONS,
  });
  try {
    let result = await axios.get("https://pokeapi.co/api/v2/pokemon");
    dispatch({ type: GET_POKEMONS_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: GET_POKEMONS_FAIL, payload: error.response.data.errors });
  }
};

export const getPokemon = (id) => (dispatch) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => dispatch({ type: GET_POKEMON, payload: res.data }))
    .catch((err) => console.log(err));
};
