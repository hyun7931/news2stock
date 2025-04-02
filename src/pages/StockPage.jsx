import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const stocksData = [
  { category: "Tech", name: "Apple", price: 175, marketCap: "2.8T", volume: "50M" },
  { category: "Tech", name: "Microsoft", price: 320, marketCap: "2.6T", volume: "40M" },
  { category: "Finance", name: "JPMorgan", price: 150, marketCap: "500B", volume: "30M" },
  { category: "Automotive", name: "Tesla", price: 750, marketCap: "900B", volume: "60M" },
];

export default function StockTable() {
  const [filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const categories = ["All", ...new Set(stocksData.map(stock => stock.category))];
  const filteredStocks = filter === "All" ? stocksData : stocksData.filter(stock => stock.category === filter);

  return (
    <div className="p-6 space-y-4 mt-16"> {/* 여기에 여백을 추가하여 네비게이션 바가 겹치지 않게 함 */}
      <div className="flex gap-2">
        {categories.map(category => (
          <button 
            key={category} 
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded ${filter === category ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="p-4 mt-4 border rounded shadow-md">
        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border-b px-4 py-2 text-left">종목</th>
              <th className="border-b px-4 py-2 text-left">현재가</th>
              <th className="border-b px-4 py-2 text-left">시총</th>
              <th className="border-b px-4 py-2 text-left">거래량</th>
            </tr>
          </thead>
          <tbody>
            {filteredStocks.map(stock => (
              <tr 
                key={stock.name} 
                className="cursor-pointer hover:bg-gray-100" 
                onClick={() => navigate(`/stocks/${stock.name}`)}
              >
                <td className="border-b px-4 py-2">{stock.name}</td>
                <td className="border-b px-4 py-2">{stock.price}</td>
                <td className="border-b px-4 py-2">{stock.marketCap}</td>
                <td className="border-b px-4 py-2">{stock.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
