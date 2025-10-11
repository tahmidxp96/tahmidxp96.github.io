
import React from 'react';
import { Section } from '../Section';
import { ExperienceItem } from '../ExperienceItem';
import { experiences } from '../../data';
import { SectionHeader } from '../SectionHeader';

const ExperienceSection: React.FC = () => (
    <Section id="experience">
        <SectionHeader icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>} title="Research & Work Experience" />
        <div className="space-y-8 max-w-4xl mx-auto">
            {experiences.map((exp, index) => <ExperienceItem key={index} {...exp} />)}
        </div>
    </Section>
);

export default ExperienceSection;
