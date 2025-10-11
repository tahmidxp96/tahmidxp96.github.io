
import React, { useState, useCallback, Suspense, lazy } from 'react';

import { navLinks } from './data';
import type { ModalType } from './types';

import { Header } from './components/Header';
import { Loader } from './components/Loader';
import { HeroSection } from './components/sections/HeroSection';

const CompetenciesSection = lazy(() => import('./components/sections/CompetenciesSection'));
const ExperienceSection = lazy(() => import('./components/sections/ExperienceSection'));
const ProjectsSection = lazy(() => import('./components/sections/ProjectsSection'));
const PublicationsSection = lazy(() => import('./components/sections/PublicationsSection'));
const SkillsSection = lazy(() => import('./components/sections/SkillsSection'));
const LeadershipSection = lazy(() => import('./components/sections/LeadershipSection'));
const HobbiesSection = lazy(() => import('./components/sections/HobbiesSection'));
const ContactSection = lazy(() => import('./components/sections/ContactSection'));

const Modal = lazy(() => import('./components/Modal'));
const IrrigationModalContent = lazy(() => import('./components/modals/IrrigationModalContent'));
const SilageModalContent = lazy(() => import('./components/modals/SilageModalContent'));
const CovidModalContent = lazy(() => import('./components/modals/CovidModalContent'));
const DripModalContent = lazy(() => import('./components/modals/DripModalContent'));


const App: React.FC = () => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);
    
    const openModal = useCallback((modalType: ModalType) => {
        if (modalType) {
            setActiveModal(modalType);
            document.body.style.overflow = 'hidden';
        }
    }, []);

    const closeModal = useCallback(() => {
        setActiveModal(null);
        document.body.style.overflow = '';
    }, []);

    return (
        <>
            <div className="liquid-bg"></div>
            <Header navLinks={navLinks} />

            <main className="container mx-auto px-6 py-24 pt-32">
                <HeroSection />
                <Suspense fallback={<Loader />}>
                    <CompetenciesSection />
                    <ExperienceSection />
                    <ProjectsSection onOpenModal={openModal} />
                    <PublicationsSection onOpenModal={openModal} />
                    <SkillsSection />
                    <LeadershipSection />
                    <HobbiesSection />
                    <ContactSection />
                </Suspense>
            </main>

            <Suspense fallback={null}>
                {activeModal === 'irrigation' && (
                    <Modal isOpen={true} onClose={closeModal} title="Automated Irrigation System">
                        <IrrigationModalContent />
                    </Modal>
                )}
                {activeModal === 'silage' && (
                    <Modal isOpen={true} onClose={closeModal} title="All-in-One Silage Machine">
                        <SilageModalContent />
                    </Modal>
                )}
                {activeModal === 'covid' && (
                    <Modal isOpen={true} onClose={closeModal} title="COVID-19 Epidemic Trend Prediction">
                        <CovidModalContent />
                    </Modal>
                )}
                {activeModal === 'drip' && (
                    <Modal isOpen={true} onClose={closeModal} title="Low-Head Drip Irrigation Evaluation">
                        <DripModalContent />
                    </Modal>
                )}
            </Suspense>
        </>
    );
}

export default App;
