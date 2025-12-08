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
        category: "Project Management & Agile",
        courses: [
            {
                name: "PRINCE2 Foundation (7th Edition)",
                certified: true,
                type: "Project Management",
                duration: "3 Days",
                method: "Physical / Online",
                description: "Introduction to the PRINCE2 methodology, covering the principles, themes, and processes."
            },
            {
                name: "PRINCE2 Practitioner (7th Edition)",
                certified: true,
                type: "Project Management",
                duration: "2 Days",
                method: "Physical / Online",
                description: "Advanced application of PRINCE2, teaching how to tailor the method to projects."
            },
            {
                name: "Agile Scrum Master",
                certified: true,
                type: "Agile Framework",
                duration: "2 Days",
                method: "Physical / Online",
                description: "Advanced training for Scrum Masters on coaching teams and removing impediments."
            }
        ]
    },
    {
        category: "IT Service Management (ITSM)",
        courses: [
            {
                name: "ITILv4 Foundation",
                certified: true,
                type: "ITSM",
                duration: "3 Days",
                method: "Physical / Online",
                description: "The entry-level certification for IT Service Management, introducing the service value system."
            },
            {
                name: "ITSM Workshops",
                certified: false,
                type: "ITSM",
                duration: "1 Day",
                method: "Workshop",
                description: "Practical workshops focusing on specific aspects of IT Service Management implementation."
            }
        ]
    },
    {
        category: "Leadership & Soft Skills",
        courses: [
            {
                name: "Leadership (Stephen Covey's 7 Habits)",
                certified: false,
                type: "Personal Dev",
                duration: "2 Days",
                method: "Physical",
                description: "Based on the famous 7 Habits, focusing on personal and professional effectiveness."
            },
            {
                name: "Effective Customer Service",
                certified: false,
                type: "Customer Service",
                duration: "1 Day",
                method: "Physical / Hybrid",
                description: "Skills for handling customer inquiries, complaints, and delivering excellent service."
            }
        ]
    }
];