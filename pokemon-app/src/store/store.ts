
import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from './reducers';
import pokemonListReducer from './reducersPokemonList';

export const store = configureStore({
    reducer: {
        pagination: paginationReducer,
        pokemonList: pokemonListReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




