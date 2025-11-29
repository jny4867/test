// src/components/Header.tsx
import React from 'react';
import { indexData, type IndexData, arrowimg } from '../data/indexData';

const IndexCard: React.FC<{ data: IndexData }> = ({ data }) =>{
  return (
    <a 
      href={data.link} 
      // 스타일 수정: 야놀자 테마(주황색), relative(내부 요소 배치용), overflow-hidden(이미지 넘침 방지)
      className="relative block bg-[#F54C1E] p-5 rounded-xl shadow-md hover:shadow-lg transition duration-200 h-full w-60 overflow-hidden group"
    >
      <div className="flex flex-col h-full justify-between relative z-10">
        {/* 문구 */}
        <span className="text-white font-bold text-lg leading-tight w-2/3 pb-4">
          {data.title}
        </span>
        
        {/* Go To + 화살표 */}
        <div className="flex items-center text-white text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          {data.goto} 
          <img src={arrowimg} alt="arrow" className="ml-1 w-3 h-3" />
        </div>
      </div>

      {/* 배경 이미지 (우측 하단 배치) */}
      <img 
        src={data.image} 
        alt="" 
        className="absolute right-0 bottom-0 w-24 h-24 object-contain opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none"
      />
    </a>
  );
};


const IndexList: React.FC = () => {
  return (
    <div className="flex flex-col space-y-4"> {/* 여기서 간격 조절 */}
      <nav className="main-nav flex flex-col space-y-4"> 
        {indexData.map((item) => (
          <IndexCard key={item.id} data={item} />
        ))}
      </nav>
    </div>
  );
};

export default IndexList;