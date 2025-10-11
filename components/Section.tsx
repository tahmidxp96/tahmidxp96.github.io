
import React, { useState, useEffect, useRef } from 'react';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
}

const SectionComponent: React.FC<SectionProps> = ({ id, children, className = '' }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`py-20 reveal ${isVisible ? 'visible' : ''} ${className}`}
        >
            {children}
        </section>
    );
};

export const Section = React.memo(SectionComponent);
