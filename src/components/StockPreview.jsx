import React from 'react';

const StockPreview = () => {
  // 임시 데이터
  const dummyStocks = [
    { code: '005930', name: '삼성전자', price: '70,000원' },
    { code: '035720', name: '카카오', price: '56,000원' },
    { code: '005930', name: '삼성전자', price: '70,000원' },
    { code: '035720', name: '카카오', price: '56,000원' },
    { code: '005930', name: '삼성전자', price: '70,000원' },
    { code: '035720', name: '카카오', price: '56,000원' },
    { code: '005930', name: '삼성전자', price: '70,000원' },
    { code: '035720', name: '카카오', price: '56,000원' },
    { code: '005930', name: '삼성전자', price: '70,000원' },
    { code: '035720', name: '카카오', price: '56,000원' },
  ];

  return (
    <section>
      <h2>인기 종목</h2>
      <ul>
        {dummyStocks.map((stock) => (
          <li key={stock.code}>
            {stock.name} - {stock.price}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StockPreview;
