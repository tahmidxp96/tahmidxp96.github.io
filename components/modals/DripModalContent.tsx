
import React from 'react';

const DripModalContent: React.FC = () => (
    <>
        <div>
            <h4 className="font-semibold text-lg mb-2 text-slate-100">Study Purpose</h4>
            <p className="text-slate-300">This research evaluated the technical effectiveness of a low-head drip irrigation system in a laboratory setting. The study focused on how varying the water supply head (from 0.91m to 1.83m) impacts water distribution uniformity along a 15.24m drip line, which is crucial for efficient water use in agriculture.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                <h4 className="font-semibold text-lg mb-2 text-slate-100">Performance Metrics</h4>
                <div className="space-y-2">
                    <p><strong className="text-green-400">Emission Uniformity (EU):</strong> Ranged from 33-42%, indicating poor and inefficient water distribution under the tested conditions.</p>
                    <p><strong className="text-green-400">Flow Variation (FV):</strong> Ranged from 44-51%, which is considered unacceptable and highlights significant inconsistency in water flow.</p>
                </div>
            </div>
            <div>
                <h4 className="font-semibold text-lg mb-3 text-slate-100">Experimental Setup</h4>
                <p className="text-slate-300">A PVC bucket served as the water source, placed on a stand of adjustable height. Water flowed through a lateral drip pipe with micro-tube emitters, and catch cans were used to measure the discharge at various points.</p>
            </div>
        </div>
        <div>
            <h4 className="font-semibold text-lg mb-2 text-slate-100">Conclusion & Recommendation</h4>
            <p className="text-slate-300">The study concluded that the existing low-head system performed poorly, making it unsuitable for efficient crop irrigation beyond very small plots. It was recommended that the system be redesigned—specifically the emitter openings and micro-tube diameters—to achieve an EU above 80% for the system to be considered economical and effective for small-scale farmers.</p>
        </div>
        <div className="text-center pt-6">
            <a href="#" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                Read Full Paper
            </a>
        </div>
    </>
);

export default DripModalContent;
