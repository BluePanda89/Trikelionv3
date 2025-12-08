// src/data/menu.ts
// to solve no child error in Header component

export interface NavItem {
    name: string;
    link: string;
    showArrow?: boolean;
    children?: NavItem[];
};
// header no chiuld end

export const headerMenu: NavItem[] = [
    { name: 'About Us', link: '/aboutus' },
    { name: 'Our Services', link: '/services' },
    { name: 'Our Training', link: '/training' },
];

export const footerMenu = [
    { name: 'Contact Us', link: '/contact' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

