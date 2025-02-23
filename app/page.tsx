'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const focusTurlar = [
  {
    id: 1,
    title: 'Tarihi Şehir Turu',
    description: 'Şehrin antik sokaklarını ve anıtlarını keşfedin',
    price: 1000,
    duration: '3 saat',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=800',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: 'Dağ macerası',
    description: 'Deneyimli rehberlerle doğal dağ parkurlarında yürüyüş',
    price: 1000,
    duration: '6 saat',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    title: 'Kültürel Tur',
    description: 'Kendinizi yerel gelenek ve göreneklere kaptırın',
    price: 1000,
    duration: '4 saat',
    image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?q=80&w=800',
    rating: 4.7,
    reviews: 156,
  },
];

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {focusTurlar.map((tour) => (
          <Card key={tour.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 bg-white/80 hover:bg-white"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">{tour.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{tour.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-[#F78410]">₺{tour.price}</span>
                <span className="text-sm text-gray-500">{tour.duration}</span>
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between border-t p-4">
              <div className="flex items-center gap-1">
                <span className="text-sm font-semibold">{tour.rating}</span>
                <span className="text-sm text-gray-500">({tour.reviews} yorum)</span>
              </div>
              <Button className="bg-[#F78410] hover:bg-[#E07516] text-white">Rezervasyon</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}