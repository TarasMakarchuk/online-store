/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

const constants = {
    green: '#008D64',
    'dark-green': '#006044',
    'light-green': '#E6F2EF',
    black: '#222222',
    white: '#ffffff',
    'light-gray': '#E8E7E3',
    red: '#F23C3D',
    'beige': '#A49B8F',
    'dark-beige': '#64605b',
};

module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            transparent: colors.transparent,
            ...constants,
        },
        extend: {
            fontSize: {
                xs: '0.82rem',
                sm: '0.98rem',
                base: '1.15rem',
                lg: '1.22rem',
                xl: '1.36rem',
                '1.5xl': '1.5rem',
                '2xl': '1.725rem',
                '3xl': '2.155rem',
                '4xl': '2.58rem',
                '5xl': '3.45rem',
                '6xl': '4.3rem',
                '7xl': '5.17rem',
                '8xl': '6.9rem',
                '9xl': '9.2rem',
            },
            keyframes: {
                animationOpacity: {
                    from: { opacity: 0.2 },
                    to: { opacity: 1 },
                },
                scaleIn: {
                    '0%': {
                        opacity: 0,
                        transform: 'scale(0.9)',
                    },
                    '50%': {
                        opacity: 0.3,
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'scale(1)',
                    },
                }
            },
            animation: {
                opacity: 'animationOpacity .5s ease-in-out',
                scaleIn: 'scaleIn .35s ease-in-out',
            }
        },
    },
    plugins: [],
};
