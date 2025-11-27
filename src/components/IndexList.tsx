// src/components/Header.tsx
import React from 'react';

const IndexCard: React.FC<{ name: string; link: string }> = ({ name, link }) => {
  return (
    <a 
      href={link} 
      className="block bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-200 h-[134px] w-60"
    >
      <span className="text-gray-800 font-bold text-lg hover:text-blue-600">
        {name}
      </span>
    </a>
  );
};


const IndexList: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-4 px-6 sticky top-70 bg-white-500 h-30">
      <nav className="main-nav flex flex-col space-y-4"> 
        <IndexCard name="Yanolja Attractiveness Index" link="/attractiveness" />
        <IndexCard name="Yanolja Brand Equality Index" link="/brand-equality" />
        <IndexCard name="Data Lab" link="/datalab" />
      </nav>
      
    </div>
  );
};

export default IndexList;