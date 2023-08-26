import { FC } from 'react';
import { Grid } from '../UI/Grid/Grid.tsx';
import { Cell } from '../UI/Cell/Cell.tsx';
import { MONTHS } from '../../constants';
import { isCorrectMonth } from '../../utils/Date.ts';
import { isMobile } from '../../utils/isMobile.ts';


interface MonthProps {
    onChange: (value: number) => void;
    currentDate: Date;
}

export const Months: FC<MonthProps> = ({ onChange, currentDate }) => {
    return (
        <>
            <Grid columns={isMobile() ? 2 : 4}>
                {MONTHS.map((month, index) => {
                    if (isCorrectMonth(index, currentDate.getFullYear())) {
                        return <Cell value={month} key={month}
                                     onClick={() => onChange(MONTHS.findIndex((value) => value === month))} />;
                    }
                })}
            </Grid>
        </>
    );
};
