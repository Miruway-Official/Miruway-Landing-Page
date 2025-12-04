"use client";

import { useState, useSyncExternalStore } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, X, TicketPercent, ArrowRight, Sparkles, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/store";

export default function CartSheet() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  // Coupon States
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isApplied, setIsApplied] = useState(false);
  const [error, setError] = useState("");

  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal - discount > 0 ? subtotal - discount : 0;

  // Coupon Logic
  const handleApplyCoupon = () => {
    setError("");
    if (items.length === 0) {
        setError("ไม่มีสินค้าในตะกร้า");
        return;
    }
    if (couponCode.toUpperCase() === "SKIPNEW") {
      setDiscount(50);
      setIsApplied(true);
    } else if (couponCode.toUpperCase() === "SALE10") {
      setDiscount(Math.floor(subtotal * 0.1));
      setIsApplied(true);
    } else {
      setError("รหัสส่วนลดไม่ถูกต้อง");
      setDiscount(0);
      setIsApplied(false);
    }
  };

  const removeCoupon = () => {
    setCouponCode("");
    setDiscount(0);
    setIsApplied(false);
    setError("");
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    const cartData = items.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      detail: item.detail
    }));
    const encodedData = encodeURIComponent(JSON.stringify(cartData));
    const discountParam = discount > 0 ? `&discount=${discount}` : "";
    window.location.href = `/checkout?cart=${encodedData}${discountParam}`;
  };

  if (!isMounted) {
      return (
        <Button variant="ghost" size="icon" className="rounded-full text-slate-300">
            <ShoppingCart className="w-5 h-5" />
        </Button>
      );
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full text-slate-300 hover:text-white hover:bg-white/10 relative transition-all hover:scale-105">
            <ShoppingCart className="w-5 h-5" />
            {items.length > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse shadow-[0_0_10px_#ec4899]" />
            )}
        </Button>
      </SheetTrigger>
      
      {/* ✅ SheetContent: ใช้ h-full และ flex-col เพื่อจัด Layout ให้เต็มความสูง */}
      <SheetContent className="w-full sm:max-w-md bg-slate-950/90 backdrop-blur-xl border-l border-white/10 p-0 flex flex-col h-full shadow-2xl">
        
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-pink-600/10 rounded-full blur-[80px] -z-10 pointer-events-none" />

        {/* 1. Header (Fixed Top) */}
        <SheetHeader className="p-6 border-b border-white/10 bg-slate-950/50 shrink-0">
          <SheetTitle className="text-white flex items-center gap-2 text-xl">
            <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-white/5">
                <ShoppingCart className="w-5 h-5 text-purple-400" /> 
            </div>
            ตะกร้าสินค้า <Badge className="bg-white/10 text-white hover:bg-white/20 ml-2">{items.length}</Badge>
          </SheetTitle>
        </SheetHeader>

        {/* 2. ScrollArea (Flex Grow - Scrollable Area) */}
        {/* ✅ ใช้ flex-1 เพื่อให้ขยายเต็มพื้นที่ และ overflow-hidden เพื่อให้ ScrollArea จัดการ scroll ภายใน */}
        <ScrollArea className="flex-1 w-full overflow-hidden">
          <div className="p-6 space-y-4">
            {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 text-slate-500">
                    <ShoppingCart className="w-16 h-16 mb-4 opacity-20" />
                    <p>ตะกร้าสินค้าว่างเปล่า</p>
                </div>
            ) : (
                items.map((item, index) => (
                <div key={`${item.id}-${index}`} className="group relative flex gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300">
                    <div className="w-20 h-20 rounded-xl bg-slate-800 shrink-0 relative overflow-hidden border border-white/5">
                        {/* Image Placeholder */}
                        {item.image ? (
                           /* ใส่ Image Component ตรงนี้ถ้ามีรูปจริง */
                           <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">IMG</div>
                        ) : (
                           <div className="absolute inset-0 flex items-center justify-center text-xs text-slate-500">IMG</div>
                        )}
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                            <div className="flex justify-between items-start">
                                <h4 className="text-sm font-bold text-white line-clamp-1 pr-6">{item.title}</h4>
                                <button 
                                    onClick={() => removeItem(item.id)} 
                                    className="text-slate-500 hover:text-red-400 transition-colors p-1 hover:bg-white/5 rounded-full"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-xs text-slate-400 mt-1 truncate">{item.category}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-purple-300 font-bold">฿{item.price.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                ))
            )}
          </div>
        </ScrollArea>

        {/* 3. Footer (Fixed Bottom) */}
        <div className="bg-slate-900/90 backdrop-blur-xl border-t border-white/10 p-6 space-y-6 shrink-0 relative z-20">
            
            {/* Coupon Input */}
            <div className="space-y-2">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Input 
                            placeholder="โค้ดส่วนลด..." 
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            disabled={isApplied || items.length === 0}
                            className="bg-slate-950/50 border-white/10 text-white focus:border-purple-500 pr-8 h-10" 
                        />
                        {isApplied && <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-500" />}
                    </div>
                    {isApplied ? (
                         <Button variant="outline" onClick={removeCoupon} className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 h-10 px-3">
                             <X className="w-4 h-4" />
                         </Button>
                    ) : (
                        <Button onClick={handleApplyCoupon} disabled={items.length === 0} className="bg-white/10 hover:bg-purple-600 text-white border border-white/10 h-10 px-4 transition-all">
                            ใช้โค้ด
                        </Button>
                    )}
                </div>
                {error && <p className="text-xs text-red-400 animate-in slide-in-from-left-2">{error}</p>}
                {isApplied && <div className="flex items-center gap-2 text-xs text-green-400 animate-in slide-in-from-left-2"><Sparkles className="w-3 h-3" /> ประหยัด ฿{discount}</div>}
            </div>

            <Separator className="bg-white/10" />

            {/* Total Summary */}
            <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-400">ยอดรวมสินค้า</span>
                    <span className="text-white">฿{subtotal.toLocaleString()}</span>
                </div>
                {isApplied && (
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-yellow-400 flex items-center gap-1"><TicketPercent className="w-3 h-3" /> ส่วนลด</span>
                        <span className="text-yellow-400 font-medium">-฿{discount.toLocaleString()}</span>
                    </div>
                )}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-white font-bold text-lg">ยอดสุทธิ</span>
                    <div className="text-right">
                         <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
                             ฿{total.toLocaleString()}
                         </span>
                    </div>
                </div>
            </div>

            <Button 
                onClick={handleCheckout}
                disabled={items.length === 0}
                className="w-full h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-lg shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300 group disabled:opacity-50 disabled:shadow-none"
            >
                ชำระเงิน <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}