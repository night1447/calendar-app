import { FC } from 'react';

import { Section } from '../../components/UI/Section/Section.tsx';
import { ReservationList } from '../../components/ReservationList/ReservationList.tsx';
import { AdminReserve } from '../../components/AdminReserve/AdminReserve.tsx';

export const AdminPage: FC = () => {

    return (
        <Section>
            <ReservationList />
            <AdminReserve />
        </Section>
    );
};
