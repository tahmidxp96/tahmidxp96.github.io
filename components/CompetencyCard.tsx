
import React from 'react';
import type { Competency } from '../types';

const CompetencyCardComponent: React.FC<Competency> = ({ icon, title, description }) => {
    return (
        <div className="glass-effect p-8 rounded-3xl text-center">
            {icon}
            <h4 className="text-2xl font-bold mb-2">{title}</h4>
            <p className="text-slate-300">{description}</p>
        </div>
    );
};

export const CompetencyCard = React.memo(CompetencyCardComponent);
