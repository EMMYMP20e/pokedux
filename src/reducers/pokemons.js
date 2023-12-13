import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from '../actions/types';

const initialState = {
  pokemons: [],
  loading: false,
};

export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case SET_FAVORITE:
      const pokemonsState = [...state.pokemons];
      const newList = pokemonsState.map( (pokemon) =>
          pokemon.id === action.payload.pokemonId ?
            { ...pokemon, isFavorite: !pokemon.isFavorite} :
            pokemon
      );
      return {...state, pokemons: newList}
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
