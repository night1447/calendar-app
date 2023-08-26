import { combineReducers } from 'redux';
import { recordReducer } from './Records/reducer.ts';
import { reservationReducer } from './Reservation/reducer.ts';

export const rootReducer = combineReducers({
    reservations: reservationReducer,
    records: recordReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
