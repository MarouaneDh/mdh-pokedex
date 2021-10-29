import {
  GET_POKEMONS_SUCCESS,
  GET_POKEMONS_FAIL,
  GET_ALL_POKEMONS,
  GET_POKEMON,
  LOAD_POKEMON,
} from "./actionTypesPokemon";

const initialState = {
  pokemonList: [],
  loadPokemons: false,
  errors: null,
  pokemon: [],
  total: null,
  loadPokemon: false,
};

export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POKEMON:
      return { ...state, pokemon: payload, loadPokemon: false };
    case LOAD_POKEMON:
      return { ...state, loadPokemon: true };
    case GET_ALL_POKEMONS:
      return {
        ...state,
        loadPokemons: true,
      };
    case GET_POKEMONS_SUCCESS:
      return {
        ...state,
        pokemonList: payload.response,
        total: payload.total,
        loadPokemons: false,
      };
    case GET_POKEMONS_FAIL:
      return {
        ...state,
        loadPokemons: false,
        errors: payload,
      };
    default:
      return state;
  }
};
