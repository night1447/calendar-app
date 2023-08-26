import { RecordsSlice } from './RecordsSlice.ts';
import { IReservation } from '../../../models';

const actions = RecordsSlice.actions;
export const addRecordAction = (payload: IReservation) => actions.addRecord(payload);
export const removeRecordAction = (payload: string) => actions.removeRecord(payload);
