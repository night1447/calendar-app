import { FC } from 'react';

import { Grid } from '../UI/Grid/Grid.tsx';
import { WeekCell } from './WeekCell/WeekCell.tsx';
import { isMobile } from '../../utils/isMobile.ts';

import styles from './weeks.module.scss';

const weeks = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const daysOff = ['Сб', 'Вс'];
const isDayOff = (week: string) => daysOff.includes(week);


export const WeekCells: FC = () => {
    return (
        <Grid columns={weeks.length} gap={isMobile() ? 10 : 20} className={styles.weeks}>
            {weeks.map(week => <WeekCell value={week} key={week} isDayOff={isDayOff(week)} />)}
        </Grid>
    );
};
