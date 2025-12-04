"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Send, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      
      <section className="pt-32 pb-20 px-6 container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-slate-400">
                สนใจร่วมธุรกิจ สมัครงาน หรือต้องการสอบถามข้อมูลองค์กร <br />
                กรอกข้อมูลด้านล่าง ทีมงาน Miru Way จะติดต่อกลับโดยเร็วที่สุด
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* --- Left: Contact Info --- */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
            >
                <Card className="bg-slate-900/50 border-white/10 backdrop-blur-sm overflow-hidden">
                    <CardContent className="p-8 space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                                <Building2 className="text-purple-400" /> สำนักงานใหญ่
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-medium">บริษัท มิรู เวย์ จำกัด (Miru Way Co., Ltd.)</p>
                                        <p className="text-slate-400 mt-1">123 อาคาร Miru Tower, ชั้น 25, ถนนสุขุมวิท,<br/>แขวงคลองตันเหนือ, เขตวัฒนา, กรุงเทพฯ 10110</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm">Email for Business</p>
                                        <p className="text-white font-medium">business@miruway.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <div>
                                        <p className="text-slate-400 text-sm">Call Center</p>
                                        <p className="text-white font-medium">02-123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-slate-800 rounded-xl border border-white/10 relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-500 font-medium">
                                Google Map Integration
                            </div>
                            <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* --- Right: Contact Form --- */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Card className="bg-slate-900/50 border-white/10 backdrop-blur-sm h-full">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-bold text-white mb-2">ส่งข้อความถึงเรา</h3>
                        <p className="text-slate-400 mb-8">กรอกแบบฟอร์มด้านล่างเพื่อติดต่อฝ่ายที่เกี่ยวข้อง</p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-white">ชื่อ - นามสกุล</Label>
                                    <Input placeholder="ระบุชื่อของคุณ" className="bg-slate-950/50 border-white/10 text-white focus:border-purple-500 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-white">เบอร์โทรศัพท์</Label>
                                    <Input placeholder="08x-xxx-xxxx" className="bg-slate-950/50 border-white/10 text-white focus:border-purple-500 h-12" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-white">อีเมล</Label>
                                <Input type="email" placeholder="name@company.com" className="bg-slate-950/50 border-white/10 text-white focus:border-purple-500 h-12" />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-white">หัวข้อการติดต่อ</Label>
                                <Select>
                                    <SelectTrigger className="bg-slate-950/50 border-white/10 text-white h-12">
                                        <SelectValue placeholder="เลือกหัวข้อ..." />
                                    </SelectTrigger>
                                    <SelectContent className="bg-slate-900 border-white/10 text-white">
                                        <SelectItem value="partnership">สนใจร่วมธุรกิจ / Partnership</SelectItem>
                                        <SelectItem value="career">สมัครงาน / Careers</SelectItem>
                                        <SelectItem value="media">สื่อมวลชน / Media</SelectItem>
                                        <SelectItem value="other">อื่นๆ</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-white">ข้อความ</Label>
                                <Textarea placeholder="รายละเอียดเพิ่มเติม..." className="bg-slate-950/50 border-white/10 text-white focus:border-purple-500 min-h-[150px]" />
                            </div>

                            <Button className="w-full h-14 text-lg rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white shadow-lg shadow-purple-900/20 font-bold">
                                <Send className="w-5 h-5 mr-2" /> ส่งข้อความ
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>

        </div>
      </section>
    </main>
  );
}