
import React from 'react';
import { Section } from '../Section';

export const HeroSection: React.FC = React.memo(() => (
    <Section id="about" className="min-h-[80vh] flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">Md. Tahmid Hassan Khan</h2>
        <p className="text-xl md:text-2xl text-green-400 font-medium mb-8">Agricultural Engineer | IoT Specialist | Sustainable Farming Advocate</p>
        <p className="max-w-3xl text-slate-300 leading-relaxed">
            A dedicated Agricultural Engineer focused on automation and data-driven decision-making to foster sustainable agriculture. My work involves developing IoT systems and innovative machinery to enhance resource efficiency and promote environmental stewardship. I am passionate about creating smart, sustainable solutions for real-world agricultural challenges.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="mailto:tahmidxp96@gmail.com" className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 text-lg">
                Contact Me
            </a>
            <a href="#" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center gap-2 text-lg">
                Download CV
            </a>
        </div>
    </Section>
));
