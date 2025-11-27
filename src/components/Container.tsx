// src/components/Container.tsx

import React from 'react';
// Container가 받을 props 타입을 정의합니다.
interface ContainerProps {
  children: React.ReactNode; // 자식 요소는 React.ReactNode 타입을 사용합니다.
  className?: string;        // 옵션으로 클래스 이름을 받을 수도 있습니다.
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    // 받은 className을 추가하여 스타일을 적용할 수 있게 합니다.
    <div className={`container-wrapper ${className || ''}`}>
      {children}
    </div>
  );
};

export default Container;