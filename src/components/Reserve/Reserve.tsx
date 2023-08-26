import { FC, FormEvent, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from '../UI/Button/Button.tsx';
import { TextArea } from '../UI/TextArea/TextArea.tsx';
import { TimeRange } from '../TimeRange/TimeRange.tsx';
import { IReservation } from '../../models';
import { isReservedByUser } from '../../utils/isReservedTime.ts';
import { useTypedSelector } from '../../hooks/useTypedSelector.ts';
import { Typography } from '../UI/Typography/Typography.tsx';
import { createMassiveReservations } from '../../utils/createMassiveReservations.ts';

import styles from './reserve.module.scss';

interface ReserveProps {
    date: Date;
    haveTitle: boolean;
    onAdd: (date: IReservation) => void;
}

export const Reserve: FC<ReserveProps> = ({ date, haveTitle, onAdd }) => {
    const state = useTypedSelector(state => state);

    const [time, setTime] = useState('');

    const [info, setInfo] = useState('');
    const telRef = useRef<HTMLInputElement>();
    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const id = uuidv4();
        const tel = telRef.current?.value;
        if (time && tel) {
            const hours = +time.slice(0, 2);
            const minutes = +time.slice(3);
            if (!isReservedByUser(createMassiveReservations(state), date, tel)) {
                setInfo(`Вы забронированы на время ${time}!`);
                const reservation: IReservation = {
                    id,
                    tel,
                    date: {
                        day: date.getDate(),
                        monthIndex: date.getMonth(),
                        year: date.getFullYear(),
                        minutes,
                        hours: hours,
                    },
                };
                onAdd(reservation);
                (event.target as HTMLFormElement).reset();
            } else {
                setInfo('У вас весит бронь в данный день, отмените бронь');
            }
        } else {
            setInfo('Введенные данные не верны, попробуйте еще раз');
        }
        setTimeout(() => {
            setInfo('');
        }, 2000);
    };
    const changeTimeHandler = (value: string) => {
        setTime(value);
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            {haveTitle ?
                <Typography type={'h2'} className={styles.title}>Заполните форму</Typography> : <></>}
            <TextArea label={'Введите телефон'}
                      id={'tel'}
                      placeholder={'+375292853155'}
                      ref={telRef}
                      type={'tel'} className={styles.textarea} />
            <TimeRange date={date} onChange={changeTimeHandler} />
            <Button variant={'fill'} type={'submit'}>
                Подтвердить
            </Button>
            <span className={`${styles.error} ${info ? styles.error_active : ''}`}>{info}</span>
        </form>
    );
};
