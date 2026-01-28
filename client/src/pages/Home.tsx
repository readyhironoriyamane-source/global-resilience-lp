import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap, ChevronDown, Lock, Activity, Users, Database } from "lucide-react";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/50 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary/20 rounded-sm flex items-center justify-center border border-primary/50">
            <Shield className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-white">THE GLOBAL RESILIENCE SUMMIT</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
          <a href="#problem" className="hover:text-primary transition-colors">PROBLEM</a>
          <a href="#solution" className="hover:text-primary transition-colors">SOLUTION</a>
          <a href="#value" className="hover:text-primary transition-colors">VALUE</a>
        </div>
        <Button variant="outline" className="hidden md:flex border-primary/50 text-primary hover:bg-primary/10 hover:text-primary font-mono text-xs tracking-widest uppercase">
          Member Login
        </Button>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
        </div>

        {/* Content */}
        <motion.div 
          style={{ opacity, scale, y }}
          className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono tracking-[0.2em] uppercase mb-4 backdrop-blur-sm">
              System Online • v2.0.4
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-6 leading-[0.9]"
          >
            INTELLIGENCE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">FROM THE ABYSS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            国内最高峰の「知」に、世界最先端の「武器」を。<br />
            会員限定AI防災プラットフォーム<strong className="text-white font-medium">「The Global Resilience Hub」</strong>、標準搭載開始。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wide text-lg px-8 py-6 h-auto rounded-none border border-primary/50 shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]">
              JOIN THE SUMMIT
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <span className="text-xs font-mono text-muted-foreground">
              月額換算 50,000円〜
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Scroll to Initialize</span>
          <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 relative border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-3xl opacity-20" />
                <div className="relative bg-card/50 border border-white/10 p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6 border-b border-white/5 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="font-mono text-xs text-muted-foreground">ERROR: CONNECTION_LOST</span>
                  </div>
                  <div className="space-y-4 font-mono text-sm text-muted-foreground">
                    <p className="typing-effect">Searching for "disaster protocol v4"... <span className="text-red-400">Not Found</span></p>
                    <p>Connecting to peer network... <span className="text-red-400">Timeout</span></p>
                    <p>Analyzing global risk data... <span className="text-red-400">Access Denied</span></p>
                    <p className="text-white mt-8 border-l-2 border-primary pl-4">
                      "Why is this information nowhere to be found?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                防災担当者のデスクは、<br />なぜ<span className="text-primary">「孤独」</span>なのか。
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                災害は待ってくれません。しかし、対策に必要な情報は世界中に散らばり、言語の壁に阻まれ、現場のノウハウは個人の頭の中に眠ったままです。
              </p>
              <blockquote className="border-l-2 border-white/20 pl-6 italic text-xl text-white/80 mb-8">
                「検索しても、正解が見つからない」<br />
                「他社がどう動いているか、聞ける相手がいない」
              </blockquote>
              <p className="text-muted-foreground">
                その情報の孤立を、テクノロジーとコミュニティの力で解決します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-32 relative bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-mono text-xs tracking-widest uppercase mb-4 block">System Upgrade</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              あなたの組織に<br />「防災のOS」をインストールする。
            </h2>
            <p className="text-xl text-muted-foreground">
              The Global Resilience Hub 3つの機能
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-card/30 border-white/10 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                  <img src="/images/icon-ai.png" alt="AI Intelligence" className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">AI Intelligence</h3>
                <p className="text-sm font-mono text-primary/80 mb-4 uppercase tracking-wider">情報の構造化</p>
                <p className="text-muted-foreground leading-relaxed">
                  国内外の膨大な防災データをAIが収集・分析。あなたの組織に必要な情報だけを、日本語で要約して毎朝お届けします。リサーチにかける時間は、もう必要ありません。
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card/30 border-white/10 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-green-500/50 transition-colors">
                  <img src="/images/icon-community.png" alt="Community" className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-green-400 transition-colors">Community & Thread</h3>
                <p className="text-sm font-mono text-green-400/80 mb-4 uppercase tracking-wider">知の共有</p>
                <p className="text-muted-foreground leading-relaxed">
                  Summitに集うエキスパートや、世界の防災担当者と繋がるクローズドなコミュニティ。検索では出てこない「失敗談」や「運用ルール」を、スレッド形式でいつでも質問・相談できます。
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card/30 border-white/10 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 mb-8 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
                  <img src="/images/icon-marketplace.png" alt="Marketplace" className="w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-orange-400 transition-colors">Solution Marketplace</h3>
                <p className="text-sm font-mono text-orange-400/80 mb-4 uppercase tracking-wider">技術の実装</p>
                <p className="text-muted-foreground leading-relaxed">
                  防災テック企業の最新ソリューションが集結。事例を見るだけでなく、そのまま担当者と繋がり、商談や契約までスムーズに進められます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section id="value" className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                「Summit」への入会ひとつで、<br />すべてが手に入る。
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                これは「会費」ではありません。組織の生存能力を高めるための、最も確実な「投資」です。
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="mt-1">
                    <Activity className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-bold text-muted-foreground mb-1">これまでの協会</h4>
                    <p className="text-sm text-muted-foreground">定例会・カンファレンス参加（人脈・権威）</p>
                    <p className="text-sm font-mono mt-2">Price: 年額 60万円</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-30" />
                  <div className="relative flex items-start gap-4 p-6 rounded-lg bg-card border border-primary/50 shadow-2xl">
                    <div className="mt-1">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white text-xl mb-2">これからの協会</h4>
                      <p className="text-sm text-white/80 mb-4">定例会・カンファレンス参加（人脈・権威）</p>
                      <div className="flex items-center gap-2 mb-4 text-primary font-bold">
                        <span className="bg-primary/20 px-2 py-1 rounded text-xs uppercase tracking-wider">PLUS</span>
                        <span>The Global Resilience Hub フルアクセス（AI・実務）</span>
                      </div>
                      <div className="flex items-end justify-between border-t border-white/10 pt-4">
                        <p className="text-sm font-mono text-muted-foreground">Price: 据え置き</p>
                        <p className="text-2xl font-display font-bold text-white">年額 60万円</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
              <div className="text-center relative z-10">
                <p className="text-sm font-mono text-muted-foreground mb-2 uppercase tracking-widest">Monthly Cost</p>
                <h3 className="text-7xl md:text-9xl font-display font-bold text-white mb-4 tracking-tighter">
                  ¥50,000
                </h3>
                <p className="text-xl text-primary font-light">
                  アルバイト1人分のコストで、<br />世界基準の防災チームを。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute inset-0 bg-[url('/images/hero-background.png')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-12 tracking-tight">
            備えるレベルを、<br />世界基準へ。
          </h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display tracking-wide text-xl px-12 py-8 h-auto rounded-none border border-primary/50 shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all hover:shadow-[0_0_60px_rgba(0,240,255,0.6)] hover:-translate-y-1">
              SUMMIT 入会案内
              <span className="block text-xs font-sans font-normal opacity-70 mt-1 ml-2 text-left">Hub機能詳細を含む</span>
            </Button>
            
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-display tracking-wide text-xl px-12 py-8 h-auto rounded-none transition-all hover:border-white/50">
              Hub デモ画面を見る
            </Button>
          </div>
          
          <p className="mt-12 text-xs font-mono text-muted-foreground opacity-50">
            © 2026 The Global Resilience Summit. All Systems Operational.
          </p>
        </div>
      </section>
    </div>
  );
}
