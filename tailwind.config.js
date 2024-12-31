/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
    content: [
        './index.html',
        './app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                circula: ['Circula', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            fontSize: {
                '10xl': '10',
            },
            colors: {
                black: {
                    100: '#0D0A07',
                    200: '#110E0B',
                    300: '#15120F',
                    400: '#191613',
                    500: '#1D1A17',
                    600: '#211E1B',
                    700: '#25221F',
                    800: '#292623',
                    900: '#2D2A27',
                },
                gray: {
                    500: '#8E8983',
                },
                white: {
                    100: '#EFE8DE',
                    200: '#F3ECE2',
                    300: '#F7F0E6',
                    400: '#FBF4EA',
                    500: '#FFF8EE',
                    600: '#FFFCF2',
                    700: '#FFFFF6',
                    800: '#FFFFFA',
                    900: '#FFFFFE',
                },
                bmb: {
                    orange: '#F19100',
                    red: '#B3001B',
                    green: '#498450',
                    dark_green: '#0D3633',
                },

            },
            scale: {
                133: '1.33'
            }
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.circula': {
                    fontFamily: 'Circula, sans-serif',
                    fontWeight: '500',
                },
                '.circula-bold': {
                    fontFamily: 'Circula, sans-serif',
                    fontWeight: '700',
                    WebkitTextStroke: '0.0625rem currentColor',
                    textStroke: '0.0625rem currentColor',
                },
                '.circula-extrabold': {
                    fontFamily: 'Circula, sans-serif',
                    fontWeight: '800',
                    WebkitTextStroke: '0.125rem currentColor',
                    textStroke: '0.125rem currentColor',
                },
                '.circula-black': {
                    fontFamily: 'Circula, sans-serif',
                    fontWeight: '900',
                    WebkitTextStroke: '0.25rem currentColor',
                    textStroke: '0.25rem currentColor',
                },
            })
        }),
    ]
}

