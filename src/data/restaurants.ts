export interface Restaurant {
  id: number;
  name: string;
  category: '한식' | '중식' | '일식' | '분식' | '카페';
  priceRange: '저렴' | '보통' | '비쌈';
  searchQuery: string;
}

export const restaurants: Restaurant[] = [
  // 한식
  {
    id: 1,
    name: '상암동 김치찌개',
    category: '한식',
    priceRange: '보통',
    searchQuery: '상암동 김치찌개'
  },
  {
    id: 2,
    name: '마포갈비',
    category: '한식',
    priceRange: '비쌈',
    searchQuery: '마포갈비 상암동'
  },
  {
    id: 3,
    name: '상암동 된장찌개',
    category: '한식',
    priceRange: '저렴',
    searchQuery: '상암동 된장찌개'
  },
  {
    id: 4,
    name: '한우정',
    category: '한식',
    priceRange: '비쌈',
    searchQuery: '한우정 상암동'
  },
  {
    id: 5,
    name: '상암동 비빔밥',
    category: '한식',
    priceRange: '보통',
    searchQuery: '상암동 비빔밥'
  },

  // 중식
  {
    id: 6,
    name: '상암동 짜장면',
    category: '중식',
    priceRange: '저렴',
    searchQuery: '상암동 짜장면'
  },
  {
    id: 7,
    name: '마라탕 전문점',
    category: '중식',
    priceRange: '보통',
    searchQuery: '마라탕 상암동'
  },
  {
    id: 8,
    name: '상암동 탕수육',
    category: '중식',
    priceRange: '보통',
    searchQuery: '상암동 탕수육'
  },
  {
    id: 9,
    name: '딤섬하우스',
    category: '중식',
    priceRange: '비쌈',
    searchQuery: '딤섬하우스 상암동'
  },
  {
    id: 10,
    name: '상암동 짬뽕',
    category: '중식',
    priceRange: '저렴',
    searchQuery: '상암동 짬뽕'
  },

  // 일식
  {
    id: 11,
    name: '상암동 초밥',
    category: '일식',
    priceRange: '비쌈',
    searchQuery: '상암동 초밥'
  },
  {
    id: 12,
    name: '라멘 전문점',
    category: '일식',
    priceRange: '보통',
    searchQuery: '라멘 상암동'
  },
  {
    id: 13,
    name: '상암동 돈카츠',
    category: '일식',
    priceRange: '보통',
    searchQuery: '상암동 돈카츠'
  },
  {
    id: 14,
    name: '우동 전문점',
    category: '일식',
    priceRange: '저렴',
    searchQuery: '우동 상암동'
  },
  {
    id: 15,
    name: '상암동 회',
    category: '일식',
    priceRange: '비쌈',
    searchQuery: '상암동 회'
  },

  // 분식
  {
    id: 16,
    name: '상암동 떡볶이',
    category: '분식',
    priceRange: '저렴',
    searchQuery: '상암동 떡볶이'
  },
  {
    id: 17,
    name: '김밥천국',
    category: '분식',
    priceRange: '저렴',
    searchQuery: '김밥천국 상암동'
  },
  {
    id: 18,
    name: '상암동 순대',
    category: '분식',
    priceRange: '저렴',
    searchQuery: '상암동 순대'
  },
  {
    id: 19,
    name: '라면 전문점',
    category: '분식',
    priceRange: '저렴',
    searchQuery: '라면 상암동'
  },

  // 카페
  {
    id: 20,
    name: '상암동 카페',
    category: '카페',
    priceRange: '보통',
    searchQuery: '상암동 카페'
  }
];
