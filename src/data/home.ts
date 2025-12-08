import heroImage from '@assets/images/home/default-hero-2.jpg';
import maingroupImage from '@assets/images/main-groupaboutus.png';
import { featureLists } from '@data/features';
import { statsLists } from '@data/stats';
import { logoLists } from '@data/logos';


export const seoTitle = "Search enginee optimization keyword here";
export const seoDescription = "Triskelion Training and Consultation";

export const heroContent = {
    title: 'Triskelion Training & Consulting',
    description: 'Unlock potential with tailored training programs designed for today’s dynamic business environment.',
    buttons: [
        {
            text: 'View More',
            link: '/training',
            target: '_self'
        },
    ],
    backgroundImage: heroImage,
    overlayOpacity: 0.2
};

export const featuresSection = {
    title: "Our Comprehensive Training Solutions",
    description: "Explore our tailored programmes designed to enhance skills for individuals and teams alike.",
    features: featureLists.main.features,
};

export const featuresSection2 = {
    title: "Our Strength",
    description: "Explore our tailored programmes designed to enhance skills for individuals and teams alike.",
    features: featureLists.main.features,
};

export const styleGuideSection = {
    eyebrow: "Founded in 2024",
    headline: "Discover the Story Behind Triskelion Training & Consulting.",
    description: "we provide innovative learning experiences that foster skills for personal and professional development.",
    image: {
        src: maingroupImage,
        alt: "Group Photo"
    },
    buttons: [
        {
            text: "Findout More",
            link: "/aboutus",
            variant: "primary" as const
        }
    ]
};

export const FooterCta = {
    eyebrow: "GET STARTED TODAY",
    title: 'Start Your Learning Journey Now',
    description: 'Contact us to discover how our training can elevate your career and organisation.',
    hideCta: false,
    button: {
            text: 'Primary Action',
            link: '/contact',
            target: '_self'
    }
};

export const sideBySideStats = {
    title: "Our Successful Story",
    description: "Take a look at our impactful training initiatives and successful collaborations.",
    variant: 'side-by-side' as const,
    stats: statsLists.withContent.stats,
    content: {
        title: "Our Successful Story",
        description: "Take a look at our impactful training initiatives and successful collaborations.",
        button: {
            text: "List of Courses",
            link: "/training",
            variant: "primary" as const
        }
    }
};

export const logosSection = {
    eyebrow: "Our Client",
    logos: logoLists.main.logos
};