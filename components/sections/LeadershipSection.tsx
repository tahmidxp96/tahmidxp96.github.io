
import React from 'react';
import { Section } from '../Section';
import { leadershipItems } from '../../data';
import { SectionHeader } from '../SectionHeader';

const LeadershipItem = React.memo(({ role, period, organization }: { role: string, period: string, organization: string }) => (
    <div className="glass-effect p-6 rounded-2xl">
        <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold text-xl text-green-300">{role}</h4>
            <span className="text-sm text-slate-400 flex-shrink-0">{period}</span>
        </div>
        <p className="text-md font-medium text-slate-200">{organization}</p>
    </div>
));

const LeadershipSection: React.FC = () => (
    <Section id="leadership">
        <SectionHeader icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>} title="Leadership & Volunteering" />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipItems.map((item, index) => (
                <LeadershipItem key={index} {...item} />
            ))}
        </div>
    </Section>
);

export default LeadershipSection;
