import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowRight, Shield, Globe2, Zap, LayoutDashboard, MessageSquare, ShoppingBag, ArrowUpRight, PlayCircle } from "lucide-react";
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
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
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

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans bg-noise selection:bg-primary/30">
      {/* Aurora Background */}
      <div className="fixed inset-0 aurora-gradient -z-10" />

      {/* Navigation */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-black/20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Shield className="w-3 h-3 text-background fill-current" />
            </div>
            <span className="font-display font-bold text-sm tracking-wide text-white">GRS</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-xs font-medium text-white/70">
            <a href="#problem" className="hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="hover:text-white transition-colors">Solution</a>
            <a href="#value" className="hover:text-white transition-colors">Value</a>
          </div>
          <Button size="sm" className="rounded-full bg-white text-black hover:bg-white/90 text-xs font-bold px-4 h-8">
            Join Now
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-20 px-4">
        <motion.div style={{ y, opacity }} className="text-center max-w-5xl mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-mono text-primary tracking-wider uppercase">The Global Resilience Hub v2.0</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-8 leading-[0.9] tracking-tighter"
          >
            INTELLIGENCE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">REDEFINED.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            国内最高峰の「知」に、世界最先端の「武器」を。<br />
            組織の危機管理能力をOSレベルでアップデートする。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="rounded-full bg-primary text-background hover:bg-primary/90 font-bold text-lg px-8 h-14 w-full sm:w-auto transition-transform hover:scale-105">
              Start Membership
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-white/10 bg-white/5 text-white hover:bg-white/10 font-medium text-lg px-8 h-14 w-full sm:w-auto backdrop-blur-md">
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Visual - Abstract 3D Representation */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-gradient-to-b from-primary/10 to-purple-500/10 rounded-full blur-[100px] opacity-50 animate-pulse duration-[10s]" />
        </div>
      </section>

      {/* Bento Grid Section - Problem & Solution */}
      <section id="solution" className="py-32 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(300px,auto)]">
            
            {/* Card 1: Main Value Prop (Large) */}
            <SpotlightCard className="md:col-span-2 md:row-span-2 p-8 md:p-12 flex flex-col justify-between bg-gradient-to-br from-white/10 to-white/5">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                  <LayoutDashboard className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">AI Intelligence</h3>
                <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
                  世界中のニュース・論文を、AIが「使える情報」に構造化。
                  あなたの組織に必要な情報だけを、日本語で要約して毎朝お届けします。
                </p>
              </div>
              <div className="mt-8 relative h-48 rounded-xl bg-black/20 border border-white/5 overflow-hidden">
                {/* Abstract UI Mockup */}
                <div className="absolute top-4 left-4 right-4 bottom-0 bg-background rounded-t-xl border-t border-l border-r border-white/10 p-4">
                  <div className="flex gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                    <div className="h-20 w-full bg-primary/5 rounded border border-primary/10 mt-4" />
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Card 2: Community */}
            <SpotlightCard className="p-8 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  教科書にはない「現場のリアル」を共有。検索では出てこない失敗談や運用ルールを相談できます。
                </p>
              </div>
            </SpotlightCard>

            {/* Card 3: Marketplace */}
            <SpotlightCard className="p-8 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center mb-4">
                <ShoppingBag className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Marketplace</h3>
                <p className="text-sm text-muted-foreground">
                  課題解決の技術と出会い、即座に導入。商談や契約までスムーズに進められます。
                </p>
              </div>
            </SpotlightCard>

            {/* Card 4: Problem Statement (Darker) */}
            <SpotlightCard className="md:col-span-3 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 bg-black/40">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                  なぜ、防災担当者のデスクは「孤独」なのか。
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  災害は待ってくれません。しかし、情報は散らばり、言語の壁に阻まれ、ノウハウは個人の頭の中に眠ったまま。
                  その「情報の孤立」を、テクノロジーとコミュニティの力で解決します。
                </p>
              </div>
              <div className="flex gap-4">
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="block text-2xl font-bold text-white mb-1">01</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Search Limit</span>
                </div>
                <div className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <span className="block text-2xl font-bold text-white mb-1">02</span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">No Network</span>
                </div>
              </div>
            </SpotlightCard>

          </div>
        </div>
      </section>

      {/* Value Section - Minimalist Comparison */}
      <section id="value" className="py-32 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              All-in-One Access.
            </h2>
            <p className="text-xl text-muted-foreground">
              「Summit」への入会ひとつで、すべてが手に入る。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Old Model */}
            <div className="p-8 rounded-3xl border border-white/5 bg-white/5 opacity-50 grayscale transition-all hover:opacity-70 hover:grayscale-0">
              <div className="flex justify-between items-start mb-8">
                <h4 className="font-bold text-white text-xl">Legacy</h4>
                <span className="font-mono text-muted-foreground">¥600,000 / year</span>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                  定例会・カンファレンス参加
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent border border-white/30" />
                  AIプラットフォーム利用
                </li>
                <li className="flex items-center gap-3 opacity-50">
                  <div className="w-1.5 h-1.5 rounded-full bg-transparent border border-white/30" />
                  グローバルネットワーク
                </li>
              </ul>
            </div>

            {/* New Model */}
            <SpotlightCard className="p-8 md:p-10 border-primary/50 bg-primary/5 ring-1 ring-primary/20">
              <div className="absolute top-0 right-0 p-4">
                <span className="px-3 py-1 rounded-full bg-primary text-background text-xs font-bold uppercase tracking-wider">
                  New Standard
                </span>
              </div>
              <div className="flex justify-between items-start mb-8">
                <h4 className="font-bold text-white text-2xl">Summit + Hub</h4>
                <div className="text-right">
                  <span className="block font-display font-bold text-3xl text-white">¥600,000</span>
                  <span className="text-xs text-primary font-mono">per year</span>
                </div>
              </div>
              <ul className="space-y-4 text-white">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                  定例会・カンファレンス参加
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                  <span className="font-bold">The Global Resilience Hub フルアクセス</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                  グローバルネットワーク
                </li>
              </ul>
              <div className="mt-10 pt-8 border-t border-white/10">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-display font-bold text-white">¥50,000</span>
                  <span className="text-muted-foreground mb-2">/ month (approx.)</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  アルバイト1人分のコストで、世界基準の防災チームを。
                </p>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CTA Section - Big & Bold */}
      <section className="py-40 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-5xl md:text-8xl font-display font-bold text-white mb-12 tracking-tighter">
            READY TO<br />EVOLVE?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 font-bold text-xl px-12 h-20 w-full sm:w-auto transition-all hover:scale-105 shadow-2xl shadow-white/20">
              Join Membership
              <ArrowUpRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
          
          <div className="mt-20 flex justify-center gap-8 text-xs font-mono text-muted-foreground uppercase tracking-widest">
            <span>© 2026 GRS</span>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </section>
    </div>
  );
}
