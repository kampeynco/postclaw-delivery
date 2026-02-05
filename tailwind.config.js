/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // USPS Primary Colors
                'usps-blue': '#004B87',
                'usps-red': '#DA291C',
                'usps-white': '#FFFFFF',
                'usps-black': '#000000',
                // Extended palette
                'cream': '#FFF8E7',
                'surface': '#F5F5F5',
                'success': '#16A34A',
                'warning': '#FBBF24',
            },
            fontFamily: {
                'display': ['Archivo Black', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
                'mono': ['Space Mono', 'monospace'],
            },
            boxShadow: {
                'brutal': '8px 8px 0px #000000',
                'brutal-sm': '4px 4px 0px #000000',
                'brutal-lg': '12px 12px 0px #000000',
                'brutal-hover': '4px 4px 0px #000000',
            },
            borderWidth: {
                '3': '3px',
                '4': '4px',
            },
        },
    },
    plugins: [],
}
