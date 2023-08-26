import { IPoint } from '../Calendar.tsx';
import { FC } from 'react';
import { MONTHS } from '../../../constants';
import { Typography } from '../../UI/Typography/Typography.tsx';

interface InfoProps {
    date: Date;
    point: IPoint;
}

const createMainInfo = (currentDate: Date, point: IPoint) => {
    let result = '';
    if (point === 'days') {
        result += `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    } else {
        result += `${currentDate.getFullYear()}`;
    }
    return result;
};
export const Info: FC<InfoProps> = ({ point, date }) => {
    return (
        <Typography type={'h2'}>
            {createMainInfo(date, point)}
        </Typography>
    );
};
