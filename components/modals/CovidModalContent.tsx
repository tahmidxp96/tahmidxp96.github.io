import React from 'react';

const CovidModalContent: React.FC = () => (
    <>
        <div>
            <h4 className="font-semibold text-lg mb-2 text-slate-100">Research Background</h4>
            <p className="text-slate-300">In response to the COVID-19 pandemic, this study utilized the Susceptible-Infectious-Recovered (SIR) mathematical model to analyze the outbreak in Bangladesh. The aim was to provide a numerical demonstration to help forecast the epidemic's trajectory and inform public health decisions.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                <h4 className="font-semibold text-lg mb-2 text-slate-100">Key Findings</h4>
                <div className="space-y-2">
                    <p><strong className="text-green-400">Basic Reproduction Number (R₀):</strong> Calculated at 6.924, indicating a high infection rate where one infected individual infects almost seven others.</p>
                    <p><strong className="text-green-400">Exponential Growth:</strong> The model confirmed that the infection rate was significantly greater than the recovery rate, leading to rapid spread.</p>
                </div>
            </div>
            <div>
                <h4 className="font-semibold text-lg mb-3 text-slate-100">SIR Model Explained</h4>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3"><span className="font-semibold text-white">S (Susceptible):</span> The number of individuals at risk of being infected.</li>
                    <li className="flex items-center gap-3"><span className="font-semibold text-white">I (Infectious):</span> The number of individuals capable of spreading the disease.</li>
                    <li className="flex items-center gap-3"><span className="font-semibold text-white">R (Recovered):</span> The number of individuals who have recovered or are deceased, and are now immune.</li>
                </ul>
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-lg mb-2 text-slate-100">Conclusion</h4>
            <p className="text-slate-300">The analysis provided crucial insights into the potential scale of the outbreak in Bangladesh. It highlighted the importance of public health interventions like social distancing and quarantine measures to reduce the infection rate (β) and increase the recovery rate (γ), thereby flattening the curve.</p>
        </div>
        <div className="text-center pt-6">
            <a href="https://www.frontiersin.org/articles/10.3389/fpubh.2020.559437/full" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                Read Full Paper
            </a>
        </div>
    </>
);

export default CovidModalContent;