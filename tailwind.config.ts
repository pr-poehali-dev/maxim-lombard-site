import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}"
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px) rotateX(20deg)' },
					'100%': { opacity: '1', transform: 'translateY(0) rotateX(0deg)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0) rotateX(0deg)' },
					'100%': { opacity: '0', transform: 'translateY(20px) rotateX(20deg)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.8) rotateY(-15deg)', opacity: '0' },
					'100%': { transform: 'scale(1) rotateY(0deg)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%) rotateY(45deg)' },
					'100%': { transform: 'translateX(0) rotateY(0deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotateX(0deg)' },
					'50%': { transform: 'translateY(-15px) rotateX(5deg)' }
				},
				'bounce-3d': {
					'0%, 100%': { transform: 'translateY(0) rotateX(0deg)' },
					'25%': { transform: 'translateY(-8px) rotateX(15deg)' },
					'50%': { transform: 'translateY(-12px) rotateX(0deg)' },
					'75%': { transform: 'translateY(-5px) rotateX(-10deg)' }
				},
				'tilt': {
					'0%': { transform: 'rotateY(0deg) rotateX(0deg)' },
					'25%': { transform: 'rotateY(5deg) rotateX(5deg)' },
					'50%': { transform: 'rotateY(0deg) rotateX(0deg)' },
					'75%': { transform: 'rotateY(-5deg) rotateX(-5deg)' },
					'100%': { transform: 'rotateY(0deg) rotateX(0deg)' }
				},
				'depth-float': {
					'0%, 100%': { transform: 'translateZ(0px) rotateX(0deg) rotateY(0deg)' },
					'33%': { transform: 'translateZ(10px) rotateX(10deg) rotateY(5deg)' },
					'66%': { transform: 'translateZ(-5px) rotateX(-5deg) rotateY(-3deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'fade-out': 'fade-out 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-in-right': 'slide-in-right 0.6s ease-out',
				'float': 'float 4s ease-in-out infinite',
				'bounce-3d': 'bounce-3d 2s ease-in-out infinite',
				'tilt': 'tilt 6s ease-in-out infinite',
				'depth-float': 'depth-float 5s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;