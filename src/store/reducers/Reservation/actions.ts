import { ReservationSlice } from './ReservationSlice.ts';
import { IReservation } from '../../../models';


const actions = ReservationSlice.actions;

export const addReservationAction = (reservation: IReservation) => actions.addReservation(reservation);
export const removeReservationAction = (id: string) => actions.removeReservation(id);
export const resetReservationsAction = () => actions.resetReservation();
