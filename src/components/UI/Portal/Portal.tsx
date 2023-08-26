import { FC, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    id: string;
}

export const Portal: FC<PropsWithChildren<PortalProps>> = ({ children, id }) => {
    return createPortal(children, document.getElementById(id) || document.body);
};
