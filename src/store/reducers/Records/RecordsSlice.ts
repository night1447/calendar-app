import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReservation } from '../../../models';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage.ts';

interface IRecords {
    records: IReservation[];
}

const init: IRecords = {
    records: [],
};
const initialState: IRecords = getLocalStorage('records', init);
export const RecordsSlice = createSlice({
    name: 'records',
    initialState: initialState,
    reducers: {
        addRecord(state, action: PayloadAction<IReservation>) {
            state.records.push(action.payload);
            setLocalStorage('records', state);
        },
        removeRecord(state, action: PayloadAction<string>) {
            state.records = state.records.filter(item => item.id !== action.payload);
            setLocalStorage('records', state);
        },
    },
});
