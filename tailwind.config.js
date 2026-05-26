/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Deep navy slate profiles
                "dark-layer-1": "rgb(15, 23, 42)", 
                "dark-layer-2": "rgb(9, 15, 29)",
                "dark-label-2": "rgba(226, 232, 240, 0.75)",
                "dark-divider-border-2": "rgb(30, 41, 59)",
                "dark-fill-2": "rgba(255, 255, 255, 0.07)",
                "dark-fill-3": "rgba(255, 255, 255, 0.04)",
                "dark-gray-6": "rgb(100, 116, 139)",
                "dark-gray-7": "rgb(148, 163, 184)",
                "gray-8": "rgb(15, 23, 42)",
                "dark-gray-8": "rgb(203, 213, 225)",
                
                // SWAP THE PRIMARY BRAND COLOR: Clean Cobalt Blue instead of Orange
                "brand-orange": "rgb(59, 130, 246)", 
                "brand-orange-s": "rgb(29, 78, 216)",
                
                // Muted difficulty markers to match the premium interface layout
                "dark-yellow": "rgb(234, 179, 8)",
                "dark-pink": "rgb(239, 68, 68)",
                olive: "rgb(20, 184, 166)",
                "dark-green-s": "rgb(16, 185, 129)",
                "dark-blue-s": "rgb(14, 165, 233)",
            },
        },
    },
    plugins: [],
};