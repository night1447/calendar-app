import { FC, PropsWithChildren } from 'react';

import { Button } from '../UI/Button/Button.tsx';
import { ArrowIcon } from '../UI/Icons';
import { IPoint } from '../Calendar/Calendar.tsx';
import { isCorrectMonth, isCorrectYear } from '../../utils/Date.ts';

import styles from './controller.module.scss';

interface ControllerProps {
    onChange: (date: Date) => void,
    onBack: () => void,
    currentDate: Date,
    currentPoint: IPoint,
}

const getDate = (date: Date, point: IPoint, action: 'prev' | 'next'): Date => {
    const value = action === 'next' ? +1 : -1;
    let year = date.getFullYear();
    let month = date.getMonth();
    if (point === 'days' && isCorrectMonth(month + value, year)) {
        month += value;
    } else if (isCorrectYear(year + value)) {
        year += value;
    }
    return new Date(year, month);
};

export const Controller: FC<PropsWithChildren<ControllerProps>> = (props) => {
    const prevDateHandler = () => {
        props.onChange(getDate(props.currentDate, props.currentPoint, 'prev'));
    };

    const nextDateHandler = () => {
        props.onChange(getDate(props.currentDate, props.currentPoint, 'next'));
    };

    return (
        <div>
            {props.currentPoint === 'month' ?
                <></> :
                <Button variant={'fill'} onClick={props.onBack} className={styles.back}>
                    Назад
                </Button>}
            <div className={styles.wrapper}>
                <Button variant={'outline'} onClick={prevDateHandler} className={styles.control}>
                    <ArrowIcon side={'left'} />
                </Button>
                {props.children}
                <Button variant={'outline'} onClick={nextDateHandler} className={styles.control}>
                    <ArrowIcon side={'right'} />
                </Button>
            </div>
        </div>
    );
};
