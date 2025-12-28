import type { ReactNode } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface RevealProps {
    children: ReactNode;
    className?: string;
}

export const Reveal = ({ children, className = '' }: RevealProps) => {
    const ref = useScrollReveal();

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
};
