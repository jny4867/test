// src/data/swiperData.ts

import img1 from '../assets/insight/img1.png';
import img2 from '../assets/insight/img2.jpg';
import img3 from '../assets/insight/img3.jpg';
import img4 from '../assets/insight/img4.png';
import img5 from '../assets/insight/img5.png';

// 데이터 타입 정의 (TypeScript)
export interface SlideData {
  id: number;
  image: string;
  title: string;
  goto: string;
  link: string;
}

// Mock Data 배열 내보내기
export const mainSwiperData: SlideData[] = [
  {
    id: 1,
    image: img1,
    title: "Vol. 32: Motivations for Overseas Travel and Strategies for Revitalizing Domestic Tourism in Korea",
            goto: "Details",
    link: "/attractiveness", 
  },
  {
    id: 2,
    image: img2,
    title: "Vol.31 Beyond the Ballpark: Exploring the Role of Baseball in Regional Tourism",
           goto: "Details",
    link: "/attractiveness", 
  },
  {
    id: 3,
    image: img3,
    title: "Vol.30 Yanolja Attractiveness Index: Measuring the Attractiveness of Global Tourism Cities",
            goto: "Details",
    link: "/attractiveness", 
  },
  {
    id: 4,
    image: img4,
    title: "Vol.29 The Future of the Golf Industry: Demographics and Macroeconomic Trends",
            goto: "Details",
    link: "/attractiveness", 
  },
  {
    id: 5,
    image: img5,
    title: "Vol.28 Unlocking Regional Skies: An Analysis of the Northeast Asian Air Network",
        goto: "Details",
    link: "/attractiveness", 
  },
];