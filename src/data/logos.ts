import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
/* import logo1 from '../assets/images/logos/logoipsum-333.svg';
import logo2 from '../assets/images/logos/logoipsum-335.svg';
import logo3 from '../assets/images/logos/logoipsum-344.svg';
import logo4 from '../assets/images/logos/logoipsum-347.svg';
import logo5 from '../assets/images/logos/logoipsum-352.svg'; */
import acumen from '../assets/images/logos/Acumen.png';
import adb from '../assets/images/logos/ADB.png';
import dhl from '../assets/images/logos/DHL.png';
import dksh from '../assets/images/logos/DKSH.png';
import gkk from '../assets/images/logos/GKK.png';
import jpn from '../assets/images/logos/JPN.png';
import peoplelogy from '../assets/images/logos/PEOPLELogy.png';
import rpng from '../assets/images/logos/R.png';
import roche from '../assets/images/logos/Roche.png';
import tabunghaji from '../assets/images/logos/TabungHaji.png';
import tudm from '../assets/images/logos/TUDM.png';
import unikl from '../assets/images/logos/UniKL.png';


export interface Logo {
    src: ImageMetadata;
    alt: string; // The partner company's name
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: acumen,
                alt: 'Acumen',
            },
            {
                src: adb,
                alt: 'ADB',
            },
            {
                src: dhl,
                alt: 'DHL',
            },
            {
                src: dksh,
                alt: 'DKSH',
            },
            {
                src: gkk,
                alt: 'GKK',
            },
            {
                src: jpn,
                alt: 'JPN',
            },
            {
                src: peoplelogy,
                alt: 'PEOPLElogy',
            },
            {
                src: rpng,
                alt: 'Rpng',
            },
            {
                src: roche,
                alt: 'Roche',
            },
            {
                src: tabunghaji,
                alt: 'Tabung Haji',
            },
            {
                src: tudm,
                alt: 'TUDM',
            },
            {
                src: unikl,
                alt: 'UniKL',
            },
        ],
    },
};
