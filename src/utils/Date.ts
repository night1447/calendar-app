export const isCorrectMonth = (month: number, year: number) => {
    const currentDate = new Date();
    if (year > currentDate.getFullYear()) return true;
    return currentDate.getMonth() <= month;
};

export const isCorrectYear = (year: number) => {
    const currentDate = new Date();
    return currentDate.getFullYear() <= year;
};
