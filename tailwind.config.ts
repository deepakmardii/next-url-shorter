import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'dark-violet': 'var(--dark-violet)',
        'very-dark-blue': 'var(--very-dark-blue)',
        'danger': 'var(--danger)',
        'gray': 'var(--gray)',
        'light-gray': 'var(--light-gray)',
        'grayish-violet': 'var(--grayish-violet)',
        'very-dark-violet': 'var(--very-dark-violet)',
        'modal-bg': 'var(--modal-bg)',
      },
      backgroundImage: {
        'bg-shorten-mobile': "url('/images/bg-shorten-mobile.svg')",
        'bg-shorten-desktop': "url('/images/bg-shorten-desktop.svg')",
        'bg-boost-mobile': "url('/images/bg-boost-mobile.svg')",
        'bg-boost-desktop': "url('/images/bg-boost-desktop.svg')",
      },
    },
  },
  plugins: [],
}
export default config;
