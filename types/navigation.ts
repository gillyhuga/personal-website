import { NextRouter } from 'next/router';
import { ReactNode } from 'react';

export interface MenuItem {
    name: string;
    description: string;
    href: string;
    icon: ReactNode;
}

export interface NavbarProps {
    router: NextRouter;
}