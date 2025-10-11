import React, { useEffect, useRef } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const titleId = `modal-title-${title.replace(/\s+/g, '-').toLowerCase()}`;

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && e.target === modalRef.current) {
            onClose();
        }
    };

    return (
        <div 
            ref={modalRef}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300 ease-in-out"
            style={{ opacity: isOpen ? 1 : 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
        >
            <div 
                className="glass-effect w-full max-w-3xl max-h-[90vh] rounded-3xl p-8 overflow-y-auto transition-transform duration-300 ease-in-out"
                style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)', opacity: isOpen ? 1 : 0 }}
            >
                <div className="flex justify-between items-center mb-6">
                    <h3 id={titleId} className="text-2xl font-bold text-green-300">{title}</h3>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white/20 transition-colors" aria-label="Close modal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>
                <div className="space-y-8">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Modal);