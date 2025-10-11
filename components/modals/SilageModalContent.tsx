
import React from 'react';

const SilageModalContent: React.FC = () => (
    <>
        <div>
            <h4 className="font-semibold text-lg mb-2 text-slate-100">Project Background</h4>
            <p className="text-slate-300">Traditional silage production is labor-intensive, time-consuming, and often results in inconsistent quality. This project introduces a promising all-in-one machine that integrates chopping, mixing, compressing, and bagging into a single, efficient process, saving time and money for farmers.</p>
        </div>
        <div>
            <h4 className="font-semibold text-lg mb-3 text-slate-100">Process Flow</h4>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center">
                <div className="flex flex-col items-center min-w-[80px]"><span className="bg-slate-700 rounded-full px-3 py-1 text-sm">Input</span><small className="mt-1">Grain & Grass</small></div>
                <span className="text-green-400 font-bold">&rarr;</span>
                <div className="flex flex-col items-center min-w-[80px]"><span className="bg-slate-700 rounded-full px-3 py-1 text-sm">Chopping</span></div>
                <span className="text-green-400 font-bold">&rarr;</span>
                <div className="flex flex-col items-center min-w-[80px]"><span className="bg-slate-700 rounded-full px-3 py-1 text-sm">Mixing</span><small className="mt-1">with Molasses</small></div>
                <span className="text-green-400 font-bold">&rarr;</span>
                <div className="flex flex-col items-center min-w-[80px]"><span className="bg-slate-700 rounded-full px-3 py-1 text-sm">Compressing</span></div>
                <span className="text-green-400 font-bold">&rarr;</span>
                <div className="flex flex-col items-center min-w-[80px]"><span className="bg-slate-700 rounded-full px-3 py-1 text-sm">Packaging</span></div>
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-lg mb-3 text-slate-100">Socio-Economic Impact</h4>
            <ul className="space-y-3">
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 flex-shrink-0 mt-1"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span><strong className="text-white">Improves Farmer's Revenue:</strong> Offers an efficient, convenient, and cost-effective method for producing high-quality silage.</span></li>
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 flex-shrink-0 mt-1"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg><span><strong className="text-white">Boosts Animal Well-being:</strong> Simplifies production of consistent, high-energy, nutritious silage, leading to healthier livestock.</span></li>
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 flex-shrink-0 mt-1"><path d="M2 18a1 1 0 0 0 .8 1.6l1.3.4A1 1 0 0 1 5 21L6 22a1 1 0 0 0 1.6-.8l.4-1.3A1 1 0 0 1 9 19l1-1a1 1 0 0 0-.8-1.6l-1.3-.4A1 1 0 0 1 6 15L5 14a1 1 0 0 0-1.6.8l-.4 1.3A1 1 0 0 1 2 17l-1 1a1 1 0 0 0 .8 1.6Z"></path></svg><span><strong className="text-white">Enhances Food Production:</strong> Streamlines the silage-making process to potentially increase greater food output and sustainability.</span></li>
            </ul>
        </div>
        <div className="text-center pt-6">
            <a href="#" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                View Full Poster
            </a>
        </div>
    </>
);

export default SilageModalContent;
