import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Shield, Globe2, Zap, LayoutDashboard, MessageSquare, ShoppingBag, ArrowUpRight, PlayCircle, CheckCircle2, FileText, Users } from "lucide-react";
import { useRef, MouseEvent } from "react";

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`bento-card relative group ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.05),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/5 h-16 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center shadow-lg shadow-primary/20">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-wide text-white">The Global Resilience Summit</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-white transition-colors">課題</a>
            <a href="#solution" className="hover:text-white transition-colors">解決策</a>
            <a href="#value" className="hover:text-white transition-colors">価値</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:flex text-muted-foreground hover:text-white hover:bg-white/5 text-sm">
              会員ログイン
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white font-bold px-6 shadow-lg shadow-primary/20">
              入会案内
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                会員限定プラットフォーム 標準搭載開始
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
                国内最高峰の「知」に、<br />
                世界最先端の「武器」を。
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                一般社団法人 The Global Resilience Summit は進化します。<br />
                AI防災プラットフォーム<strong className="text-white font-semibold">「The Global Resilience Hub」</strong>により、<br className="hidden md:block" />
                組織の危機管理能力を劇的に向上させます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 h-14 w-full sm:w-auto shadow-xl shadow-primary/20 transition-transform hover:scale-105">
                  Summitに入会する
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium text-lg px-8 h-14 w-full sm:w-auto">
                  <FileText className="mr-2 w-5 h-5" />
                  資料を請求する
                </Button>
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                月額換算 50,000円〜 / 法人契約対応
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Background Graphic - Subtle & Professional */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Problem Section - Bento Grid Layout */}
      <section id="problem" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              防災担当者のデスクは、<br />なぜ<span className="text-primary">「孤独」</span>なのか。
            </h2>
            <p className="text-muted-foreground">
              災害は待ってくれません。しかし、現場の課題は山積みです。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <SpotlightCard className="p-8 flex items-start gap-4">
              <div className="mt-1 bg-red-500/10 p-2 rounded-lg">
                <span className="text-red-400 text-xl font-bold">!</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">検索しても、正解が見つからない</h3>
                <p className="text-muted-foreground leading-relaxed">
                  信頼できる情報源へのアクセスが限定的で、ネット上の情報は玉石混交。判断に迷う時間が命取りになります。
                </p>
              </div>
            </SpotlightCard>
            <SpotlightCard className="p-8 flex items-start gap-4">
              <div className="mt-1 bg-red-500/10 p-2 rounded-lg">
                <span className="text-red-400 text-xl font-bold">!</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">他社がどう動いているか分からない</h3>
                <p className="text-muted-foreground leading-relaxed">
                  横の繋がりが希薄で、孤立無援な状態。自社の対策が十分なのか、客観的に評価する術がありません。
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Solution Section - Bento Grid Layout */}
      <section id="solution" className="py-24 px-4 bg-white/5 border-y border-white/5">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">Solution</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              あなたの組織に<br />「防災のOS」をインストールする。
            </h2>
            <p className="text-lg text-muted-foreground">
              The Global Resilience Hub が提供する3つのコア機能
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Feature 1: AI Intelligence (Large) */}
            <SpotlightCard className="md:col-span-2 md:row-span-2 p-8 md:p-10 flex flex-col justify-between bg-gradient-to-br from-card to-background">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                  <LayoutDashboard className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">AI Intelligence</h3>
                <h4 className="text-lg font-bold text-blue-400 mb-4">情報の構造化</h4>
                <p className="text-muted-foreground leading-relaxed max-w-lg">
                  国内外の膨大な防災データをAIが収集・分析。あなたの組織に必要な情報だけを、日本語で要約して毎朝お届けします。リサーチにかける時間は、もう必要ありません。
                </p>
              </div>
              <div className="mt-8 relative h-64 rounded-xl bg-background border border-white/10 overflow-hidden shadow-2xl">
                {/* Abstract UI Mockup - Dashboard */}
                <div className="absolute inset-0 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-4 w-32 bg-white/10 rounded" />
                    <div className="h-8 w-8 rounded-full bg-white/10" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="h-24 bg-blue-500/10 rounded-lg border border-blue-500/20" />
                    <div className="h-24 bg-white/5 rounded-lg border border-white/10" />
                    <div className="h-24 bg-white/5 rounded-lg border border-white/10" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 w-full bg-white/5 rounded" />
                    <div className="h-4 w-5/6 bg-white/5 rounded" />
                    <div className="h-4 w-4/6 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Feature 2: Community */}
            <SpotlightCard className="p-8 flex flex-col justify-between bg-card">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Community & Thread</h3>
                <p className="text-sm font-bold text-green-400 mb-4">知の共有</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  教科書にはない「現場のリアル」がここにある。検索では出てこない「失敗談」や「運用ルール」を、スレッド形式でいつでも質問・相談できます。
                </p>
              </div>
            </SpotlightCard>

            {/* Feature 3: Marketplace */}
            <SpotlightCard className="p-8 flex flex-col justify-between bg-card">
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center mb-6">
                  <ShoppingBag className="w-6 h-6 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Solution Marketplace</h3>
                <p className="text-sm font-bold text-orange-400 mb-4">技術の実装</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  課題解決の技術と出会い、即座に導入する。防災テック企業の最新ソリューションが集結し、商談や契約までスムーズに進められます。
                </p>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </section>

      {/* Value Section - Clear Comparison */}
      <section id="value" className="py-24 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                「Summit」への入会ひとつで、<br />すべてが手に入る。
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                これは「会費」ではありません。組織の生存能力を高めるための、最も確実な「投資」です。
              </p>
              
              <div className="space-y-6">
                {/* Old Model */}
                <div className="p-6 rounded-xl bg-white/5 border border-white/5 opacity-60">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-muted-foreground">これまでの協会</h4>
                    <span className="font-mono text-muted-foreground">年額 60万円</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4" /> 定例会・カンファレンス参加
                    </li>
                  </ul>
                </div>

                {/* New Model */}
                <div className="relative p-8 rounded-xl bg-card border-2 border-primary shadow-2xl shadow-primary/10">
                  <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Recommended
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="font-bold text-white text-xl">これからの協会</h4>
                    <div className="text-right">
                      <span className="block font-display font-bold text-2xl text-white">年額 60万円</span>
                      <span className="text-xs text-primary font-bold">価格据え置き</span>
                    </div>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-white">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="font-medium">定例会・カンファレンス参加</span>
                    </li>
                    <li className="flex items-center gap-3 text-white bg-primary/10 p-3 rounded-lg border border-primary/20">
                      <Zap className="w-5 h-5 text-primary fill-current" />
                      <span className="font-bold">The Global Resilience Hub フルアクセス</span>
                    </li>
                    <li className="flex items-center gap-3 text-white">
                      <Globe2 className="w-5 h-5 text-primary" />
                      <span className="font-medium">グローバルネットワーク参加</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left bg-card/50 p-10 rounded-2xl border border-white/10 backdrop-blur-sm">
              <p className="text-sm font-bold text-muted-foreground mb-2 uppercase tracking-widest">Cost Performance</p>
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                <span className="text-5xl md:text-7xl font-display font-bold text-white">¥50,000</span>
                <span className="text-xl text-muted-foreground">/ 月</span>
              </div>
              <p className="text-lg text-white mb-8 leading-relaxed">
                アルバイト1人分のコストで、<br />
                世界中の防災知見とAI、<br />
                そして国内最高クラスのネットワークを。
              </p>
              <Button className="w-full bg-white text-background hover:bg-white/90 font-bold h-14 text-lg shadow-lg">
                今すぐ入会を申し込む
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Trust & Action */}
      <section className="py-24 text-center bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8">
            備えるレベルを、世界基準へ。
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            まずは資料で、詳細な機能と導入事例をご確認ください。<br />
            デモ画面のご案内も可能です。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-10 h-14 text-lg shadow-xl shadow-primary/20">
              入会案内・資料請求
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium px-10 h-14 text-lg">
              Hubのデモを見る
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/5 text-xs text-muted-foreground">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <span>© 2026 The Global Resilience Summit. All Rights Reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white">プライバシーポリシー</a>
                <a href="#" className="hover:text-white">特定商取引法に基づく表記</a>
                <a href="#" className="hover:text-white">お問い合わせ</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
