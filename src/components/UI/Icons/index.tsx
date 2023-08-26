import { FC, SVGProps } from 'react';
import styles from './icon.module.scss';

interface IconProps extends SVGProps<SVGElement> {
}

interface ArrowProps extends IconProps {
    side: 'left' | 'right' | 'top' | 'bottom';
}

export const ArrowIcon: FC<ArrowProps> = (props) => {
    return <svg width={`${props.width || 24} `} height={`${props.height || 24} `}

                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className={`${props.className} ${styles[props.side]}`}>
        <path d='M9 18.0001L15 12.0001L9 6.00006' stroke='black' strokeWidth='2' strokeLinecap='round'
              strokeLinejoin='round' />
    </svg>;
};

export const CloseIcon: FC<IconProps> = (props) => {
    return (
        <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'
             className={props.className}>
            <g clipPath='url(#clip0_333_509)'>
                <path
                    d='M25.88 24L36.9333 12.9467C37.1518 12.6916 37.2659 12.3635 37.253 12.028C37.24 11.6924 37.1009 11.3741 36.8634 11.1366C36.626 10.8992 36.3076 10.7601 35.9721 10.7471C35.6365 10.7341 35.3084 10.8483 35.0533 11.0667L24 22.12L12.9467 11.0534C12.6956 10.8023 12.3551 10.6613 12 10.6613C11.6449 10.6613 11.3044 10.8023 11.0533 11.0534C10.8023 11.3044 10.6612 11.645 10.6612 12C10.6612 12.3551 10.8023 12.6956 11.0533 12.9467L22.12 24L11.0533 35.0534C10.9138 35.1729 10.8004 35.32 10.7204 35.4854C10.6403 35.6508 10.5954 35.831 10.5883 36.0146C10.5812 36.1983 10.6121 36.3814 10.6792 36.5525C10.7462 36.7236 10.8479 36.879 10.9778 37.0089C11.1077 37.1389 11.2631 37.2405 11.4342 37.3076C11.6053 37.3746 11.7885 37.4055 11.9721 37.3984C12.1557 37.3913 12.3359 37.3464 12.5013 37.2663C12.6667 37.1863 12.8138 37.073 12.9333 36.9334L24 25.88L35.0533 36.9334C35.3084 37.1518 35.6365 37.266 35.9721 37.253C36.3076 37.24 36.626 37.1009 36.8634 36.8635C37.1009 36.626 37.24 36.3077 37.253 35.9721C37.2659 35.6365 37.1518 35.3084 36.9333 35.0534L25.88 24Z'
                    fill='#2F2F2F' />
            </g>
            <defs>
                <clipPath id='clip0_333_509'>
                    <rect width='48' height='48' fill='white' />
                </clipPath>
            </defs>
        </svg>

    );
};
