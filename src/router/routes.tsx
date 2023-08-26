import { RouteObject } from 'react-router-dom';
import { MainPage } from '../pages/MainPage/MainPage.tsx';
import { AdminPage } from '../pages/AdminPage/AdminPage.tsx';

export const routes: RouteObject[] = [
    {
        element: <MainPage />,
        path: '/',
    },
    {
        element: <AdminPage />,
        path: '/admin',
    },
];
