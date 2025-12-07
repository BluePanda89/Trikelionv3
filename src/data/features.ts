import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'Corporate Training',
                description: 'Customized programs designed to meet the specific needs of organizations, focusing on leadership, team development, and technical skills.'
            },
            {
                icon: Shield,
                title: 'Professional Development',
                description: 'Customized programs designed to meet the specific needs of organizations, focusing on leadership, team development, and technical skills.'
            },
            {
                icon: CodeXml,
                title: 'Certification Programs',
                description: 'Customized programs designed to meet the specific needs of organizations, focusing on leadership, team development, and technical skills.'
            },
            {
                icon: Zap,
                title: 'Team Building',
                description: 'Programs that are designed to improve teamwork, communication and overall group dynamics within an organization.'
            },
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
