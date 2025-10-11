
import React from 'react';
import { Section } from '../Section';
import { PublicationItem } from '../PublicationItem';
import { publications } from '../../data';
import type { ModalType } from '../../types';
import { SectionHeader } from '../SectionHeader';

interface PublicationsSectionProps {
    onOpenModal: (modalType: ModalType) => void;
}

const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onOpenModal }) => (
    <Section id="publications">
        <SectionHeader icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>} title="Publications & Conferences" />
        <div className="space-y-6 max-w-4xl mx-auto">
            {publications.map((pub, index) => <PublicationItem key={index} {...pub} onOpenModal={onOpenModal} />)}
        </div>
    </Section>
);

export default PublicationsSection;
