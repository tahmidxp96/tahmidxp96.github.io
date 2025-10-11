
import React from 'react';

export const Loader: React.FC = () => (
    <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
    </div>
);
