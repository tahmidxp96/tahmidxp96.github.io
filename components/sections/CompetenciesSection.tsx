
import React from 'react';
import { Section } from '../Section';
import { CompetencyCard } from '../CompetencyCard';
import { competencies } from '../../data';

const CompetenciesSection: React.FC = () => (
    <Section id="competencies">
        <div className="text-center mb-12">
            <h3 className="text-4xl font-bold tracking-tight">Core Competencies</h3>
            <p className="text-slate-400 mt-2">Pioneering the future of agriculture through technology and sustainability.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {competencies.map((item, index) => <CompetencyCard key={index} {...item} />)}
        </div>
    </Section>
);

export default CompetenciesSection;
