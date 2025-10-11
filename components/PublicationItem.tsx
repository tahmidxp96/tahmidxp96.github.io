
import React, { useCallback } from 'react';
import type { Publication, ModalType } from '../types';

interface PublicationItemProps extends Publication {
    onOpenModal: (modalType: ModalType) => void;
}

const PublicationItemComponent: React.FC<PublicationItemProps> = ({ citation, modalType, onOpenModal }) => {
    const handleClick = useCallback(() => {
        onOpenModal(modalType);
    }, [onOpenModal, modalType]);
    
    return (
        <div onClick={handleClick} className="glass-effect p-6 rounded-xl cursor-pointer relative group">
            <div className="absolute top-4 right-4 h-8 w-8 bg-white/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-green-500 group-hover:rotate-90">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </div>
            {citation}
        </div>
    );
};

export const PublicationItem = React.memo(PublicationItemComponent);
