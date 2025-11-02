import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                blue: {
                    900: '#0A0E2F',
                    800: '#1B2444',
                    700: '#2C3A61',
                    600: '#3358D4',
                    500: '#3B82F6',
                    400: '#60A5FA',
                    100: '#E0EAFF',
                    50: '#F5F8FF',
                },
                warning: {
                    600: '#E53935',
                },
                success: {
                    600: '#43A047',
                },
                yellow: {
                    500: '#F9A825',
                    200: '#FFF59D',
                },
                'accent-viola': {
                    500: '#8E44FF',
                },
                gray: {
                    900: '#0F172A',
                    800: '#1E293B',
                    700: '#334155',
                    600: '#475569',
                    500: '#64748B',
                    400: '#94A3B8',
                    300: '#CBD5E1',
                    200: '#E2E8F0',
                    100: '#F1F5F9',
                    50: '#F9FAFB',
                },
                black: '#000000',
                white: '#FFFFFF',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 1.1s both',
            },
            dropShadow: {
                'glow': '0 0 12px rgba(136,120,255,0.4)',
            },
        },
    },
    plugins: [],
};

export default config;
