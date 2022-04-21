module.exports = {
  content: ["./*.html","./pages/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/img/images.jpeg')"
      },
      colors: {
        'main': '#0A182E',
        'second-main': '#081325',
        'heading': '#CDD7F6',
        'text': '#8993B0',
        'hover-text': '#65FFDB',
        
      },
    },
  },
  plugins: [],
}
