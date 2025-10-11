
import React from 'react';
import type { NavLink, Competency, Experience, Project, Publication, SkillCategoryData, Leadership, Hobby } from './types';

export const navLinks: NavLink[] = [
    { href: '#about', label: 'About' },
    { href: '#competencies', label: 'Competencies' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Publications' },
    { href: '#contact', label: 'Contact' },
];

export const competencies: Competency[] = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-green-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m12 14 4-2"></path><path d="m12 14-4-2"></path><path d="m12 14-4 2"></path><path d="m12 14 4 2"></path><path d="m12 14-4-2-4 2"></path><path d="m12 14 4-2 4 2"></path></svg>,
        title: 'Sustainable Tech',
        description: 'Developing solar-powered, water-efficient systems that minimize environmental impact and promote renewable energy in farming.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-green-400"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>,
        title: 'Data-Driven Insights',
        description: 'Leveraging field and lab data to drive decision-making, optimize resource allocation, and improve crop quality from seed to harvest.',
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-green-400"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
        title: 'Automation & IoT',
        description: 'Engineering automated systems with ESP32 microcontrollers and IoT platforms for precise, remote management of agricultural operations.',
    },
];

const expIcons = {
    leaf: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-400 flex-shrink-0"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>,
    chart: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-400 flex-shrink-0"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>,
    code: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-400 flex-shrink-0"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    settings: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-400 flex-shrink-0"><path d="M12 12v.01"></path><path d="M16.24 7.76v.01"></path><path d="M19.07 10.93v.01"></path><path d="M19.07 13.07v.01"></path><path d="M16.24 16.24v.01"></path><path d="M12 16.99v.01"></path><path d="M7.76 16.24v.01"></path><path d="M4.93 13.07v.01"></path><path d="M4.93 10.93v.01"></path><path d="M7.76 7.76v.01"></path></svg>,
    doc: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-400 flex-shrink-0"><path d="M15.5 2H8.6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1.1V21c0 .4.2.8.5 1.1.3.3.7.5 1.1.5h7.8c.4 0 .8-.2 1.1-.5.3-.3.5-.7.5-1.1V6.5L15.5 2z"></path><path d="M15 2v5h5"></path><path d="M10 16s-1.5-2-3-2-3 2-3 2"></path><path d="M10 12s-1.5-2-3-2-3 2-3 2"></path></svg>,
    sun: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-400 flex-shrink-0"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>,
    water: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-400 flex-shrink-0"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>,
    chip: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 text-green-400 flex-shrink-0"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
};

export const experiences: Experience[] = [
    {
        role: 'Leaf Quality Officer',
        period: 'Aug 2024 - Present',
        company: 'British American Tobacco (BAT) Bangladesh',
        points: [
            { icon: expIcons.leaf, text: <span>Streamlined manual quality processes and automated key tasks to boost efficiency and accuracy.</span> },
            { icon: expIcons.chart, text: <span>Analyzed field/lab samples to reduce waste and advance sustainable supply chains.</span> },
            { icon: expIcons.code, text: <span>Managed cross-functional IT projects, enhancing operational technology and data infrastructure.</span> },
            { icon: expIcons.settings, text: <span>Served as Acting Maintenance Lead at the Green Leaf Threshing plant, overseeing equipment uptime.</span> },
            { icon: expIcons.doc, text: <span>Prepared comprehensive documentation for internal audits, ensuring compliance with quality standards.</span> },
        ]
    },
    {
        role: 'Research Fellow',
        period: 'Oct 2021 - Jul 2024',
        company: 'Bangladesh Institute of Nuclear Agriculture',
        points: [
            { icon: expIcons.sun, text: <span>Developed a <span className="font-semibold text-white">solar-powered</span> automated irrigation system, promoting renewable energy in agriculture.</span> },
            { icon: expIcons.water, text: <span>Engineered the system for significant <span className="font-semibold text-white">water efficiency</span>, conserving a critical natural resource.</span> },
            { icon: expIcons.chip, text: <span>Utilized ESP32 microcontrollers and Blynk IoT for precise, remote resource management.</span> },
        ]
    }
];

export const projects: Project[] = [
    {
        title: 'Thesis: Automated Irrigation for Sustainable Farming',
        description: 'Designed and field-tested a smart irrigation system using ESP32 and solar power. This project demonstrated significant water savings and reduced reliance on manual labor, proving how targeted technology can lead to more sustainable and productive agriculture.',
        highlight: {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>,
            text: 'Resource Efficiency'
        },
        modalType: 'irrigation',
    },
    {
        title: 'All-in-one Silage Machine',
        description: 'A prize-winning design concept for streamlining the silage production process. This innovation aims to reduce post-harvest loss and improve feed quality for livestock, contributing to a more sustainable and efficient agricultural cycle.',
        highlight: {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 4 13V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7a7 7 0 0 1-7 7h-2zm-1-11v2a3 3 0 0 0 6 0v-2"></path></svg>,
            text: 'Circular Agriculture Innovation'
        },
        modalType: 'silage',
    }
];

