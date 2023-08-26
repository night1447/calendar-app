import { differenceInDays, endOfMonth, startOfMonth } from 'date-fns';

export const getInfoByDate = (date: Date) => {
    const startDate = startOfMonth(date);
    const endDate = endOfMonth(date);
    const countDays = differenceInDays(endDate, startDate) + 1;
    const suffixDays = 6 - (endDate.getDay() - 1);
    let prefixDays = (startDate.getDay() - 1);
    prefixDays = prefixDays > 0 ? prefixDays : 7 - Math.abs(prefixDays);
    prefixDays = prefixDays === 7 ? 0 : prefixDays;

    return { startDate, endDate, numDays: countDays, prefixDays, suffixDays };
};
