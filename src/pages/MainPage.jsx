import React from 'react';
import Navbar from '../components/Navbar';
import NewsPreview from '../components/NewsPreview';
import StockPreview from '../components/StockPreview';

const MainPage = () => {
  return (
    <div>
      {/* 메인 컨테이너 */}
      <div style={{ padding: '20px' }}>
        <h1>News2Stock 메인</h1>

        {/* 뉴스 섹션 (카드 모양 박스) */}
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fafafa'
          }}
        >
          <h2>최근 뉴스 목록 보여주기</h2>
          <NewsPreview />
        </div>

        {/* 종목 섹션 (카드 모양 박스) */}
        <div
          style={{
            marginBottom: '20px',
            padding: '15px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fafafa'
          }}
        >
          <h2>인기 종목 보여주기</h2>
          <StockPreview />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
