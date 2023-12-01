/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        redPrimary: "#DD0000",
        redSecondary: "#B30000",
        white: "#FFFFFF",
        blue: "#337AB7",
        success: "#04CC0C",
        lightGreen: "#F3FFF5",
        error: "#FB184E",
        warning: "#D39C25",
        warningLight: "#FBF5E2",
        grayLine: "#ADADAD",
        grayBg: "#EEEEEE",
        defaultBg: "#F7F9FA",
        lightGrayText: "#888888",
        darkText: "#333333",
        blueHover: "#5897FB",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        h4: [
          "30px",
          {
            lineHeight: "45px",
            fontWeight: "600",
          },
        ],
        h5: [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "600",
          },
        ],
        h6: [
          "24px",
          {
            lineHeight: "30px",
            fontWeight: "600",
          },
        ],
        sub1: [
          "14px",
          {
            lineHeight: "21px",
            fontWeight: "600",
          },
        ],
        sub2: [
          "12px",
          {
            lineHeight: "28px",
            fontWeight: "600",
          },
        ],
        body1: [
          "14px",
          {
            lineHeight: "21px",
            fontWeight: "400",
          },
        ],
        body2: [
          "12px",
          {
            lineHeight: "18px",
            fontWeight: "400",
          },
        ],
        caption: [
          "10px",
          {
            lineHeight: "15px",
            fontWeight: "400",
          },
        ],
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
