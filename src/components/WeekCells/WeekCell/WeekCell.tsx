import { FC } from 'react';
import styles from './week.module.scss';

interface WeekCellProps {
    value: string;
    isDayOff: boolean;
}

export const WeekCell: FC<WeekCellProps> = ({ value, isDayOff }) => {
    return (
        <div className={`${styles.cell} ${isDayOff ? styles.dayOff : ''}`}>
            {value}
        </div>
    );
};
