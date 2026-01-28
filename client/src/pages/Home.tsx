import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Shield, Globe2, Zap, LayoutDashboard, MessageSquare, ShoppingBag, CheckCircle2, FileText, Users, ChevronDown, Activity, Lock, Server } from "lucide-react";
import { useRef, useState, useEffect } from "react";

// --- Components ---

function TechCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`tech-card p-8 md:p-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ subtitle, title, align = "center" }: { subtitle: string; title: React.ReactNode; align?: "left" | "center" }) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block text-primary font-mono text-sm font-bold tracking-widest uppercase mb-4"
      >
        // {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
      >
        {title}
      </motion.h2>
    </div>
  );
}

// --- Main Page ---

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white overflow-x-hidden">
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-white/5 h-20 flex items-center">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-wide">THE GLOBAL</span>
              <span className="font-display font-bold text-lg leading-none tracking-wide text-primary">RESILIENCE HUB</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest uppercase text-muted-foreground">
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex text-white hover:bg-white/10 font-mono text-xs">
              LOGIN
            </Button>
            <Button className="bg-white text-black hover:bg-white/90 font-bold px-6 rounded-none">
              資料請求
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-0" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="h-[1px] w-12 bg-primary" />
              <span className="font-mono text-primary text-sm font-bold tracking-widest uppercase">
                System Online / Ver. 5.0
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-huge font-display text-white mb-8"
            >
              KNOWLEDGE<br />
              AS A WEAPON.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              国内最高峰の「知」に、世界最先端の「武器」を。<br />
              <span className="text-white font-bold">The Global Resilience Hub</span> は、<br />
              組織の危機管理能力をOSレベルでアップデートします。
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 h-16 rounded-none shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                Hubのデモを見る
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-bold text-lg px-10 h-16 rounded-none">
                資料をダウンロード
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Abstract Globe/Data Visualization Background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
           <div className="absolute inset-0 border border-primary/30 rounded-full animate-[spin_60s_linear_infinite]" />
           <div className="absolute inset-[100px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
           <div className="absolute inset-[200px] border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]" />
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Mission / Problem */}
      <section id="mission" className="py-32 border-t border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                align="left"
                subtitle="THE BLIND SPOT"
                title={<>防災担当者のデスクは、<br />なぜ<span className="text-primary">「孤独」</span>なのか。</>}
              />
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="font-display text-2xl font-bold text-muted-foreground">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">正解が見つからない</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      災害は待ってくれません。しかし、対策に必要な情報は世界中に散らばり、言語の壁に阻まれ、現場のノウハウは個人の頭の中に眠ったままです。
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <span className="font-display text-2xl font-bold text-muted-foreground">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">比較対象がない</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      「他社はどうしているのか？」その問いに答えられる人は社内にいません。情報の孤立が、意思決定の遅れと品質の低下を招いています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Lock className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                  <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">Access Denied</p>
                  <p className="text-white font-bold mt-2">Closed Knowledge</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution / Features */}
      <section id="features" className="py-32 bg-white/[0.02]">
        <div className="container">
          <SectionHeading 
            subtitle="CORE MODULES"
            title={<>組織にインストールする、<br />3つの<span className="text-primary">「拡張機能」</span></>}
          />

          <div className="grid md:grid-cols-3 gap-8">
            <TechCard delay={0}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <LayoutDashboard className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">AI INTELLIGENCE</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                世界中の防災データをAIが収集・構造化。あなたの組織に必要な情報だけを、日本語で要約して毎朝お届けします。
              </p>
              <ul className="space-y-3 text-sm text-white/80 font-mono">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> グローバルリスク検知</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 自動要約レポート</li>
              </ul>
            </TechCard>

            <TechCard delay={0.2}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <Users className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">COMMUNITY</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                教科書にはない「現場のリアル」を共有。検索では出てこない失敗談や運用ルールを、スレッド形式で相談できます。
              </p>
              <ul className="space-y-3 text-sm text-white/80 font-mono">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 匿名相談スレッド</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ベストプラクティス共有</li>
              </ul>
            </TechCard>

            <TechCard delay={0.4}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <ShoppingBag className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-4">MARKETPLACE</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                課題解決の技術と出会い、即座に導入。防災テック企業の最新ソリューションを、スムーズに商談・契約できます。
              </p>
              <ul className="space-y-3 text-sm text-white/80 font-mono">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ソリューション検索</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> ダイレクト商談</li>
              </ul>
            </TechCard>
          </div>
        </div>
      </section>

      {/* Pricing / Offer */}
      <section id="pricing" className="py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-card border border-white/10 p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-white to-primary" />
            
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                すべてを、ひとつの会費で。
              </h2>
              <p className="text-lg text-muted-foreground">
                The Global Resilience Hub は、一般社団法人 The Global Resilience Summit の<br />
                会員限定プラットフォームとして提供されます。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center border-t border-white/10 pt-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">会員特典に含まれるもの</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">定例会・カンファレンス参加権</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">グローバルネットワークへのアクセス</span>
                  </li>
                  <li className="flex items-center gap-3 text-white bg-white/5 p-3 -mx-3 rounded">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white fill-current" />
                    </div>
                    <span className="font-bold text-primary">The Global Resilience Hub フル利用</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center md:text-right">
                <p className="font-mono text-sm text-muted-foreground mb-2 uppercase tracking-widest">Annual Membership</p>
                <div className="flex items-baseline justify-center md:justify-end gap-2 mb-2">
                  <span className="text-6xl font-display font-bold text-white">¥600,000</span>
                  <span className="text-xl text-muted-foreground">/ 年</span>
                </div>
                <p className="text-sm text-primary font-bold mb-8">
                  (月額換算 ¥50,000)
                </p>
                <Button size="lg" className="w-full bg-white text-black hover:bg-white/90 font-bold h-14 rounded-none">
                  入会案内を請求する
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-white" />
            <span className="font-display font-bold text-white tracking-wide">The Global Resilience Summit</span>
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            © 2026 THE GLOBAL RESILIENCE SUMMIT. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
