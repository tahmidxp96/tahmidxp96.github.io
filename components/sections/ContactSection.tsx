
import React from 'react';
import { Section } from '../Section';

const ContactSection: React.FC = () => (
    <Section id="contact" className="text-center">
        <h3 className="text-4xl font-bold text-center mb-4 tracking-tight">Get In Touch</h3>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">I'm currently seeking MS/PhD opportunities to advance innovations in smart, sustainable, and resource-efficient agriculture. <br/> Let's connect and build the future of farming together.</p>
        <a href="mailto:tahmidxp96@gmail.com" className="text-2xl font-semibold text-green-400 hover:text-green-300 transition-colors inline-flex items-center gap-2">
            tahmidxp96@gmail.com
        </a>
        <div className="flex justify-center space-x-6 mt-10">
            <a href="https://www.linkedin.com/in/tahmid-hassan-khan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-400 transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
            </a>
        </div>
        <p className="text-xs text-slate-500 mt-16">&copy; 2025 Md. Tahmid Hassan Khan. All Rights Reserved.</p>
    </Section>
);

export default ContactSection;
