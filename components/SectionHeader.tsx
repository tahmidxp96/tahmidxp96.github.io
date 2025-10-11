
import React from 'react';

interface SectionHeaderProps {
    icon: React.ReactNode;
    title: string;
}

const SectionHeaderComponent: React.FC<SectionHeaderProps> = ({ icon, title }) => (
    <div className="flex items-center justify-center gap-3 mb-12">
        {icon}
        <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
    </div>
);

export const SectionHeader = React.memo(SectionHeaderComponent);
