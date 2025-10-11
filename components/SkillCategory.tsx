
import React from 'react';
import type { SkillCategoryData } from '../types';

const SkillCategoryComponent: React.FC<SkillCategoryData> = ({ name, icon, skills }) => {
    return (
        <div>
            <h4 className="font-semibold text-lg text-green-300 mb-4 flex items-center gap-2">
                {icon}
                {name}
            </h4>
            <div className="flex flex-wrap gap-3">
                {skills.map(skill => (
                    <span key={skill} className="skill-tag text-sm font-medium px-4 py-1 rounded-full">{skill}</span>
                ))}
            </div>
        </div>
    );
};

export const SkillCategory = React.memo(SkillCategoryComponent);
