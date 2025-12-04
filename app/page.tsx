"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Dices, Tv, ShieldCheck, Globe, Users, Gamepad2, Sparkles, Target, Rocket } from "lucide-react";
import { motion, Variants } from "framer-motion";
import scrollToSection from "@/lib/scrollToSection";

const stats = [
    { value: "500K+", label: "Active Users" },
    { value: "1M+", label: "Transactions" },
    { value: "50+", label: "Global Partners" },
    { value: "24/7", label: "Support" },
];

// Animation Variants เพื่อลดโค้ดซ้ำ
const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
    }
};

const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 }
    }
};

const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6 }
    }
};

const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
        opacity: 1,
        scale: 1,
        transition: { delay: i * 0.1, duration: 0.4 }
    })
};

const fadeInUpDelayed: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.5 }
    })
};

export default function CompanyLandingPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">

      {/* --- 1. Hero Section (Introduction) --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-5xl">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // เล่นซ้ำเมื่อเลื่อนกลับมา
            >
                <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-yellow-500/30 text-yellow-400 bg-yellow-500/5 backdrop-blur-md">
                   <Sparkles className="w-4 h-4 mr-2" /> Welcome to Miru Way Universe
                </Badge>
                
                <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight mb-6 leading-tight">
                    Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">Gaming</span> <br />
                    Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400">Boundaries</span>
                </h1>
                
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    อาณาจักรแห่งความบันเทิงดิจิทัลครบวงจร เราคือผู้ให้บริการเติมเกมระดับพรีเมียม 
                    และผู้สร้างสรรค์ Community บอร์ดเกมออนไลน์ที่ใหญ่ที่สุดในไทย
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button onClick={() => scrollToSection('products')} className="h-14 px-8 rounded-full bg-white text-slate-900 hover:bg-slate-200 font-bold text-lg w-full sm:w-auto">
                        ดูผลิตภัณฑ์ของเรา
                    </button>
                    <Link href="/auth">
                         <button className="h-14 px-8 rounded-full border-white/10 text-white hover:bg-white/10 w-full sm:w-auto">
                            สมัครสมาชิกฟรี
                        </button>
                    </Link>
                </div>
            </motion.div>
        </div>
        
        {/* Scroll Down Indicator */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
            <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
                <div className="w-1 h-2 bg-slate-500 rounded-full" />
            </div>
        </motion.div>
      </section>

      {/* --- 2. Our Products (Main Section) --- */}
      <section id="products" className="py-24 px-6 relative">
          <div className="container mx-auto">
              {/* Header Animation */}
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className="text-center mb-16"
              >
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h2>
                  <p className="text-slate-400">เลือกบริการที่คุณต้องการสัมผัส</p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  
                  {/* Product 1 */}
                  <motion.div
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} // เล่นซ้ำ
                    className="group relative"
                  >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                      <div className="relative h-full bg-slate-950 rounded-[2rem] border border-white/10 overflow-hidden flex flex-col">
                          {/* Image Area */}
                          <div className="h-64 bg-gradient-to-br from-purple-900/50 to-slate-900 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                                <div className="relative z-10 flex gap-4">
                                    <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center rotate-[-12deg] shadow-2xl">
                                        <Zap className="w-10 h-10 text-yellow-400" />
                                    </div>
                                    <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center rotate-[6deg] mt-8 shadow-2xl">
                                        <Tv className="w-10 h-10 text-pink-400" />
                                    </div>
                                </div>
                          </div>
                          
                          <div className="p-8 flex-1 flex flex-col">
                              <div className="flex items-center gap-3 mb-4">
                                  <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                      <Gamepad2 className="w-6 h-6" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-white">Top-up & Streaming</h3>
                              </div>
                              <p className="text-slate-400 mb-8 leading-relaxed">
                                  ศูนย์รวมบริการเติมเกมและแอปพรีเมียมราคาถูกกว่าท้องตลาด 
                                  ด้วยระบบอัตโนมัติ รวดเร็วภายใน 1 นาที ปลอดภัย 100%
                              </p>
                              <div className="mt-auto">
                                  <Link href="/shop">
                                    <Button className="w-full h-12 rounded-xl bg-white/5 hover:bg-purple-600 border border-white/10 hover:border-purple-500 text-white transition-all group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                                        เข้าสู่ร้านค้า <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </motion.div>

                  {/* Product 2 */}
                  <motion.div
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }} // เล่นซ้ำ
                    className="group relative"
                  >
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                      <div className="relative h-full bg-slate-950 rounded-[2rem] border border-white/10 overflow-hidden flex flex-col">
                          <div className="h-64 bg-gradient-to-bl from-blue-900/50 to-slate-900 relative overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-[url('/hex.svg')] opacity-20" />
                                <div className="relative z-10">
                                    <Dices className="w-32 h-32 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] animate-pulse" />
                                </div>
                          </div>
                          
                          <div className="p-8 flex-1 flex flex-col">
                              <div className="flex items-center gap-3 mb-4">
                                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                                      <Dices className="w-6 h-6" />
                                  </div>
                                  <h3 className="text-2xl font-bold text-white">Board Game Online</h3>
                              </div>
                              <p className="text-slate-400 mb-8 leading-relaxed">
                                  สัมผัสประสบการณ์บอร์ดเกมรูปแบบใหม่ เล่นกับเพื่อนได้ทุกที่ทุกเวลา 
                                  พร้อมระบบ Tournament และ Ranking ระดับประเทศ
                              </p>
                              <div className="mt-auto">
                                  <Button disabled className="w-full h-12 rounded-xl bg-slate-800 border border-white/5 text-slate-500 cursor-not-allowed">
                                      เร็วๆ นี้ (Coming Soon)
                                  </Button>
                              </div>
                          </div>
                      </div>
                  </motion.div>

              </div>
          </div>
      </section>

      {/* --- 3. About Company / Why Us --- */}
      <section id="about" className="py-24 bg-slate-950/50 relative">
          <div className="container mx-auto px-6">
              
              {/* About Header Animation */}
              <motion.div 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="text-center mb-12"
              >
                <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm border-purple-500/30 text-purple-300 bg-purple-500/5 backdrop-blur-md">
                    About Miru Way
                </Badge>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Driving the Future of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
                        Digital Entertainment
                    </span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                    เราคือ Tech Company สัญชาติไทย ผู้บุกเบิกแพลตฟอร์มบริการด้านเกมและ Lifestyle 
                    ด้วยความเชื่อที่ว่า "ความสุขในโลกดิจิทัล ควรเข้าถึงได้ง่ายและไร้ขีดจำกัด"
                </p>
              </motion.div>

              {/* Grid Items Animation */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {[
                      { icon: ShieldCheck, title: "Trusted Platform", desc: "จดทะเบียนบริษัทถูกต้อง มั่นใจได้ในความปลอดภัยของข้อมูลและการเงิน" },
                      { icon: Globe, title: "Global Connectivity", desc: "เชื่อมต่อผู้เล่นและบริการดิจิทัลจากทั่วทุกมุมโลกไว้ในที่เดียว" },
                      { icon: Users, title: "Community First", desc: "สร้างสังคมคุณภาพสำหรับเกมเมอร์ แบ่งปันเทคนิคและมิตรภาพ" },
                  ].map((item, i) => (
                      <motion.div
                        key={i}
                        variants={fadeInUpDelayed}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }} // เล่นซ้ำ
                        custom={i}
                        className="text-center"
                      >
                          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 hover:bg-white/10 transition-colors hover:scale-110 duration-300">
                              <item.icon className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                          <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">{item.desc}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-12 border-y border-white/5 bg-slate-950/30 backdrop-blur-sm">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        variants={scaleIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }} // เล่นซ้ำ
                        custom={i}
                      >
                          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</h3>
                          <p className="text-purple-300 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
      </section>

      {/* --- 4. CTA (Call to Action) --- */}
      <section className="py-20 px-6">
          <div className="container mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} // เล่นซ้ำ
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-gradient-to-r from-violet-900 to-fuchsia-900 p-12 md:p-20 text-center relative overflow-hidden"
              >
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                  <div className="relative z-10 max-w-3xl mx-auto">
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">พร้อมเริ่มต้นประสบการณ์ใหม่หรือยัง?</h2>
                      <p className="text-purple-200 text-lg mb-10">
                          สมัครสมาชิกวันนี้ รับสิทธิพิเศษมากมาย ทั้งส่วนลดเติมเกม และสิทธิ์เข้าทดสอบ Board Game Online ก่อนใคร
                      </p>
                      <Link href="/auth">
                        <Button size="lg" className="h-14 px-10 rounded-full bg-white text-purple-900 hover:bg-slate-100 font-bold text-lg shadow-2xl shadow-purple-900/50">
                            เข้าร่วมกับเรา (Join Now)
                        </Button>
                      </Link>
                  </div>
              </motion.div>
          </div>
      </section>

      {/* <Footer /> */}
    </main>
  );
}