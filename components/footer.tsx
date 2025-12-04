import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function FooterLanding() {
  return (
    <footer id="footer" className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
                Miru Way
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
                ผู้นำด้านแพลตฟอร์มความบันเทิงดิจิทัลครบวงจร <br />
                เชื่อมต่อโลกแห่งเกมและไลฟ์สไตล์ไว้ในที่เดียว
            </p>
            <div className="flex gap-4 pt-2">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:bg-white hover:text-slate-900 transition-all duration-300">
                        <Icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-bold mb-6">ผลิตภัณฑ์ของเรา</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/shop" className="hover:text-purple-400 transition-colors">Miru Top-up (เติมเกม)</Link></li>
                <li><Link href="/shop" className="hover:text-purple-400 transition-colors">Miru Streaming (แอปพรีเมียม)</Link></li>
                <li><span className="text-slate-600 cursor-not-allowed">Miru Board Game (Coming Soon)</span></li>
                <li><span className="text-slate-600 cursor-not-allowed">Miru Tournament (Coming Soon)</span></li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div>
            <h4 className="text-white font-bold mb-6">บริษัท</h4>
            <ul className="space-y-3 text-sm text-slate-400">
                <li><Link href="/about" className="hover:text-purple-400 transition-colors">เกี่ยวกับเรา</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">ร่วมงานกับเรา</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">นักลงทุนสัมพันธ์</Link></li>
                <li><Link href="/help" className="hover:text-purple-400 transition-colors">ติดต่อเรา</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">สำนักงานใหญ่</h4>
            <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>123 Miru Tower, ชั้น 25, ถนนสุขุมวิท,<br/>เขตวัฒนา, กรุงเทพฯ 10110</span>
                </li>
                <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>contact@miruway.com</span>
                </li>
                <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-500 shrink-0" />
                    <span>02-123-4567</span>
                </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} Miru Way Co., Ltd. All rights reserved.</p>
            <div className="flex gap-6">
                <Link href="/help" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/help" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/help" className="hover:text-white transition-colors">Cookies Settings</Link>
            </div>
        </div>

      </div>
    </footer>
  );
}