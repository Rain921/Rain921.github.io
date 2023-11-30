import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Pokemon} from "../utils/types";

interface PaginationState {
    list: Pokemon[];
    loading: boolean;
    error: string | null;
}

const initialState: PaginationState = {
    list: [],
    loading: false,
    error: null,
};

const reducers = createSlice({
    name: 'pokemonList',
    initialState,
    reducers: {
        setPokemonList: (state, action: PayloadAction<Pokemon[]>) => {
            state.list = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const { setPokemonList,setLoading,setError } = reducers.actions;
export default reducers.reducer;
