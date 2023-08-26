import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'outline' | 'fill';
}

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
    const { variant, className, ...rest } = props;
    return (
        <button
            className={`${className || ''} ${styles[variant]} ${styles.btn}`}
            {...rest} />
    );
};
