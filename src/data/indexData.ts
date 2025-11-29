// src/data/indexData.ts

// import img1 from '../assets/insight/img1.png';
import chartimg from '../assets/bg_chart.svg'
import glassimg from '../assets/bg_glass.svg'
import datalabimg from '../assets/datalab.svg'
export { default as arrowimg } from '../assets/icon_arrow_right.svg';

// 데이터 타입 정의 (TypeScript)
export interface IndexData {
  id: number;
  image: string;
  title: string;
  goto: string;
  link: string;
}

// Mock Data 배열 내보내기
export const indexData: IndexData[] = [
  {
    id: 1,
    image: chartimg,
    title: "Yanolja Attractiveness Index",
    goto: "Go To",
    link: "/attractiveness", // 링크 추가
    
  },
  {
    id: 2,
    image: glassimg,
    title: "Yanolja Brand Equity Index",
        goto: "Go To",
        link: "/brand-equality",
  },
  {
    id: 3,
    image: datalabimg,
    title: "Data Lab",
    goto: "Go To",
    link: "/datalab",
  },
];