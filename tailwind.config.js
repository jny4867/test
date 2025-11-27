// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // src 폴더 아래의 모든 JS, TS, JSX, TSX 파일을 검색하도록 설정합니다.
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
