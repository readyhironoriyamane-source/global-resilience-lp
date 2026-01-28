import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, ChevronRight, Globe, Lock, Play, Shield, Zap } from "lucide-react";
import { useRef, useState } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold text-xl rounded-sm">
              RH
            </div>
            <span className="font-bold text-lg tracking-wider">THE GLOBAL RESILIENCE HUB</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest text-gray-400">
            <a href="#problem" className="hover:text-white transition-colors">PROBLEM</a>
            <a href="#solution" className="hover:text-white transition-colors">SOLUTION</a>
            <a href="#value" className="hover:text-white transition-colors">VALUE</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/5 font-medium tracking-wider">
              LOGIN
            </Button>
            <Button className="bg-white text-black hover:bg-gray-200 font-bold tracking-wider px-6 rounded-none">
              資料請求
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Premium Static Style */}
      <section ref={targetRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background - Deepest Black with Subtle Spotlight */}
        <div className="absolute inset-0 bg-[#050505]">
          <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-l from-[#1a1a1a] to-transparent opacity-30" />
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#050505] via-[#050505] to-transparent z-20" />
        </div>

        <div className="container mx-auto px-6 relative z-30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Typography (Minimal & Bold) */}
            <div className="lg:col-span-5 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[1px] w-12 bg-white/30" />
                  <span className="text-sm font-medium tracking-[0.2em] text-gray-400">SYSTEM ONLINE / VER. 9.0</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                  国内最高峰の<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">「知」</span>に、<br />
                  世界最先端の<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">「武器」</span>を。
                </h1>
                
                <p className="text-lg text-gray-400 leading-relaxed max-w-md border-l-2 border-white/10 pl-6">
                  一般社団法人 The Global Resilience Summit は進化します。<br />
                  会員限定のAI防災プラットフォーム<br />
                  <strong className="text-white">「The Global Resilience Hub」</strong>、標準搭載開始。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-14 px-8 text-base font-bold tracking-wider rounded-none min-w-[240px]">
                  Summitに入会する
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="w-12 h-[1px] bg-gray-800" />
                  <span>月額換算 50,000円〜</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Product Visual (Static, Premium, Overflowing) */}
            <div className="lg:col-span-7 relative h-[80vh] flex items-center">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // Ultra smooth ease
                className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[130%] max-w-none"
              >
                {/* Main PC Visual - Sharp & High Contrast */}
                <div className="relative z-10 rounded-sm shadow-2xl overflow-hidden border border-white/10 bg-black">
                  <img 
                    src="/images/app-screen-pc.png" 
                    alt="The Global Resilience Hub Dashboard" 
                    className="w-full h-auto opacity-90 grayscale-[20%] contrast-125" 
                  />
                  {/* Glossy Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                  {/* Shadow Overlay for Depth */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Mobile Visual - Subtle Overlap */}
                <div className="absolute bottom-[-40px] left-[5%] w-[25%] z-20 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-[6px] border-[#1a1a1a] bg-black overflow-hidden">
                  <img 
                    src="/images/app-screen-mobile.png" 
                    alt="Mobile Interface" 
                    className="w-full h-auto grayscale-[20%] contrast-125" 
                  />
                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Minimalist Typography */}
      <section id="problem" className="py-32 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-8 mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 mt-2">01 / PROBLEM</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                防災担当者のデスクは、<br />
                なぜ<span className="text-white border-b-2 border-white pb-1">「孤独」</span>なのか。
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16">
              <p className="text-lg text-gray-400 leading-relaxed">
                災害は待ってくれません。しかし、対策に必要な情報は世界中に散らばり、言語の壁に阻まれ、現場のノウハウは個人の頭の中に眠ったままです。
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 border-l border-white/10 bg-white/5">
                  <Shield className="w-6 h-6 text-gray-400" />
                  <span className="text-lg font-medium">「検索しても、正解が見つからない」</span>
                </div>
                <div className="flex items-center gap-4 p-4 border-l border-white/10 bg-white/5">
                  <Lock className="w-6 h-6 text-gray-400" />
                  <span className="text-lg font-medium">「他社がどう動いているか、聞けない」</span>
                </div>
                <p className="text-gray-400 pt-4">
                  その情報の孤立を、テクノロジーとコミュニティの力で解決します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Bento Grid (Refined) */}
      <section id="solution" className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 block mb-4">02 / SOLUTION</span>
              <h2 className="text-3xl md:text-4xl font-bold">
                あなたの組織に<br />
                「防災のOS」をインストールする。
              </h2>
            </div>
            <p className="text-gray-400 mt-6 md:mt-0 max-w-md text-right">
              The Global Resilience Hub<br />
              3つのコア機能
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative p-8 bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors duration-500 h-[400px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">AI Intelligence</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  世界中のニュース・論文を、AIが「使える情報」に。国内外の膨大な防災データをAIが収集・分析。あなたの組織に必要な情報だけをレコメンドします。
                </p>
              </div>
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors" />
            </div>

            {/* Card 2 */}
            <div className="group relative p-8 bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors duration-500 h-[400px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Closed Community</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  実務者だけの、安全な相談場所。検索では出てこない「失敗談」や「運用ルール」を、スレッド形式でいつでも質問・相談できます。
                </p>
              </div>
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors" />
            </div>

            {/* Card 3 */}
            <div className="group relative p-8 bg-[#0a0a0a] border border-white/5 hover:border-white/20 transition-colors duration-500 h-[400px] flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-white/5 rounded-none flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">Solution Marketplace</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  課題解決の技術と出会い、即座に導入する。防災テック企業の最新ソリューションが集結。事例を見るだけでなく、そのまま商談へ。
                </p>
              </div>
              <div className="w-full h-[1px] bg-white/10 group-hover:bg-white/30 transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Section - High Contrast Table */}
      <section id="value" className="py-32 bg-white text-black">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-xs font-bold tracking-[0.2em] text-gray-500 block mb-4">03 / VALUE</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                「Summit」への入会ひとつで、<br />すべてが手に入る。
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-0 border border-black">
              {/* Left: Old Model */}
              <div className="p-12 bg-gray-50 border-r border-black/10 flex flex-col justify-between opacity-60">
                <div>
                  <h3 className="text-xl font-bold text-gray-500 mb-8">これまでの協会</h3>
                  <ul className="space-y-4 mb-12">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-400" />
                      <span>定例会・カンファレンス参加</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gray-400" />
                      <span>人脈・権威の獲得</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Annual Fee</p>
                  <p className="text-3xl font-bold text-gray-400">60万円</p>
                </div>
              </div>

              {/* Right: New Model */}
              <div className="p-12 bg-black text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1">RECOMMENDED</div>
                <div>
                  <h3 className="text-xl font-bold mb-8">これからの協会</h3>
                  <ul className="space-y-4 mb-12">
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-white" />
                      <span>定例会・カンファレンス参加</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-white" />
                      <span>人脈・権威の獲得</span>
                    </li>
                    <li className="flex items-center gap-3 text-blue-300 font-bold">
                      <Zap className="w-5 h-5" />
                      <span>The Global Resilience Hub フルアクセス</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">Annual Fee</p>
                  <div className="flex items-baseline gap-4">
                    <p className="text-4xl font-bold">60万円</p>
                    <span className="text-sm text-gray-400">（据え置き）</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center max-w-2xl mx-auto">
              <p className="text-xl font-medium leading-relaxed mb-8">
                月額換算、わずか5万円。<br />
                アルバイト1人分のコストで、世界中の防災知見とAI、<br />
                そして国内最高クラスのネットワークをあなたのチームに。
              </p>
              <p className="text-gray-500 text-sm">
                これは「会費」ではありません。組織の生存能力を高めるための、最も確実な「投資」です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Final Impact */}
      <section className="py-32 bg-[#050505] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight">
            備えるレベルを、<br />世界基準へ。
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 h-16 px-10 text-lg font-bold tracking-wider rounded-none min-w-[280px]">
              入会案内を見る
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black h-16 px-10 text-lg font-bold tracking-wider rounded-none min-w-[280px]">
              <Play className="mr-2 h-5 w-5" />
              デモ画面を見る
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10 text-gray-500 text-sm">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-6 h-6 bg-white/10 rounded-sm" />
            <span className="font-bold tracking-wider">THE GLOBAL RESILIENCE SUMMIT</span>
          </div>
          <p>© 2026 The Global Resilience Summit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
