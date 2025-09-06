'use client';

import { useState } from 'react';
import { Restaurant, restaurants } from '@/data/restaurants';

const categories = [
  { name: '한식', emoji: '🍚' },
  { name: '중식', emoji: '🥢' },
  { name: '일식', emoji: '🍣' },
  { name: '양식', emoji: '🍝' },
  { name: '동남아', emoji: '🌶️' },
  { name: '건강식', emoji: '🥗' },
  { name: '회식', emoji: '🍻' }
] as const;

type Category = typeof categories[number]['name'];

interface SuggestionResponse {
  restaurant: Restaurant;
  googleMapsUrl: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [suggestion, setSuggestion] = useState<SuggestionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSuggest = async () => {
    if (!selectedCategory) {
      setError('카테고리를 선택해주세요.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/suggest?category=${selectedCategory}&weighted=true`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '추천을 가져오는데 실패했습니다.');
      }

      setSuggestion(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const getSpecialtyColor = (category: string) => {
    switch (category) {
      case '한식':
        return 'text-red-600 bg-red-100';
      case '중식':
        return 'text-orange-600 bg-orange-100';
      case '일식':
        return 'text-blue-600 bg-blue-100';
      case '양식':
        return 'text-purple-600 bg-purple-100';
      case '동남아':
        return 'text-green-600 bg-green-100';
      case '건강식':
        return 'text-emerald-600 bg-emerald-100';
      case '회식':
        return 'text-pink-600 bg-pink-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* 헤더 */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black mb-4">
            <span className="text-3xl bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800 bg-clip-text text-transparent">
              SANGAM-DONG
            </span>
            <br />
            <span className="text-4xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LUNCH PICK
            </span>
          </h1>
          <p className="text-lg text-slate-600 font-medium">
            상암동 직장인을 위한 점심 메뉴 추천 서비스
          </p>
        </div>

        {/* 카테고리 선택 */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">
              카테고리를 선택해주세요
            </h2>
            <p className="text-slate-600">
              원하는 음식 종류를 선택하면 맞춤 추천을 받을 수 있습니다
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/25 scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-lg border border-white/20'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  <div className="text-3xl">
                    {category.emoji}
                  </div>
                  <div className="text-sm font-medium">
                    {category.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 추천 버튼 */}
        <div className="text-center mb-8">
          <button
            onClick={handleSuggest}
            disabled={loading || !selectedCategory}
            className={`px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
              loading || !selectedCategory
                ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95'
            }`}
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>추천 중...</span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <span>🍽️</span>
                <span>오늘 뭐 먹지?</span>
              </div>
            )}
          </button>
        </div>

        {/* 에러 메시지 */}
        {error && (
          <div className="max-w-md mx-auto mb-6 p-5 bg-red-50/80 backdrop-blur-sm border border-red-200 text-red-700 rounded-2xl text-center shadow-lg">
            {error}
          </div>
        )}

        {/* 추천 결과 */}
        {suggestion && (
          <div className="max-w-lg mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:scale-105 border border-white/20">
              <div className="text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {suggestion.restaurant.name}
                  </h3>
                  <div className="flex flex-wrap justify-center items-center gap-2 mb-4">
                    <span className="px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200">
                      {suggestion.restaurant.category}
                    </span>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-semibold ${getSpecialtyColor(suggestion.restaurant.category)} border`}>
                      대표메뉴
                    </span>
                  </div>
                  <div className="text-base text-slate-600 leading-relaxed bg-slate-50 rounded-xl p-4 border border-slate-100">
                    {suggestion.restaurant.specialty}
                  </div>
                </div>
                <a
                  href={suggestion.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Google Maps에서 보기</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* 다시 추천받기 버튼 */}
        {suggestion && (
          <div className="text-center mt-8">
            <button
              onClick={() => {
                setSuggestion(null);
                setError(null);
              }}
              className="px-6 py-3 text-slate-600 hover:text-slate-800 transition-all duration-300 font-medium hover:bg-white/50 rounded-xl backdrop-blur-sm"
            >
              다른 추천 받기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
