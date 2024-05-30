export default {
  theme: {
    fontFamily: {
      primary: ["Inter"],
    },
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1600px",
        xl: "1900px",
        "2xl": "2400px",
      },
    },
  },
  plugins: [],
  content: [
    `./components/**/*.{vue,js,ts}`,
    `./layouts/**/*.vue`,
    `./pages/**/*.vue`,
    `./composables/**/*.{js,ts}`,
    `./plugins/**/*.{js,ts}`,
    `./utils/**/*.{js,ts}`,
    `./App.{js,ts,vue}`,
    `./app.{js,ts,vue}`,
    `./Error.{js,ts,vue}`,
    `./error.{js,ts,vue}`,
    `./app.config.{js,ts}`,
  ],
};
