/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                spotify: {
                    green: '#1db954',
                    dark: '#000000',
                    gray: '#121212',
                    'light-gray': '#282828',
                },
                gray: {
                    850: '#1a1a1a',
                    900: '#0f0f0f',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-out',
                'slide-up': 'slideUp 0.4s ease-out',
                'pulse-slow': 'pulse 3s infinite',
            },
            keyframes: {
                fadeIn: {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(10px)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
                slideUp: {
                    'from': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    'to': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            borderRadius: {
                'xl': '12px',
                '2xl': '16px',
            },
            backdropBlur: {
                xs: '2px',
            },
            boxShadow: {
                'spotify': '0 8px 32px rgba(29, 185, 84, 0.15)',
                'subtle': '0 2px 8px rgba(0, 0, 0, 0.15)',
                'card': '0 4px 16px rgba(0, 0, 0, 0.25)',
            },
            transitionDuration: {
                '250': '250ms',
            }
        },
    },
    plugins: [
        // Кастомные компоненты
        function({ addComponents, theme }) {
            addComponents({
                '.btn': {
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: theme('fontWeight.semibold'),
                    transition: theme('transitionDuration.200'),
                    borderRadius: theme('borderRadius.lg'),
                    cursor: 'pointer',
                    '&:disabled': {
                        opacity: '0.5',
                        cursor: 'not-allowed',
                    },
                },
                '.input': {
                    width: '100%',
                    padding: theme('spacing.3'),
                    backgroundColor: theme('colors.spotify.light-gray'),
                    border: `1px solid ${theme('colors.gray.600')}`,
                    borderRadius: theme('borderRadius.lg'),
                    color: theme('colors.white'),
                    fontSize: theme('fontSize.sm'),
                    transition: theme('transitionDuration.200'),
                    '&:focus': {
                        outline: 'none',
                        borderColor: theme('colors.spotify.green'),
                        boxShadow: `0 0 0 2px ${theme('colors.spotify.green')}33`,
                    },
                    '&::placeholder': {
                        color: theme('colors.gray.400'),
                    },
                },
                '.surface': {
                    backgroundColor: theme('colors.spotify.gray'),
                    border: `1px solid ${theme('colors.gray.800')}`,
                    borderRadius: theme('borderRadius.lg'),
                },
                '.surface-elevated': {
                    backgroundColor: theme('colors.spotify.light-gray'),
                    border: `1px solid ${theme('colors.gray.700')}`,
                    borderRadius: theme('borderRadius.lg'),
                },
            })
        },

        // Кастомные утилиты
        function({ addUtilities, theme }) {
            addUtilities({
                '.text-gradient-spotify': {
                    background: `linear-gradient(45deg, ${theme('colors.spotify.green')}, #1ed760)`,
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    'background-clip': 'text',
                },
                '.safe-top': {
                    paddingTop: 'env(safe-area-inset-top)',
                },
                '.safe-bottom': {
                    paddingBottom: 'env(safe-area-inset-bottom)',
                },
                '.hide-scrollbar': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
            })
        }
    ],
}
