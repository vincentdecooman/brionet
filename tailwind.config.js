/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'brionet-red': '#C1121F',
        'brionet-charcoal': '#1F1F1F',
        'brionet-steel': '#3A3A3A',
        'brionet-offwhite': '#EDEDED',
      },
      fontFamily: {
        heading: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['Source Sans 3', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        brionet: {
          "primary": "#C1121F",
          "secondary": "#3A3A3A",
          "accent": "#1F1F1F",
          "neutral": "#1F1F1F",
          "base-100": "#FFFFFF",
          "base-200": "#EDEDED",
          "base-300": "#D4D4D4",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "--rounded-box": "0.5rem",
          "--rounded-btn": "0.375rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.2s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.98",
        },
      },
    ],
    defaultTheme: "brionet",
  },
};

