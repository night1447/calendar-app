import React, { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './typography.module.scss';

type IType = 'h1' | 'h2' | 'h3' | 'p';

interface TypographyProps extends HTMLAttributes<HTMLElement> {
    type: IType;
}

const createClassName = (type: IType): string => {
    let className: string = '';
    if (type === 'p') {
        className += ` ${styles.paragraph}`;
    } else {
        className += ` ${styles.title}`;
    }
    return className;
};
export const Typography: FC<PropsWithChildren<TypographyProps>> = ({ children, type, ...otherProps }) => {
    return React.createElement(type, {
        ...otherProps,
        className: `${otherProps.className || ''} ${createClassName(type)}`,
    }, children);
};
