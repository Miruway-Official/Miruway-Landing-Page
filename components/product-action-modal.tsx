"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Zap, ArrowRight, X, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/store"; // Import Store
import { useState } from "react";

interface ProductActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id?: string | number; // เพิ่ม id
    title: string;
    price: number;
    category: string;
    image: string;
    description?: string;
  };
}

export default function ProductActionModal({ isOpen, onClose, product }: ProductActionModalProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // เพิ่มสินค้าลง Store
    addItem({
      id: product.id || Math.random(), // ถ้าไม่มี id ให้สุ่ม (กรณี Mock)
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
      detail: product.category // ใช้ category เป็น detail ชั่วคราว
    });

    // แสดงสถานะว่าเพิ่มแล้ว
    setIsAdded(true);
    
    // Reset และปิด Modal หลังผ่านไปนิดนึง
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 800);
  };

  const handleBuyNow = () => {
    const params = new URLSearchParams({
      id: product.id?.toString() || "temp",
      title: product.title,
      price: product.price.toString(),
      category: product.category,
      image: product.image
    });
    window.location.href = `/checkout?${params.toString()}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-slate-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl p-0 overflow-hidden gap-0">
        
        {/* ... (Background Decor code เดิม) ... */}
        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-600/20 rounded-full blur-[80px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-pink-600/20 rounded-full blur-[60px] -z-10 pointer-events-none" />

        <div className="flex justify-between items-start p-6 pb-2 relative z-10">
          <div>
             <Badge variant="outline" className="mb-2 border-purple-500/30 text-purple-300 bg-purple-500/10">
                {product.category}
             </Badge>
             <DialogTitle className="text-xl font-bold text-white leading-tight">
               {product.title}
             </DialogTitle>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">
             <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-6 py-4 flex gap-4 items-center">
           <div className="w-20 h-20 rounded-xl bg-slate-800 shrink-0 relative overflow-hidden border border-white/10 shadow-lg group">
              {product.image ? (
                 /* ตรงนี้ใส่ <Image /> ได้ถ้ามีรูปจริง */
                 <div className="absolute inset-0 bg-slate-700 flex items-center justify-center text-xs text-slate-500">IMG</div>
              ) : (
                 <div className="w-full h-full bg-slate-800" />
              )}
           </div>
           <div>
              <DialogDescription className="text-slate-400 text-xs mb-1">ราคาต่อชิ้น</DialogDescription>
              <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
                 ฿{product.price.toLocaleString()}
              </div>
           </div>
        </div>

        <div className="p-6 pt-2 grid grid-cols-2 gap-3 relative z-10">
          <Button 
            variant="outline" 
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`h-12 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all ${isAdded ? 'border-green-500 text-green-400' : 'hover:text-purple-300'}`}
          >
            {isAdded ? (
                <><Check className="w-4 h-4 mr-2" /> เพิ่มแล้ว</>
            ) : (
                <><ShoppingCart className="w-4 h-4 mr-2" /> ใส่ตะกร้า</>
            )}
          </Button>
          
          <Button 
            onClick={handleBuyNow}
            className="h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all group"
          >
            <Zap className="w-4 h-4 mr-2 fill-white" />
            ซื้อเลย
            <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </Button>
        </div>

      </DialogContent>
    </Dialog>
  );
}