import { FC, PropsWithChildren } from 'react';
import { Portal } from '../Portal/Portal.tsx';
import styles from './modal.module.scss';
import { bodyScroll } from '../../../utils/bodyScroll.ts';
import { CloseIcon } from '../Icons';

interface ModalProps {
    showModal: boolean;
    onClose: () => void;
}

export const Modal: FC<PropsWithChildren<ModalProps>> = ({ children, showModal, onClose }) => {

    const closeModalHandler = () => {
        bodyScroll.open();
        onClose();
    };
    if (showModal) {
        bodyScroll.close();
        return (
            <Portal id={'modal'}>
                <div className={styles.modal}>
                    {children}
                </div>
                <button type={'button'} className={styles.close} onClick={closeModalHandler}>
                    <CloseIcon className={styles.svg} />
                </button>
                <div className={styles.backdrop} onClick={closeModalHandler}></div>
            </Portal>
        );
    }
    return <></>;
};
