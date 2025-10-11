
import React from 'react';
import { Section } from '../Section';
import { SkillCategory } from '../SkillCategory';
import { skillCategories } from '../../data';
import { SectionHeader } from '../SectionHeader';

const SkillsSection: React.FC = () => (
    <Section id="skills">
        <SectionHeader icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>} title="Skills & Education" />
        <div className="max-w-4xl mx-auto space-y-12">
            {skillCategories.map((cat, index) => <SkillCategory key={index} {...cat} />)}
            <div className="pt-8 border-t border-gray-700">
                <h4 className="font-semibold text-lg text-green-300 mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.42 10.72l-9-4.5a1 1 0 0 0-.84 0l-9 4.5a1 1 0 0 0 0 1.79l9 4.5a1 1 0 0 0 .84 0l9-4.5a1 1 0 0 0 0-1.79Z"/>
                        <path d="M12 22V12"/>
                    </svg>
                    Education
                </h4>
                <div className="glass-effect p-6 rounded-2xl">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2 sm:gap-0">
                        <h5 className="font-bold text-lg text-slate-100">Bachelor of Science in Agricultural Engineering</h5>
                        <span className="text-sm text-slate-400">Jan 2017 - Aug 2024</span>
                    </div>
                    <p className="text-md font-medium text-slate-300 mb-4">Bangladesh Agricultural University (BAU), Mymensingh</p>
                    <ul className="list-disc list-inside text-slate-400 text-sm">
                        <li>Major: Farm Power and Machinery</li>
                        <li>Thesis: Design and Development of a Microcontroller-Based Automated Irrigation for Rice Field</li>
                    </ul>
                </div>
            </div>
        </div>
    </Section>
);

export default SkillsSection;
