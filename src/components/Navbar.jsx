import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        position: 'fixed',   //고정
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end', // 버튼을 오른쪽으로 몰기
        gap: '10px',
        backgroundColor: '#f2f2f2',
        padding: '10px',
        zIndex: 9999,        // 다른 요소 위에 표시
        borderBottom: '1px solid #ddd'
      }}
    >
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/news')}>News</button>
      <button onClick={() => navigate('/stocks')}>Stocks</button>
      <button onClick={() => navigate('/chatbot')}>Chatbot</button>
    </nav>
  );
};

export default Navbar;
