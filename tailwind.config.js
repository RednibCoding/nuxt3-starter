/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  plugins: [],
  content: [
    // all directories and extensions will correspond to your Nuxt config
    "srcDir/components/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/plugins/**/*.{js,ts,mjs}",
    "srcDir/composables/**/*.{js,ts,mjs}",
    "srcDir/utils/**/*.{js,ts,mjs}",
    "srcDir/{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
    "srcDir/app.config.{js,ts,mjs}",
    "srcDir/app/spa-loading-template.html",
  ],

  theme: {
    extend: {
      colors: {
        "theme-primary": "var(--primary-color)",
        "theme-primary-accent": "var(--primary-accent-color)",
        "theme-secondary": "var(--secondary-color)",
        "theme-secondary-accent": "var(--secondary-accent-color)",
        "theme-interest": "var(--interest-color)",
        "theme-interest-accent": "var(--interest-accent-color)",
        "theme-page-primary": "var(--page-primary-color)",
        "theme-page-secondary": "var(--page-secondary-color)",
        "theme-default": "var(--text-default-color)",
        "theme-muted": "var(--text-muted-color)",
        "theme-accent": "var(--text-accent-color)",
      },
      borderRadius: {
        primary: "var(--border-radius-primary)",
        secondary: "var(--border-radius-secondary)",
      },
      borderWidth: {
        primary: "var(--border-width-primary)",
        secondary: "var(--border-width-secondary)",
      },
    },
  },
};
