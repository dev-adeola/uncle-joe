/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /**
     * @OVERRIDES DEFAULT VALUES
     */

    // Breakpoint
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    // Font Sizes

    /**
     * @EXTEND CONFIG VALUES
     */
    extend: {
      // Background Pallete
      backgroundColor: {
        navbar: "#0C0E0F",
        secondary: "#21272A",
        bgColor: "#181C1F",
        lightGray: "#30383D",
        buttonBg: "#EAEAEA",
        darkBtnBg: "#14181A",
        primary: "#00B172",
        primaryActive: "#038456",
        primaryLight: "#212A27",
        success: "#3e9f4d",
        danger: "#E3394D",
        gray: "#212A27",
        whine: "#732828",
        makePayment: "#816F38",
        cancelled: "#505050",
        confirmAndPay: "#576186",
        completed: "#00B172",
      },
      // Color Pallete
      colors: {
        primary: "#00B172",
        gray: "#212A27",
        secondary: "#CCCCCC",
        darkGray: "#bbb",
        grayColor: "#AFB5C0",
        icon: "#737373",
        iconBorder: "#737373",
        subText: "#737373",
        iconHover: "#CCCCCC",
        danger: "#E3394D",
        success: "#3e9f4d",
        lightGray: "#EAEAEA",
        statusColor: "#EAEAEA",
        border: "#434343",
      },
      fontFamily: {
        rubik: [`var(--font-rubik)`],
        karla: [`var(--font-karla)`],
        manrope: [`var(--font-manrope)`],
        jost: [`var(--font-jost)`],
      },
    },
  },
  plugins: [],
};
