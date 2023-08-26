import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IReservation } from '../../../models';
import { getLocalStorage, setLocalStorage } from '../../../utils/localStorage.ts';

interface IReserve {
    reservations: IReservation[];
}

const init: IReserve = {
    reservations: [],
};
const initialState: IReserve = getLocalStorage('reservations', init);
export const ReservationSlice = createSlice({
    name: 'reservation',
    reducers: {
        addReservation(state, action: PayloadAction<IReservation>) {
            state.reservations.push(action.payload);
            setLocalStorage('reservations', state);
        },
        removeReservation(state, action: PayloadAction<string>) {
            state.reservations = state.reservations.filter(item => item.id !== action.payload);
            setLocalStorage('reservations', state);
        },
        resetReservation(state) {
            state.reservations = [];
            setLocalStorage('reservations', state);
        },
    },
    initialState,
});
