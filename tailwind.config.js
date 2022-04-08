module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
    },
    fontSize: {
      h1: ['40px', '40px'],
      h2: ['32px', '46px'],
      h3: ['26px', '34px'],
      h4: ['21px', '32.5px'],
      h5: ['18px', '27.5px'],
      h6: ['16px', '16px'],
      body: ['15px', '18px'],
      sm: ['13px', '18px'],
      xs: ['11px', '16px'],
    },
    extend: {
      colors: {
        aqua: '#00ADA8',
        dark: '#0F1010',
        alabaster: '#F5F5F5',
      },
      maxWidth: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },
    },
  },
  plugins: [],
};
