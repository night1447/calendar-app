import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Grid } from '../UI/Grid/Grid.tsx';
import { Cell } from '../UI/Cell/Cell.tsx';
import { getInfoByDate } from '../../utils/getInfoByDate.ts';
import { createArray } from '../../utils/createArray.ts';
import { isMobile } from '../../utils/isMobile.ts';

interface DaysProps {
    date: Date;
    onClick: () => void;
}


export const Days: FC<DaysProps> = ({ date, onClick }) => {
    const { prefixDays, numDays, suffixDays, startDate } = getInfoByDate(date);
    return (
        <Grid columns={7} gap={isMobile() ? 10 : 20}>
            {createArray(prefixDays).map(() => <Cell disabled={true} key={uuidv4()} />)}
            {createArray(numDays).map((_, index) => <Cell value={startDate.getDate() + index}
                                                          key={startDate.getDate() + index}
                                                          onClick={() => {
                                                              date.setDate(startDate.getDate() + index);
                                                              onClick();
                                                          }} />)}
            {createArray(suffixDays).map(() => <Cell disabled={true} key={uuidv4()} />)}
        </Grid>
    );
};
