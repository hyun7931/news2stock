import React from 'react';

const NewsPreview = () => {
  // 임시 데이터
  const dummyNews = [
    { id: 1, title: '카카오의 떡상을 기원합니다' },
    { id: 2, title: '엔비디아야 믿고있어어' },
    { id: 3, title: '환율 이대로 괜찮은가' },
    { id: 4, title: '카카오의 떡상을 기원합니다' },
    { id: 5, title: '카카오의 떡상을 기원합니다' },
  ];

  return (
    <section style={{ marginBottom: '20px' }}>
      <h2>최근 뉴스</h2>
      <ul>
        {dummyNews.map((news) => (
          <li key={news.id}>{news.title}</li>
        ))}
      </ul>
    </section>
  );
};

export default NewsPreview;
