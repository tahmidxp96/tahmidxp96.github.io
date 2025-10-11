
import React from 'react';

const IrrigationModalContent: React.FC = () => (
    <>
        <div>
            <h4 className="font-semibold text-lg mb-2 text-slate-100">Project Overview</h4>
            <p className="text-slate-300">This project addresses the inefficient water use in traditional rice farming by developing a low-cost, automated irrigation system. The goal is to optimize water usage, reduce manual labor, and enhance crop yields through smart technology, contributing to sustainable agriculture in Bangladesh.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
                <h4 className="font-semibold text-lg mb-3 text-slate-100">System Components</h4>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg><span><span className="font-semibold text-white">ESP32 Microcontroller:</span> The brain of the operation.</span></li>
                    <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M4 14a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2"></path><path d="M8 14v-4a4 4 0 1 1 8 0v4"></path></svg><span><span className="font-semibold text-white">Ultrasonic Sensors:</span> For precise water level measurement.</span></li>
                    <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 12v.01"></path><path d="M16.24 7.76v.01"></path><path d="M19.07 10.93v.01"></path><path d="M19.07 13.07v.01"></path><path d="M16.24 16.24v.01"></path><path d="M12 16.99v.01"></path><path d="M7.76 16.24v.01"></path><path d="M4.93 13.07v.01"></path><path d="M4.93 10.93v.01"></path><path d="M7.76 7.76v.01"></path></svg><span><span className="font-semibold text-white">Relay Module:</span> To safely control the water pump.</span></li>
                    <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg><span><span className="font-semibold text-white">DC 12V Pump:</span> For efficient water delivery.</span></li>
                </ul>
            </div>
            <div className="bg-black/20 p-4 rounded-xl border border-white/10">
                <h4 className="font-semibold text-lg mb-2 text-slate-100">Key Results</h4>
                <div className="space-y-2">
                    <p><strong className="text-green-400">96.4% Sensor Accuracy:</strong> Demonstrated highly reliable water level measurements.</p>
                    <p><strong className="text-green-400">Automated Pump Control:</strong> System effectively maintained optimal water levels based on set thresholds.</p>
                    <p><strong className="text-green-400">Remote Access:</strong> Real-time monitoring and data logging achieved via Blynk and IFTTT.</p>
                </div>
            </div>
        </div>
        <div className="text-center pt-6">
            <a href="#" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path></svg>
                View Full Poster
            </a>
        </div>
    </>
);

export default IrrigationModalContent;