export const publications: Publication[] = [
    {
        citation: <p className="font-semibold text-slate-200 pr-10">Khan, M. T. H., et al. (2025, February). <span className="text-green-400">Automated irrigation for rice fields: A sustainable solution...</span> [Conference poster]. 1st International Conference on Agricultural Machinery and Bioresource Engineering (ICAMBE).</p>,
        modalType: 'irrigation',
    },
    {
        citation: <p className="font-semibold text-slate-200 pr-10">Hasan, M. A., et al. (2024). <span className="text-green-400">Technical evaluation of low-head drip irrigation system.</span> Global Research in Environment and Sustainability, 2(1), 19-28.</p>,
        modalType: 'drip',
    },
    {
        citation: <p className="font-semibold text-slate-200 pr-10">Hassan, R., et al. (2020). <span className="text-green-400">Prediction of Epidemics Trend of COVID-19 in Bangladesh.</span> Frontiers in Public Health, 8.</p>,
        modalType: 'covid',
    }
];

export const skillCategories: SkillCategoryData[] = [
    {
        name: 'Programming & Development',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
        skills: ['Python', 'C/C++', 'R', 'LaTeX'],
    },
    {
        name: 'IoT & Embedded Platforms',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>,
        skills: ['Arduino IDE', 'Blynk', 'ESP8266/ESP32', 'ESP-NOW'],
    },
    {
        name: 'Data & Design',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>,
        skills: ['MS Excel', 'GraphPad Prism', 'Fusion 360', 'Adobe Creative Suite', 'Cinema4D'],
    },
];

export const leadershipItems: Leadership[] = [
    { role: 'Additional General Secretary', period: '2020-2022', organization: 'Bangladesh Agricultural University Career Club (BAUCC)' },
    { role: 'Committee Member', period: '2018-2020', organization: 'Volunteer for Bangladesh (VBD)' },
    { role: 'Active Citizen', period: '2018', organization: 'Participated in Social Action Project with the British Council.' },
    { role: 'Volunteer', period: '2018', organization: 'Bangladesh Biology Olympiad' },
];

export const hobbies: Hobby[] = [
    { name: 'Reading Books', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-green-400"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> },
    { name: 'Playing Guitar', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-green-400"><path d="M16.8 3.8 19 2l-2 2.2"/><path d="M14 6.1 18 2"/><path d="M12 8.5 18 2.5"/><path d="m10 11 8-8"/><path d="m8 13.5 8-8"/><path d="M6 16.5 13 9.5"/><path d="M6.5 19.5 13 13H.5s.5 3.5 3.5 6.5 6.5 3.5 6.5 3.5Z"/></svg> },
    { name: 'Photography', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-green-400"><path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0"></path><path d="M12 14.5s4-2 4-5.5"></path><path d="M12 14.5s-4-2-4-5.5"></path><path d="M12 22v-7.5"></path><path d="M9 14.5c-3.33-1.5-4-5-4-5.5"></path><path d="M15 14.5c3.33-1.5 4-5 4-5.5"></path></svg> },
    { name: 'Watching Movies', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-green-400"><rect x="2" y="6" width="20" height="12" rx="2"></rect><path d="M6 12h4"></path><path d="M14 12h4"></path></svg> },
    { name: 'Travelling', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-green-400"><path d="M2.5 16.1A3.6 3.6 0 0 1 2 12.5a3.6 3.6 0 0 1 .5-2.1"></path><path d="M4.2 18.9A3.6 3.6 0 0 1 4 15.3a3.6 3.6 0 0 1 .2-1.4"></path><path d="M6.3 21a3.6 3.6 0 0 1-.4-2.3 3.6 3.6 0 0 1 .4-2.3"></path><path d="M8.8 22.5a3.6 3.6 0 0 1-.4-2.7 3.6 3.6 0 0 1 .4-2.7"></path><path d="M11.7 23.2a3.6 3.6 0 0 1-.2-2.9 3.6 3.6 0 0 1 .2-2.9"></path><path d="M14.5 23.4a3.6 3.6 0 0 1 0-3.2"></path><path d="M17.3 22.5a3.6 3.6 0 0 1 .4-2.7 3.6 3.6 0 0 1-.4-2.7"></path><path d="M19.7 21a3.6 3.6 0 0 1 .4-2.3 3.6 3.6 0 0 1-.4-2.3"></path><path d="M21.8 18.9a3.6 3.6 0 0 1 .2-1.4 3.6 3.6 0 0 1-.2-1.4"></path><path d="M21.5 16.1A3.6 3.6 0 0 1 22 12.5a3.6 3.6 0 0 1-.5 2.1"></path><path d="M12 2.6c-5 0-8 5.5-8 9.9 0 4.4 3 9.9 8 9.9s8-5.5 8-9.9c0-4.4-3-9.9-8-9.9Z"></path></svg> },
    { name: 'Computer Gaming', icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 text-green-400"><path d="M18.5 8.5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h13Z"/><path d="M5.5 12H4a2 2 0 0 0 0 4h2"/><path d="M18.5 12H20a2 2 0 0 1 0 4h-2"/><path d="M12 15.5V14"/><path d="M12 9.5V8"/></svg> },
];
