/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#84B12E",
        primaryLight: "#829BF8",
        primaryGradientStart: "#4f44b6",
        primaryGradientEnd: "#4f44b6",
        secondaryGradientStart: "#FF1358",
        secondaryGradientEnd: "#FF1358",
        profileGradientStart: "#54CBF6",
        profileGradientEnd: "#49D2D0",
        secondary: "#EF774A",
        grey: "#acacac",
        gray: "#5f5f5f",
        darkGray: "#4d4d4d",
        lightGray: "#9b9b9b",
        white: "#ffffff",
        blue: "#5A81F7",
        bluish: "#F1F1F7",
        black: "#000000",
        green: "#6DD0A3",
        yellow: "#ffc247",
        red: "#f00",
        //Common
        commonText: "#222222",
        commonSubtitle: "#808080",
        commonBorder: "#C4C4C4",
        commonSeparator: "#C4C4C4",
        primaryButton: "#84B12E",
        commonProgress: "#84B12E",
        primaryText: "#84B12E",
        commonBackground: "#F0F0F0",
        commonOverlay: "#00000090",

        //Navigation
        headerBackgroundColor: "#84B12E",
        activeTabIcon: "#84B12E",
        //Explore, Home
        sectionTitle: "#222222",
        courseAvatarBorder: "#fff",
        courseAvatarBackground: "#C4C4C4",
        courseSubtitle: "#808080",
        courseTitle: "#222222",
        courseDurationBackground: "#222222",
        courseDurationText: "#ffffff",
        //Course
        activeContentItem: "#F0F0F0",
        separator: "#C4C4C440",

        contentItem: "#222222",
        contentItemSubtitle: "#808080",
        userAvatarBackground: "#C4C4C4",
        //Quiz
        incorrect: "#F11A1A",
        correct: "#4DB41D",
        choiceContainer: "#FFFFFF",
        choice: "#EEEEEE",
        choiceSelected: "#EF774A",
        choiceDisabled: "#F1F1F1",
        textDisabled: "#BEBEBE",
        courseProgressUnfilledBg: "#E1E1E1",
        copyIconColor: "#1890ff",
        //sale
        saleTextColor: "#434343",
        iconColor: "#979797",
        originalPrice: "#C4C4C4",
        paymentMethodBackground: "#f5f5f5",

        //Session
        sessionPassed: "#F11A1A",
        sessionCurrent: "#4DB41D",
        sessionFuture: "#BEBEBE",
        divider: "#DAD7D3",
        dividerStatement: "#285f9f",

        success: "#4CAF50",
        categoryBg: "#F6F0F6",
        categoryBorder: "#DADADA",
      },
    },
  },
  plugins: [],
};
