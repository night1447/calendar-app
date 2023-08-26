import { useState } from 'react';

import { Calendar } from '../Calendar/Calendar.tsx';
import { Modal } from '../UI/Modal/Modal.tsx';
import { Reserve } from '../Reserve/Reserve.tsx';
import { Section } from '../UI/Section/Section.tsx';
import { addReservationAction } from '../../store/reducers/Reservation/actions.ts';
import { IReservation } from '../../models';
import { useTypedDispatch } from '../../hooks/useTypedDispatch.ts';

import styles from './user.module.scss';

export const UserInterface = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [date, setDate] = useState(new Date());
    const dispatch = useTypedDispatch();
    const showModalHandler = (date: Date) => {
        setShowModal(true);
        setDate(date);
    };

    const closeModalHandler = () => {
        setShowModal(false);
    };

    const addReservationHandler = (reservation: IReservation) => {
        dispatch(addReservationAction(reservation));
    };

    return (
        <Section>
            <Calendar onReserve={showModalHandler} />
            <Modal showModal={showModal} onClose={closeModalHandler}>
                <div className={styles.user}>
                    <Reserve date={date} haveTitle={true} onAdd={addReservationHandler} />
                </div>
            </Modal>
        </Section>
    );
};
