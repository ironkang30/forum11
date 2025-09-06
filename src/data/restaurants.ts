export interface Restaurant {
  id: number;
  name: string;
  category: '한식' | '중식' | '일식' | '양식' | '동남아' | '건강식' | '회식';
  specialty: string;
  searchQuery: string;
}

export const restaurants: Restaurant[] = [
  // 한식
  {
    id: 1,
    name: '서서울농협 두레우가',
    category: '한식',
    specialty: '한우갈비탕, 불고기전골, 차돌된장찌개',
    searchQuery: '서서울농협 두레우가 상암동'
  },
  {
    id: 2,
    name: '상암 구름산추어탕',
    category: '한식',
    specialty: '추어탕, 연잎보쌈',
    searchQuery: '상암 구름산추어탕'
  },
  {
    id: 3,
    name: '등촌샤브칼국수 상암점',
    category: '한식',
    specialty: '버섯샤브샤브, 초계국수',
    searchQuery: '등촌샤브칼국수 상암점'
  },
  {
    id: 4,
    name: '개미집',
    category: '한식',
    specialty: '낙곱새볶음, 낙지볶음',
    searchQuery: '개미집 상암동'
  },
  {
    id: 5,
    name: '옥된장',
    category: '한식',
    specialty: '소고기삼겹 된장전골, 바지락 된장전골, 수육무침',
    searchQuery: '옥된장 상암동'
  },
  // 중식
  {
    id: 6,
    name: '서룡',
    category: '중식',
    specialty: '된장짬뽕, XO볶음밥',
    searchQuery: '서룡 상암동'
  },
  {
    id: 7,
    name: '더차이 상암 디지털큐브점',
    category: '중식',
    specialty: '간짜장, 마파두부밥',
    searchQuery: '더차이 상암 디지털큐브점'
  },
  // 일식
  {
    id: 8,
    name: '무다이 상암직영점',
    category: '일식',
    specialty: '돈코츠 라멘, 마제소바',
    searchQuery: '무다이 상암직영점'
  },
  {
    id: 9,
    name: '하루앤소쿠 돈까스 상암점',
    category: '일식',
    specialty: '하루카츠, 치즈카츠',
    searchQuery: '하루앤소쿠 돈까스 상암점'
  },
  // 양식
  {
    id: 10,
    name: '인칸토 키친',
    category: '양식',
    specialty: '파스타, 리조또',
    searchQuery: '인칸토 키친 상암동'
  },
  {
    id: 11,
    name: 'KFC 상암DMC',
    category: '양식',
    specialty: '징거타워버거',
    searchQuery: 'KFC 상암DMC'
  },
  // 동남아
  {
    id: 12,
    name: '온타이키친',
    category: '동남아',
    specialty: '팟타이, 뿌님 팟 퐁커리',
    searchQuery: '온타이키친 상암동'
  },
  {
    id: 13,
    name: '하노이의아침 상암점',
    category: '동남아',
    specialty: '쇠고기쌀국수',
    searchQuery: '하노이의아침 상암점'
  },
  // 건강식
  {
    id: 14,
    name: '포케올데이 상암점',
    category: '건강식',
    specialty: '포케',
    searchQuery: '포케올데이 상암점'
  },
  {
    id: 15,
    name: '서브웨이 상암점',
    category: '건강식',
    specialty: '샌드위치, 샐러드',
    searchQuery: '서브웨이 상암점'
  },
  // 회식
  {
    id: 16,
    name: '목로',
    category: '회식',
    specialty: '4인 Set, 갈비살, 살치살',
    searchQuery: '목로 상암동'
  },
  {
    id: 17,
    name: '구퉁이 상암점',
    category: '회식',
    specialty: '소꽃갈비한판, 소갈비살',
    searchQuery: '구퉁이 상암점'
  }
];
