"use client";

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductActionModal from "@/components/product-action-modal";

interface ProductCardProps {
  title: string;
  price: number;
  category: string;
  image: string;
  isHot?: boolean;
  description?: string;
}

export default function ProductCard({ title, price, category, image, isHot, description }: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Card className="glass border-0 overflow-hidden group hover:-translate-y-1 transition-all duration-300 relative flex flex-col h-full">
        {/* Image Area */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-800">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent z-10" />

          {/* Image Mockup */}
          <div className="w-full h-full group-hover:scale-110 transition-transform duration-700 relative flex items-center justify-center">
            <span className="text-slate-600 font-bold text-2xl">IMG</span>
            {/* หากใช้ Image จริง: <Image src={image} alt={title} fill className="object-cover" /> */}
          </div>

          {isHot && (
            <Badge className="absolute top-3 right-3 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 border-0 text-black font-bold shadow-lg shadow-orange-500/20">
              HOT 🔥
            </Badge>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4 pt-4 relative z-20 flex-1">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-[10px] h-5 px-1.5 border-purple-500/30 text-purple-300 bg-purple-500/10">
              {category}
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors line-clamp-2 leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-xs text-slate-400 mt-2 line-clamp-2">
              {description}
            </p>
          )}
        </CardContent>

        {/* Footer */}
        <CardFooter className="p-4 pt-0 flex items-center justify-between relative z-20 mt-auto">
          <div className="flex flex-col">
            <span className="text-xs text-slate-400">ราคาเริ่มต้น</span>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-300">
              ฿{price.toLocaleString()}
            </span>
          </div>

          <Button
            size="sm"
            onClick={() => setIsModalOpen(true)} // เปิด Modal
            className="rounded-full bg-white/10 hover:bg-purple-600 text-white border border-white/10 hover:border-purple-500 backdrop-blur-sm transition-all duration-300 shadow-lg px-5"
          >
            สั่งซื้อ
          </Button>
        </CardFooter>

        {/* Glow Effect on Card Hover */}
        <div className="absolute -inset-px bg-gradient-to-b from-purple-500/0 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none z-0" />
      </Card>

      {/* Render Modal */}
      <ProductActionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ title, price, category, image, description }}
      />
    </>
  );
}