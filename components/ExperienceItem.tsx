
import React from 'react';
import type { Experience } from '../types';

const ExperienceItemComponent: React.FC<Experience> = ({ role, period, company, points }) => {
    return (
        <div className="glass-effect p-6 rounded-2xl">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2 gap-2 sm:gap-0">
                <h4 className="font-bold text-xl text-green-300">{role}</h4>
                <span className="text-sm text-slate-400">{period}</span>
            </div>
            <p className="text-md font-medium text-slate-200 mb-4">{company}</p>
            <ul className="space-y-3 text-slate-300">
                {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                        {point.icon}
                        <span>{point.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export const ExperienceItem = React.memo(ExperienceItemComponent);
