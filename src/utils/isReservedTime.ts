import { IReservation } from '../models';

export const isReservedTime = (reservations: IReservation[], hours: number, minutes: number, date: Date) => {
    return reservations.findIndex(value => {
        const valueDate = value.date;
        return valueDate.minutes === minutes && valueDate.hours === hours && valueDate.day === date.getDate() && valueDate.year === date.getFullYear() && valueDate.monthIndex === date.getMonth();

    }) !== -1;
};
export const isReservedDay = (reservations: IReservation[], date: Date) => {
    return reservations.findIndex(item => {
        const reservedDate = item.date;
        return reservedDate.day === date.getDate() && reservedDate.year === date.getFullYear() && reservedDate.monthIndex === date.getMonth();
    }) !== -1;
};

export const isReservedByUser = (reservations: IReservation[], date: Date, tel: string) => {
    const isReservedTel = reservations.findIndex(item => item.tel === tel) !== -1;
    return isReservedDay(reservations, date) && isReservedTel;
};
