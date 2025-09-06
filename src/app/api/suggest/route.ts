import { NextRequest, NextResponse } from 'next/server';
import { restaurants, Restaurant } from '@/data/restaurants';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (!category) {
      return NextResponse.json(
        { error: '카테고리가 필요합니다.' },
        { status: 400 }
      );
    }

    // 카테고리에 맞는 식당들 필터링
    const filteredRestaurants = restaurants.filter(
      (restaurant) => restaurant.category === category
    );

    if (filteredRestaurants.length === 0) {
      return NextResponse.json(
        { error: '해당 카테고리의 식당이 없습니다.' },
        { status: 404 }
      );
    }

    // 랜덤하게 하나 선택
    const randomIndex = Math.floor(Math.random() * filteredRestaurants.length);
    const selectedRestaurant = filteredRestaurants[randomIndex];

    // Google Maps 검색 링크 생성
    const googleMapsUrl = `https://www.google.com/maps/search/${encodeURIComponent(selectedRestaurant.searchQuery)}`;

    const response = {
      restaurant: selectedRestaurant,
      googleMapsUrl,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
