import { useTypedSelector } from '../../hooks/useTypedSelector.ts';
import { Grid } from '../UI/Grid/Grid.tsx';
import { ReservationItem } from './ReservationItem/ReservationItem.tsx';
import { Typography } from '../UI/Typography/Typography.tsx';
import { createMassiveReservations } from '../../utils/createMassiveReservations.ts';
import { isMobile } from '../../utils/isMobile.ts';

export const ReservationList = () => {
    const state = useTypedSelector(state => state);
    const massive = createMassiveReservations(state);
    return (
        massive.length > 0 ?
            <Grid columns={isMobile() ? 2 : 4}>
                {massive.map(item => <ReservationItem key={item.id}
                                                      item={item} />)}
            </Grid> :
            <Typography type={'h3'} style={{ textAlign: 'center' }}>Список броней пуст</Typography>
    )
        ;
};
