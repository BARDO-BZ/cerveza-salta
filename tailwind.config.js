/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        brice: ["BriceCondensed", ...defaultTheme.fontFamily.sans],
        saira: ["SairaCondensed", ...defaultTheme.fontFamily.sans],
      },
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundSize: {
        "117%": "117%",
      },
      colors: {
        "brand/dark": "#000000",
        "brand/white": "#FFFFFF",
        "brand/blue": "#124378",
        "brand/darker-blue": "#0B2143",
        "gray/900": "#101828",
        "gray/800": "#1D2939",
        "gray/600": "#475467",
        "gray/300": "#D0D5DD",
        "gray/200": "#EAECF0",
        "text/primary": "#101828",
        "text/secondary": "#344054",
      },
      fontSize: {
        //Desktop Titles
        "title-desktop-xs": ["1.5rem", "1.65rem"], //24px
        "title-desktop-sm": ["2.75rem", "2.75rem"], //44px
        "title-desktop-md": ["3.25rem", "3.25rem"], //52px
        "title-desktop-lg": ["4.25rem", "4.25rem"], //68px
        "title-desktop-xl": ["4.875rem", "4.875rem"], //78px
        //Mobile Titles
        "title-xs": ["1.25rem", "1.438rem"], //20px
        "title-sm": ["1.5rem", "1.5rem"], //24px
        "title-md": ["1.75rem", "1.75rem"], //28px
        "title-lg": ["3rem", "2.85rem"], //48px / 45.6px
        "title-xl": ["3rem", "3rem"], //48px
        //Subtitle
        subtitle: ["1.125rem", "1.125rem"], //18px
        "subtitle-lg": ["1.375rem", "1.375rem"], //22px
        "subtitle-xl": ["1.5rem", "1.5rem"], //24px
        //TextBody
        body: ["1.25rem", "1.6rem"], //20px UTILIZABLE PARA TODOS LOS MOBILE TEXT-BODY
        "body-hero-desktop": ["1.25rem", "2rem"], //20px
        //Links
        "general-link": ["0.875rem", "0.875rem"], //14px
        "contact-link-desktop": ["1.25rem", "2rem"], //20px
        "contact-link": ["1rem", "1.6rem"], //26px
      },
      // that is animation class
      animation: {
        slideDown: "slideDown 1s",
      },

      // that is actual animation
      keyframes: (theme) => ({
        slideDown: {
          "0%": { transform: "translate(0,-4px)" },
          "100%": { transform: "translate(0,0px)" },
        },
      }),
    },
  },
  plugins: [],
};
