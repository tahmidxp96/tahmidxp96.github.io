
import React from 'react';
import { Section } from '../Section';
import { ProjectCard } from '../ProjectCard';
import { projects } from '../../data';
import type { ModalType } from '../../types';
import { SectionHeader } from '../SectionHeader';

interface ProjectsSectionProps {
    onOpenModal: (modalType: ModalType) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenModal }) => (
    <Section id="projects">
        <SectionHeader icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9L12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>} title="Key Projects & Thesis" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {projects.map((proj, index) => <ProjectCard key={index} {...proj} onOpenModal={onOpenModal} />)}
        </div>
    </Section>
);

export default ProjectsSection;
