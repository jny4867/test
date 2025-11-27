// src/components/Header.tsx
import React from 'react';
import logo from '../assets/logo.svg';

// 💡 팁: 간단한 네비게이션 메뉴 버튼 컴포넌트
const NavButton: React.FC<{ name: string; link: string }> = ({ name, link }) => {
  return (
    <a href={link} className="inline-block text-gray-700 hover:text-blue-500 font-medium py-2 transition duration-150 ">
      {name}
    </a>
  );
};

const LanguageDropdown: React.FC = () => {
  // 실제 드롭다운 로직과 상태 관리는 여기서 구현됩니다.
  return (
    <div className="language-dropdown">
      <button className="current-lang">
        EN <span className="arrow">▼</span>
      </button>
      {/* <ul className="dropdown-menu"> ... </ul> */}
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center shadow-md py-4 px-6 sticky top-0 z-10 bg-white-500 h-20">
      {/* 1. 로고 영역 */}
      <div className="logo">
        <img src={logo} alt="야놀자 리서치 로고" className="header-logo h-5" />
      </div>

      {/* 2. 네비게이션 메뉴 (중앙) */}
<nav className="main-nav flex space-x-30">
        <NavButton name="Research" link="/research" />
        <NavButton name="Datalab" link="/datalab" />
        <NavButton name="Indexes" link="/indexes" />
        <NavButton name="About" link="/about" />
      </nav>

      {/* 3. 우측 언어 선택 영역 (EN/KR) */}
      <div className="right-controls">
        <LanguageDropdown />
      </div>
    </header>
  );
};

export default Header;