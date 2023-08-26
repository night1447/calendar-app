import { FC } from 'react';
import { Button } from '../Button/Button.tsx';
import styles from './cell.module.scss';

interface CellProps {
    disabled?: boolean;
    value?: number | string;
    onClick?: () => void;
}

export const Cell: FC<CellProps> = ({ disabled, value, onClick }) => {
    return (
        <Button variant={'outline'} onClick={onClick} className={`${styles.adaptive} ${disabled ? styles.disabled : ''}`} disabled={disabled}>
            {value}
        </Button>
    );
};
