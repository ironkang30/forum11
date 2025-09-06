import { NextRequest, NextResponse } from 'next/server';
import { restaurants } from '@/data/restaurants';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const weighted = searchParams.get('weighted') === 'true';

  if (!category) {
    return NextResponse.json({ error: '카테고리가 필요합니다.' }, { status: 400 });
  }

  // 카테고리에 맞는 식당들 필터링
  const filteredRestaurants = restaurants.filter(restaurant => restaurant.category === category);

  if (filteredRestaurants.length === 0) {
    return NextResponse.json({ error: '해당 카테고리의 식당이 없습니다.' }, { status: 404 });
  }

  // 가중치 적용 (간단한 랜덤 선택)
  const randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
  const selectedRestaurant = filteredRestaurants[randomIndex];

  // Google Maps URL 생성
  const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(selectedRestaurant.searchQuery)}`;

  return NextResponse.json({
    restaurant: selectedRestaurant,
    googleMapsUrl: googleMapsUrl
  });
}
