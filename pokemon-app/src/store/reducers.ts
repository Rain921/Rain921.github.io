import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {PaginationState} from "../utils/types";


const initialState: PaginationState = {
    currentPageIndex: 1,
    selectedType: '',
    searchTerm: '',
    disablePagination: false,
};

const reducers = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPageIndex: (state, action: PayloadAction<number>) => {
            state.currentPageIndex = action.payload;
        },
        setSelectedType: (state, action: PayloadAction<string | null>) => {
            state.selectedType = action.payload === null ? '' : action.payload;
        },
        setSearchTerm: (state, action: PayloadAction<string | null>) => {
            state.searchTerm = action.payload === null ? '' : action.payload;
        },
        setPaginationStatus: (state, action: PayloadAction<boolean>) => {
            state.disablePagination = action.payload;
        },
    },
});

export const { setCurrentPageIndex, setSelectedType, setSearchTerm, setPaginationStatus } = reducers.actions;
export default reducers.reducer;





