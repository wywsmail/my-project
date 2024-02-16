// module.exports = {
//   plugins: {
//     "postcss-import": {},
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

export default {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
  },
};
// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     require("tailwindcss"),
//     require("autoprefixer"),
//   ],
// };
