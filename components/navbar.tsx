'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Heart, ShoppingCart, User } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';

interface CategoryBase {
  name: string;
  filters: string[];
  priceRange: boolean;
  duration?: boolean;
}

type Categories = {
  [key: string]: CategoryBase;
};

const categories: Categories = {
  turlar: {
    name: 'Turlar',
    filters: ['Günübirlik Turlar', 'Çok Günlük Turlar', 'Macera Turları', 'Kültürel Turlar'],
    priceRange: true,
    duration: true,
  },
  tickets: {
    name: 'Biletler',
    filters: ['Gezilecek Yerler', 'Gösteriler', 'Müzeler', 'Tema Parkları'],
    priceRange: true,
  },
  rent: {
    name: 'Kirala',
    filters: ['Arabalar', 'Bisikletler', 'Tekneler', 'Ekipman'],
    priceRange: true,
    duration: true,
  },
  transfer: {
    name: 'Aktarım',
    filters: ['Havaalanı', 'Otel', 'Şehir Turu', 'Özel'],
    priceRange: true,
  },
};

export default function Navbar() {
  const [activeCategory, setActiveCategory] = useState('turlar');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="shrink-0">
                <Menu strokeWidth={1.5} />
                <span className="sr-only">Menü</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[400px] sm:w-[540px]">
              <SheetHeader>
                <SheetTitle>Filtrele</SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <Tabs
                  defaultValue="turlar"
                  value={activeCategory}
                  onValueChange={setActiveCategory}
                >
                  <TabsList className="grid w-full grid-cols-4">
                    {Object.entries(categories).map(([key, category]) => (
                      <TabsTrigger key={key} value={key} className="text-sm">
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {Object.entries(categories).map(([key, category]) => (
                    <TabsContent key={key} value={key} className="mt-6">
                      <div className="space-y-6">
                        <div>
                          <h3 className="mb-4 text-lg font-medium">Filtrele</h3>
                          <div className="space-y-4">
                            {category.filters.map((filter) => (
                              <div key={filter} className="flex items-center space-x-2">
                                <Checkbox id={filter} />
                                <Label htmlFor={filter}>{filter}</Label>
                              </div>
                            ))}
                          </div>
                        </div>
                        {category.priceRange && (
                          <div>
                            <h3 className="mb-4 text-lg font-medium">Fiyat Aralığı</h3>
                            <Slider
                              defaultValue={[0, 1000]}
                              min={0}
                              max={1000}
                              step={10}
                              value={priceRange}
                              onValueChange={setPriceRange}
                              className="w-full"
                            />
                            <div className="mt-2 flex justify-between text-sm">
                              <span>₺{priceRange[0]}</span>
                              <span>₺{priceRange[1]}</span>
                            </div>
                          </div>
                        )}
                        {category.duration && (
                          <div>
                            <h3 className="mb-4 text-lg font-medium">Süre</h3>
                            <div className="space-y-4">
                              {['0-3 saat', '3-6 saat', '6-12 saat', 'Tüm gün'].map((duration) => (
                                <div key={duration} className="flex items-center space-x-2">
                                  <Checkbox id={duration} />
                                  <Label htmlFor={duration}>{duration}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </SheetContent>
          </Sheet>
          <span className="text-xl font-bold text-primary-500">Turizm</span>
        </div>
        <div className="flex items-center gap-2">
          <Button  className="shrink-0">
            <Heart strokeWidth={1.5} />
            <span className="sr-only">Favori Turlarım</span>
          </Button>
          <Button  className="shrink-0">
            <ShoppingCart strokeWidth={1.5} />
            <span className="sr-only">Sepetim</span>
          </Button>
          <Button  className="shrink-0">
            <User strokeWidth={1.5} />
            <span className="sr-only">Profilim</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}