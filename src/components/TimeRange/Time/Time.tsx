import { FC } from 'react';
import styles from './time.module.scss';

interface TimeProps {
    time: string;
    onChange?: () => void;
}

export const Time: FC<TimeProps> = ({ time, onChange }) => {
    return <div className={styles.time}>
        <input type='radio' id={time} name={'radio'} className={styles.input} onChange={onChange} />
        <label htmlFor={`${time}`} className={styles.label}>
            {time}
        </label>
    </div>;
};
