// src/data/TrainingData.ts

export interface Course {
    name: string;
    certified: boolean;
    type: string;
    duration: string;
    method: string;
    description: string;
}

export interface TrainingCategory {
    category: string;
    courses: Course[];
}

export const trainingData: TrainingCategory[] = [
    {
        category: 'Project Management & Agile',
        courses: [
            {
                name: 'PRINCE2 Foundation (7th Edition)',
                certified: true,
                type: 'Project Management',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Introduction to the PRINCE2 methodology, covering the principles, themes, and processes for managing projects.',
            },
            {
                name: 'PRINCE2 Practitioner (7th Edition)',
                certified: true,
                type: 'Project Management',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Advanced application of PRINCE2, teaching how to tailor and apply the method to different project environments.',
            },
            {
                name: 'PRINCE2 Agile Foundation',
                certified: true,
                type: 'Project Management',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Blends PRINCE2 governance with Agile concepts, suitable for delivering projects in an agile context.',
            },
            {
                name: 'PRINCE2 Agile Practitioner',
                certified: true,
                type: 'Project Management',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Advanced guidance on applying PRINCE2 and Agile together for practical project delivery.',
            },
            {
                name: 'PRINCE2 Workshops',
                certified: false,
                type: 'Project Management',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Practical, hands-on workshop focusing on specific PRINCE2 concepts without the pressure of a certification exam.',
            },
            {
                name: 'Agile Scrum Foundation',
                certified: true,
                type: 'Agile Framework',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Covers the fundamental principles of the Scrum framework and Agile mindset.',
            },
            {
                name: 'Agile Scrum Master',
                certified: true,
                type: 'Agile Framework',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Advanced training for current or aspiring Scrum Masters on coaching teams and removing impediments.',
            },
            {
                name: 'DevOps Foundation',
                certified: true,
                type: 'IT/Project Mgmt',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Focuses on the cultural and technical practices to improve collaboration between software development and IT operations.',
            },
        ],
    },
    {
        category: 'IT Service Management (ITSM)',
        courses: [
            {
                name: 'ITILv4 Foundation',
                certified: true,
                type: 'ITSM',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'The entry-level certification for IT Service Management, introducing the service value system.',
            },
            {
                name: 'ITILv4 Managing Professional Transition',
                certified: true,
                type: 'ITSM',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Bridging course for ITIL v3 experts to upgrade their knowledge to the ITIL 4 framework.',
            },
            {
                name: 'ITILv4 Specialist: CDS',
                certified: true,
                type: 'ITSM',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Create, Deliver and Support. Covers the "core" service management activities and creation of services.',
            },
            {
                name: 'ITILv4 Specialist: DSV',
                certified: true,
                type: 'ITSM',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Drive Stakeholder Value. Focuses on customer journey and engagement between service providers and consumers.',
            },
            {
                name: 'ITILv4 Specialist: HVIT',
                certified: true,
                type: 'ITSM',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'High-velocity IT. Explores the way digital organizations function in high-velocity environments.',
            },
            {
                name: 'ITILv4 Specialist: DPI',
                certified: true,
                type: 'ITSM',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Direct, Plan and Improve. Focuses on the practical skills necessary to create a "learning and improving" IT organization.',
            },
            {
                name: 'ITILv4 Strategist: DITS',
                certified: true,
                type: 'ITSM',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Digital and IT Strategy. Focuses on the alignment of digital business strategy with IT strategy.',
            },
            {
                name: 'SDI - Service Desk Analyst',
                certified: true,
                type: 'ITSM / Helpdesk',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Essential skills for service desk analysts to deliver high-quality support.',
            },
            {
                name: 'SDI - Service Desk Manager v8',
                certified: true,
                type: 'ITSM / Helpdesk',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Management training for those leading and overseeing service desk operations.',
            },
            {
                name: 'COBIT 5',
                certified: true,
                type: 'IT Governance',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Framework for the governance and management of enterprise IT.',
            },
            {
                name: 'Lean IT APMG',
                certified: true,
                type: 'Process Improvement',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Applies Lean manufacturing principles to the development and management of IT products and services.',
            },
            {
                name: 'ITSM Workshops',
                certified: false,
                type: 'ITSM',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Practical workshops focusing on specific aspects of IT Service Management implementation.',
            },
        ],
    },
    {
        category: 'Leadership & Soft Skills',
        courses: [
            {
                name: "Leadership (Stephen Covey's 7 Habits)",
                certified: false,
                type: 'Personal Development',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Based on the famous "7 Habits of Highly Effective People," focusing on personal and professional effectiveness.',
            },
            {
                name: 'Generic Leadership Programs',
                certified: false,
                type: 'Leadership',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Broad leadership training covering motivation, delegation, and team management.',
            },
            {
                name: 'Critical Thinking Skills',
                certified: false,
                type: 'Soft Skill',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Enhances the ability to analyze information objectively and make reasoned judgments.',
            },
            {
                name: 'Writing Skills',
                certified: false,
                type: 'Communication',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Focuses on professional business writing, email etiquette, and report generation.',
            },
            {
                name: 'Soft Skills',
                certified: false,
                type: 'Soft Skill',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'General training on interpersonal skills, adaptability, and emotional intelligence.',
            },
            {
                name: 'Essential Skills Training',
                certified: false,
                type: 'Soft Skill',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Core competencies required for modern workplace efficiency (e.g., time management).',
            },
            {
                name: 'Team Building',
                certified: false,
                type: 'Organizational Dev',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Activities and strategies to improve team cohesion, morale, and collaboration.',
            },
        ],
    },
    {
        category: 'Business Strategy & Specialized Skills',
        courses: [
            {
                name: 'Corporate Sales Workshop',
                certified: false,
                type: 'Sales',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Techniques for B2B sales, negotiation, and closing deals in a corporate environment.',
            },
            {
                name: 'Effective Customer Service',
                certified: false,
                type: 'Customer Service',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Skills for handling customer inquiries, complaints, and delivering excellent service.',
            },
            {
                name: 'Digital Transformation',
                certified: false,
                type: 'Strategy / Tech',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Strategies for integrating digital technology into all areas of a business.',
            },
            {
                name: 'ESG (Environmental, Social, Governance)',
                certified: false,
                type: 'Corporate Strategy',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Understanding sustainability practices and ethical governance in modern business.',
            },
            {
                name: 'IT Cyber Security',
                certified: false,
                type: 'Technical',
                duration: '2 Days',
                method: 'Physical / Online',
                description: 'Awareness and best practices for protecting systems and data from cyber threats.',
            },
        ],
    },
];