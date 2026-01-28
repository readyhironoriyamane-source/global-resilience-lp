import { Button } from "@/components/ui/button";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, LayoutDashboard, Users, ShoppingBag, ChevronDown, Zap, Globe2 } from "lucide-react";

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
            <a href="#problem" className="hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="hover:text-white transition-colors">Solution</a>
            <a href="#value" className="hover:text-white transition-colors">Value</a>
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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#050505]">
        {/* Deep Black Background with Subtle Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(20,20,30,0.4),rgba(5,5,5,1)_60%)] z-0" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl relative z-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="h-[1px] w-12 bg-primary" />
                <span className="font-mono text-primary text-sm font-bold tracking-widest uppercase">
                  System Online / Ver. 7.0
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight"
              >
                国内最高峰の「知」に、<br />
                世界最先端の「武器」を。
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
              >
                一般社団法人 The Global Resilience Summit は進化します。<br />
                会員限定のAI防災プラットフォーム<strong className="text-white font-bold">「The Global Resilience Hub」</strong>、標準搭載開始。
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 h-16 rounded-none shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                  Summitに入会し、Hubを利用する
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-4 text-sm text-muted-foreground font-mono"
              >
                ※月額換算 50,000円〜
              </motion.p>
            </div>

            {/* Right: Product Visuals - Premium Static Style */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[65%] h-[80vh] hidden lg:block pointer-events-none">
              {/* PC Frame - Positioned to bleed off right edge */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[110%] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black z-10"
              >
                <div className="h-8 bg-[#0a0a0a] flex items-center px-4 gap-2 border-b border-white/5">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <img src="/images/app-screen-pc.png" alt="The Global Resilience Hub Dashboard" className="w-full h-auto opacity-90" />
                {/* Premium Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
              </motion.div>

              {/* Mobile Frame - Overlapping PC frame */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-[10%] left-[5%] w-[240px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-[8px] border-[#0a0a0a] bg-black z-20"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#0a0a0a] rounded-b-xl z-30" />
                <img src="/images/app-screen-mobile.png" alt="The Global Resilience Hub Mobile" className="w-full h-auto" />
                {/* Mobile Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 border-t border-white/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <SectionHeading 
                align="left"
                subtitle="THE PROBLEM"
                title={<>防災担当者のデスクは、<br />なぜ<span className="text-primary">「孤独」</span>なのか。</>}
              />
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  災害は待ってくれません。しかし、対策に必要な情報は世界中に散らばり、言語の壁に阻まれ、現場のノウハウは個人の頭の中に眠ったままです。
                </p>
                <div className="pl-6 border-l-2 border-primary/30 space-y-4">
                  <p className="text-xl font-bold text-white">「検索しても、正解が見つからない」</p>
                  <p className="text-xl font-bold text-white">「他社がどう動いているか、聞ける相手がいない」</p>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  その情報の孤立を、テクノロジーとコミュニティの力で解決します。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-dashed border-muted-foreground rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-2xl font-bold text-muted-foreground">?</span>
                  </div>
                  <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">Connection Lost</p>
                  <p className="text-white font-bold mt-2">Isolated Knowledge</p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-32 bg-white/[0.02]">
        <div className="container">
          <SectionHeading 
            subtitle="THE SOLUTION"
            title={<>あなたの組織に<br />「防災のOS」をインストールする。<br /><span className="text-primary text-3xl md:text-4xl block mt-4">The Global Resilience Hub 3つの機能</span></>}
          />

          <div className="grid md:grid-cols-3 gap-8">
            <TechCard delay={0}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <LayoutDashboard className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">AI Intelligence</h3>
              <p className="text-sm font-bold text-primary mb-4">情報の構造化</p>
              <h4 className="text-lg font-bold text-white mb-4">世界中のニュース・論文を、AIが「使える情報」に。</h4>
              <p className="text-muted-foreground leading-relaxed">
                国内外の膨大な防災データをAIが収集・分析。あなたの組織に必要な情報だけを、日本語で要約して毎朝お届けします。リサーチにかける時間は、もう必要ありません。
              </p>
            </TechCard>

            <TechCard delay={0.2}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <Users className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">Community & Thread</h3>
              <p className="text-sm font-bold text-primary mb-4">知の共有</p>
              <h4 className="text-lg font-bold text-white mb-4">教科書にはない「現場のリアル」がここにある。</h4>
              <p className="text-muted-foreground leading-relaxed">
                Summitに集うエキスパートや、世界の防災担当者と繋がるクローズドなコミュニティ。検索では出てこない「失敗談」や「運用ルール」を、スレッド形式でいつでも質問・相談できます。
              </p>
            </TechCard>

            <TechCard delay={0.4}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <ShoppingBag className="w-10 h-10 text-white mb-6" />
              <h3 className="text-2xl font-display font-bold text-white mb-2">Solution Marketplace</h3>
              <p className="text-sm font-bold text-primary mb-4">技術の実装</p>
              <h4 className="text-lg font-bold text-white mb-4">課題解決の技術と出会い、即座に導入する。</h4>
              <p className="text-muted-foreground leading-relaxed">
                防災テック企業の最新ソリューションが集結。事例を見るだけでなく、そのまま担当者と繋がり、商談や契約までスムーズに進められます。
              </p>
            </TechCard>
          </div>
        </div>
      </section>

      {/* Value / Offer Section */}
      <section id="value" className="py-32">
        <div className="container">
          <div className="max-w-5xl mx-auto bg-card border border-white/10 p-8 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-white to-primary" />
            
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                「Summit」への入会ひとつで、<br />すべてが手に入る。
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
              {/* Old Model */}
              <div className="p-8 border border-white/10 bg-white/5 opacity-60 flex flex-col">
                <h3 className="text-xl font-bold text-muted-foreground mb-6">これまでの協会</h3>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>定例会・カンファレンス参加（人脈・権威）</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-2xl font-display font-bold text-muted-foreground">年額 60万円</p>
                </div>
              </div>

              {/* New Model */}
              <div className="p-8 border-2 border-primary bg-card relative flex flex-col shadow-[0_0_50px_rgba(var(--primary),0.1)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 uppercase tracking-wider">
                  The New Standard
                </div>
                <h3 className="text-xl font-bold text-white mb-6">これからの協会</h3>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>定例会・カンファレンス参加（人脈・権威）</span>
                  </li>
                  <li className="flex items-center gap-3 text-white bg-primary/10 p-3 -mx-3 border border-primary/20">
                    <Zap className="w-5 h-5 text-primary fill-current" />
                    <span className="font-bold">The Global Resilience Hub フルアクセス（AI・実務）</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-baseline gap-4">
                    <p className="text-3xl font-display font-bold text-white">据え置き 年額 60万円</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                月額換算、わずか5万円。<br />
                アルバイト1人分のコストで、<br />
                世界中の防災知見とAI、そして国内最高クラスのネットワークをあなたのチームに。
              </p>
              <p className="text-lg text-muted-foreground mb-10">
                これは「会費」ではありません。組織の生存能力を高めるための、最も確実な「投資」です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-white/5 bg-white/[0.02]">
        <div className="container text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-12">
            備えるレベルを、世界基準へ。
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-12 h-20 rounded-none shadow-[0_0_30px_rgba(var(--primary),0.3)]">
              The Global Resilience Summit 入会案内<br />
              <span className="text-sm font-normal opacity-80">（Hub機能詳細）</span>
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-bold text-lg px-12 h-20 rounded-none">
              Hubのデモ画面を見る
            </Button>
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
