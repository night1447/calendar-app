import { Days } from '../Days/Days.tsx';
import { WeekCells } from '../WeekCells/WeekCells.tsx';
import { FC, useState } from 'react';
import { Controller } from '../Controller/Controller.tsx';
import { Months } from '../Months/Months.tsx';
import { Info } from './Info/Info.tsx';

export type IPoint = 'month' | 'days';

const initialState = new Date();

interface CalendarProps {
    onReserve: (date: Date) => void;
}

export const Calendar: FC<CalendarProps> = ({ onReserve }) => {
    const [currentDate, setCurrentDate] = useState<Date>(initialState);
    const [currentPoint, setCurrentPoint] = useState<IPoint>('month');

    const changeToDaysHandler = (month: number) => {
        setCurrentPoint('days');
        setCurrentDate(prevState => new Date(prevState.getFullYear(), month, 1));
    };
    const changeDateHandler = (date: Date) => {
        setCurrentDate(date);
    };
    const backPointHandler = () => {
        setCurrentPoint('month');
    };
    return (
        <div>
            <Controller currentDate={currentDate}
                        currentPoint={currentPoint}
                        onChange={changeDateHandler}
                        onBack={backPointHandler}>
                <Info point={currentPoint} date={currentDate} />
            </Controller>
            {
                currentPoint === 'month' ? <Months currentDate={currentDate} onChange={changeToDaysHandler} /> :
                    <>
                        <WeekCells />
                        <Days date={currentDate} onClick={() => onReserve(currentDate)} />
                    </>
            }
        </div>
    )
        ;
};
