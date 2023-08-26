import { FC, PropsWithChildren } from 'react';

import styles from './grid.module.scss';

interface GridProps {
    columns: number;
    gap?: number;
    className?: string;
}

export const Grid: FC<PropsWithChildren<GridProps>> = ({ columns, className, gap, children }) => {
    return (
        <div className={`${styles.grid} ${className || ''}`}
             style={{ gap, gridTemplateColumns: `repeat(${columns},1fr)` }}>
            {children}
        </div>
    );
};
