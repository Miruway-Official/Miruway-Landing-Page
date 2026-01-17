import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function FooterLanding() {
  return (
    <footer id="footer" className="bg-muted/30 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-16">

          {/* Brand Info */}
          <div className="col-span-2 sm:col-span-1 space-y-3 sm:space-y-4">
            <Link href="/" className="text-lg sm:text-xl font-bold text-foreground">
                Miru Way
            </Link>
            <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                ผู้นำด้านแพลตฟอร์มความบันเทิงดิจิทัลครบวงจร <br className="hidden sm:block" />
                เชื่อมต่อโลกแห่งเกมและไลฟ์สไตล์ไว้ในที่เดียว
            </p>
            <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-muted-foreground hover:bg-sky-600 hover:text-white hover:border-sky-600 transition-all">
                        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-3 sm:mb-5 text-sm sm:text-base">ผลิตภัณฑ์ของเรา</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li><Link href="/shop" className="hover:text-sky-400 transition-colors">Miru Top-up</Link></li>
                <li><Link href="/shop" className="hover:text-sky-400 transition-colors">Miru Streaming</Link></li>
                <li><span className="text-muted-foreground/50 cursor-not-allowed">Board Game (Soon)</span></li>
                <li><span className="text-muted-foreground/50 cursor-not-allowed">Tournament (Soon)</span></li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-3 sm:mb-5 text-sm sm:text-base">บริษัท</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-sky-400 transition-colors">เกี่ยวกับเรา</Link></li>
                <li><Link href="#" className="hover:text-sky-400 transition-colors">ร่วมงานกับเรา</Link></li>
                <li><Link href="#" className="hover:text-sky-400 transition-colors">นักลงทุนสัมพันธ์</Link></li>
                <li><Link href="/help" className="hover:text-sky-400 transition-colors">ติดต่อเรา</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-foreground font-semibold mb-3 sm:mb-5 text-sm sm:text-base">สำนักงานใหญ่</h4>
            <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>123 Miru Tower, ชั้น 25, ถนนสุขุมวิท,<br/>เขตวัฒนา, กรุงเทพฯ 10110</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                    <span>contact@miruway.com</span>
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                    <span>02-123-4567</span>
                </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground/70">
            <p>&copy; {new Date().getFullYear()} Miru Way Co., Ltd. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <Link href="/help" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                <Link href="/help" className="hover:text-foreground transition-colors">Terms of Service</Link>
                <Link href="/help" className="hover:text-foreground transition-colors">Cookies Settings</Link>
            </div>
        </div>

      </div>
    </footer>
  );
}