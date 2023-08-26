import { FC } from 'react';

import { TIME } from '../../constants';
import { Time } from './Time/Time.tsx';
import { Grid } from '../UI/Grid/Grid.tsx';
import { useTypedSelector } from '../../hooks/useTypedSelector.ts';
import { IReservation } from '../../models';
import { isReservedTime } from '../../utils/isReservedTime.ts';
import { addZero } from '../../utils/addZero.ts';
import { isMobile } from '../../utils/isMobile.ts';

import styles from './timeRange.module.scss';

interface TimeRangeProps {
    date: Date;
    onChange: (value: string) => void;
}

const createTimeArray = (reservations: IReservation[], date: Date): string[] => {
    const array: string[] = [];
    let hours = TIME.offsetInMinutes / 60;
    hours = hours >= 1 ? hours : 0;
    const minutes = TIME.offsetInMinutes - hours * 60;
    let currentHours = TIME.start;
    let currentMinutes = minutes;
    while (currentHours <= TIME.end) {
        if (currentMinutes >= 60) {
            currentHours += 1;
            currentMinutes = 0;
        }
        if (!isReservedTime(reservations, currentHours, currentMinutes, date)) {
            array.push(`${addZero(currentHours)}:${addZero(currentMinutes)}`);
        }
        if (currentHours === TIME.end) break;
        currentMinutes += minutes;
        currentHours += hours;
    }
    return array;
};
export const TimeRange: FC<TimeRangeProps> = ({ onChange, date }) => {
    const reservations = useTypedSelector(state => state.reservations.reservations);
    const records = useTypedSelector(state => state.records.records);
    return (
        <Grid columns={isMobile() ? 2 : 4} className={styles.timeRange}>
            {createTimeArray([...records, ...reservations], date).map(item => <Time time={item} key={item}
                                                                                    onChange={() => onChange(item)} />)}
        </Grid>
    );
};
