import { useState, useEffect } from 'react';

interface TypeWriterProps {
    text: string;
    delay?: number;
    className?: string;
}

export const TypeWriter = ({ text, delay = 100, className = '' }: TypeWriterProps) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return <span className={className}>{currentText}</span>;
};
