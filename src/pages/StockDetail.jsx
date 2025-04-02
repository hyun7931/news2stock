import React, { useEffect } from "react"; // ✅ React를 import
import { useParams, useNavigate } from "react-router-dom";

export default function StockDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const stocksData = [
    { category: "Tech", name: "Apple", price: 175, marketCap: "2.8T", volume: "50M" },
    { category: "Tech", name: "Microsoft", price: 320, marketCap: "2.6T", volume: "40M" },
    { category: "Finance", name: "JPMorgan", price: 150, marketCap: "500B", volume: "30M" },
    { category: "Automotive", name: "Tesla", price: 750, marketCap: "900B", volume: "60M" },
  ];

  const stock = stocksData.find((s) => s.name === name);

  useEffect(() => {
    if (stock) {
      navigate(`/stocks/${stock.name}`);
    }
  }, [stock, navigate]);

  if (!stock) {
    return <div className="p-6">종목 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{stock.name}</h1>
      <p className="text-lg">현재가: {stock.price}원</p>
      <div className="mt-4">
        <p>시총: {stock.marketCap}</p>
        <p>거래량: {stock.volume}</p>
      </div>

      {/* 그래프 자리 */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">가격 변동 그래프</h2>
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center">그래프 자리</div>
      </div>

      {/* 상승/하강 요인 */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">상승/하강 요인</h2>
        <div className="p-4 border rounded-lg">상승/하강 요인 자리</div>
      </div>

      {/* 종목 추천 */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">추천 종목</h2>
        <div className="p-4 border rounded-lg">추천 종목 리스트</div>
      </div>

      {/* 뉴스 */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">관련 뉴스</h2>
        <div className="p-4 border rounded-lg">뉴스 목록</div>
      </div>
    </div>
  );
}
