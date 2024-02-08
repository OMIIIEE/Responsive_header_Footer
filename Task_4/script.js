const btn = document.querySelector("button.mobile-menu-btn");
const menu = document.querySelector(".mobile-menu");

// event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

module.exports = {
  purge: [],
  darkMode: false, 
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('image.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};