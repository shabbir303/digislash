/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	prefix: "",
	theme: {
		container: {
		  center: true, // Center the container
		  padding: "2rem", // Set padding
		  screens: {
			sm: "100%",    // Full width on small screens
			md: "768px",   // Medium screens
			lg: "960px",   // Large screens
			xl: "1200px",  // Extra-large screens
			'2xl': "1440px", // 2X-large screens
			'hd': "1920px", // Custom screen size for 1920px width
		  },
		},
		extend: {
		  screens: {
			hd: "1920px", // Define the custom breakpoint
		  },
		},
	  fontFamily:{
		primary:"var(--font-vietnam)"
	  },
	  extend: {
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: "#1c1c22",
		 
		  accent: {
			DEFAULT: "#00ff99",
			hover: "#00e187",
		  },
		  
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
		  "accordion-down": {
			from: { height: "0" },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: "0" },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  }