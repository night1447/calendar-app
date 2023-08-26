import { ChangeEvent, useState } from 'react';

import { Typography } from '../UI/Typography/Typography.tsx';
import { TextArea } from '../UI/TextArea/TextArea.tsx';
import { addZero } from '../../utils/addZero.ts';
import { Reserve } from '../Reserve/Reserve.tsx';

import styles from './admin.module.scss';
import { useTypedDispatch } from '../../hooks/useTypedDispatch.ts';
import { addRecordAction } from '../../store/reducers/Records/actions.ts';
import { IReservation } from '../../models';

const initDate = new Date();

export const AdminReserve = () => {
    const [date, setDate] = useState(initDate);
    const dispatch = useTypedDispatch();
    const changeDateHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setDate(new Date(event.target.value));
    };

    const addReservationHandler = (reservation: IReservation) => {
        dispatch(addRecordAction(reservation));
    };

    return (
        <div className={styles.block}>
            <Typography type={'h2'} className={styles.title}>Добавить бронь</Typography>
            <TextArea label={'Дата'}
                      id={'date'}
                      className={styles.textArea}
                      value={`${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDate())}`}
                      min={`${initDate.getFullYear()}-${addZero(initDate.getMonth() + 1)}-${addZero(initDate.getDate())}`}
                      onChange={changeDateHandler}
                      type='date' />
            <Reserve date={date} haveTitle={false} onAdd={addReservationHandler} />
        </div>
    );
};
