import { IReservation } from '../../../models';
import { FC } from 'react';
import { Typography } from '../../UI/Typography/Typography.tsx';
import styles from './reservation.module.scss';
import { addZero } from '../../../utils/addZero.ts';
import { Button } from '../../UI/Button/Button.tsx';
import { useTypedDispatch } from '../../../hooks/useTypedDispatch.ts';
import { removeReservationAction } from '../../../store/reducers/Reservation/actions.ts';

interface ReservationItemProps {
    item: IReservation;
}

export const ReservationItem: FC<ReservationItemProps> = ({ item }) => {
    const dispatch = useTypedDispatch();
    const deleteItemHandler = () => {
        dispatch(removeReservationAction(item.id));
    };

    return (
        <div className={styles.item}>
            <div className={styles.line}>
                <Typography
                    type={'h2'}>{addZero(item.date.day)}.{addZero(item.date.monthIndex + 1)}.{item.date.year}</Typography>
                <Typography type={'p'}
                            className={styles.time}>{addZero(item.date.hours)}:{addZero(item.date.minutes)}</Typography>
            </div>
            <div className={styles.line}>
                <Typography type={'p'} className={styles.info}>Инфо</Typography>
                <Typography type={'p'}>{item.tel}</Typography></div>
            <div className={`${styles.line} ${styles.line_mb}`}>
                <Button variant={'fill'} className={styles.reset} onClick={deleteItemHandler}>Удалить</Button>
            </div>
        </div>
    );
};
