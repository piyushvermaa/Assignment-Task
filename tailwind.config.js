/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "wwwproelevatein-black": "#000",
        "wwwproelevatein-flamingo": "#f26430",
        "wwwproelevatein-nero": "#fff",
        "wwwproelevatein-jaffa": "#f47a43",
        "wwwproelevatein-athens-gray": "#f3f4f6",
        "wwwproelevatein-athens-gray1": "#f9fafb",
        "wwwproelevatein-river-bed": "#4b5563",
        "wwwproelevatein-athens-gray2": "#e5e7eb",
        "wwwproelevatein-ebony": "#111827",
        "wwwproelevatein-blue-charcoal": "#020817",
        "wwwproelevatein-radical-red": "#fe3559",
        "wwwproelevatein-gray-chateau": "#9ca3af",
        "wwwproelevatein-mystic": "#e2e8f0",
        "wwwproelevatein-jungle-green": "#22a274",
        "wwwproelevatein-mischka": "#d1d5db",
        "wwwproelevatein-pale-sky": "#6b7280",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
        "181xl": "200px",
      },
    },
    fontSize: {
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      "11xl": "1.875rem",
      "5xl": "1.5rem",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
