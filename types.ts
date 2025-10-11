
export type ModalType = 'irrigation' | 'silage' | 'covid' | 'drip' | null;

export interface NavLink {
    href: string;
    label: string;
}

export interface Competency {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export interface Experience {
    role: string;
    period: string;
    company: string;
    points: {
        icon: React.ReactNode;
        text: React.ReactNode;
    }[];
}

export interface Project {
    title: string;
    description: string;
    highlight: {
        icon: React.ReactNode;
        text: string;
    };
    modalType: ModalType;
}

export interface Publication {
    citation: React.ReactNode;
    modalType: ModalType;
}

export interface SkillCategoryData {
    name: string;
    icon: React.ReactNode;
    skills: string[];
}

export interface Leadership {
    role: string;
    period: string;
    organization: string;
}

export interface Hobby {
    name: string;
    icon: React.ReactNode;
}
