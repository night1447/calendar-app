export interface IDate {
    year: number;
    monthIndex: number;
    day: number;
    hours: number;
    minutes: number;
}

export interface IReservation {
    id: string;
    tel: string;
    date: IDate;
}

