import React, { LegacyRef } from 'react';
import styles from './textarea.module.scss';

interface TextAreaProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const TextArea = React.forwardRef((props: TextAreaProps, ref) => {
    return (
        <div className={`${styles.textarea}`}>
            <input {...props} className={`${styles.input} ${props.className || ''}`} ref={ref as LegacyRef<HTMLInputElement>} />
            <label htmlFor={props.id} className={`${styles.label} ${props.className || ''}`}>
                {props.label}
            </label>
        </div>
    );
});
