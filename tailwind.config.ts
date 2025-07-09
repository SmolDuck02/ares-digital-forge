
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Ares premium brand colors
				'ares-charcoal': '#1a1a1a',
				'ares-navy': '#0f1419',
				'ares-graphite': '#2a2a2a',
				'ares-gold': '#d4af37',
				'ares-copper': '#b87333',
				'ares-silver': '#c0c0c0',
				'ares-pearl': '#f8f8f8',
				'ares-slate': '#64748b',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'subtle-glow': {
					'0%, 100%': { 
						boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)',
						opacity: '0.8'
					},
					'50%': { 
						boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)',
						opacity: '1'
					}
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in-elegant': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'gentle-pulse': {
					'0%, 100%': { opacity: '0.7' },
					'50%': { opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'subtle-glow': 'subtle-glow 3s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'slide-in-elegant': 'slide-in-elegant 0.6s ease-out',
				'gentle-pulse': 'gentle-pulse 2s ease-in-out infinite'
			},
			fontFamily: {
				'serif': ['Playfair Display', 'Times New Roman', 'serif'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'display': ['Space Grotesk', 'system-ui', 'sans-serif']
			},
			fontSize: {
				'display-xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
