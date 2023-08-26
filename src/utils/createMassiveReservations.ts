import { RootReducerType } from '../store/reducers';

export const createMassiveReservations = (state: RootReducerType) => {
    return [...state.records.records, ...state.reservations.reservations];
};
