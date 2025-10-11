
import React from 'react';
import { Section } from '../Section';
import { hobbies } from '../../data';
import { SectionHeader } from '../SectionHeader';
import type { Hobby } from '../../types';

const HobbyItem = React.memo(({ name, icon }: Hobby) => (
    <div className="glass-effect p-4 rounded-2xl text-center flex flex-col items-center justify-center">
        {icon}
        <h4 className="font-semibold text-slate-200">{name}</h4>
    </div>
));

const HobbiesSection: React.FC = () => (
    <Section id="hobbies">
        <SectionHeader icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>} title="Hobbies & Interests" />
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
                <HobbyItem key={index} {...hobby} />
            ))}
        </div>
    </Section>
);

export default HobbiesSection;
