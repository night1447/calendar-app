import { FC, PropsWithChildren } from 'react';
import { Container } from '../Container/Container.tsx';
import styles from './section.module.scss';

interface SectionProps {
    className?: string;
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({ className, children }) => {
    return (
        <section className={`${styles.section} ${className || ''}`}>
            <Container>
                {children}
            </Container>
        </section>
    );
};
