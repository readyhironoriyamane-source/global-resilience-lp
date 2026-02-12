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
        
        <div className="container relative z-10 h-full flex items-center">
          <div className="w-full max-w-4xl relative z-20">
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
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-8 leading-tight tracking-tight"
              >
                <span className="inline-block">防災担当者の「困った」を、</span><br />
                <span className="inline-block">AIとコミュニティで解決する。</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
              >
                月5万円。アルバイト1人分のコストで、<br />
                全国の知識・専門家・最新情報が手に入る。
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-10 h-16 rounded-none shadow-[0_0_30px_rgba(var(--primary),0.3)]">
                  まず無料デモを見る（3分でわかります）
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

          </div>

        {/* Background Visuals - Absolute Positioned behind text */}
        <div className="absolute top-0 right-0 w-[65%] h-full hidden lg:block z-0 pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            {/* PC Frame - Positioned to bleed off right edge */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 -translate-y-1/2 left-[10%] w-[140%] rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black"
            >
              <div className="h-8 bg-[#0a0a0a] flex items-center px-4 gap-2 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/92549119/tfxfKpNoSNKWqGCm.png" alt="The Global Resilience Hub Dashboard" className="w-full h-auto opacity-60" />
              {/* Premium Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 pointer-events-none" />
              {/* Fade out to left to blend with text area - Enhanced for readability */}
              <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent pointer-events-none" />
            </motion.div>

            {/* Mobile Frame */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[10%] left-0 w-[220px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border-[8px] border-[#0a0a0a] bg-black"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#0a0a0a] rounded-b-xl z-30" />
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/92549119/CJsWzHwtaALyIkbP.png" alt="The Global Resilience Hub Mobile" className="w-full h-auto opacity-80" />
              {/* Mobile Reflection */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
            </motion.div>
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
                title={<>こんな悩み、<br />ありませんか？</>}
              />
              <div className="space-y-8">
                <div className="pl-6 border-l-2 border-primary/30 space-y-4">
                  <p className="text-xl font-bold text-white">・最新の防災情報、どこで調べればいいかわからない</p>
                  <p className="text-xl font-bold text-white">・他の会社がどう対策しているか、聞ける相手がいない</p>
                  <p className="text-xl font-bold text-white">・専門家に相談したいが、誰に頼めばいいかわからない</p>
                </div>
                <p className="text-2xl font-bold text-primary leading-relaxed mt-8">
                  この3つ、全部解決します。
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
            title={<>THE GLOBAL RESILIENCE HUB 3つの機能<br /><span className="text-muted-foreground text-xl md:text-2xl block mt-4 font-normal">防災情報・自社診断・Q&Aが、1か所に集まった。</span></>}
          />

          <div className="grid md:grid-cols-3 gap-8">
            <TechCard delay={0}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <div className="mb-6 relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                <p className="absolute top-2 left-2 z-10 text-xs font-bold text-primary bg-black/80 px-2 py-1 rounded tracking-widest">NEWS</p>
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/92549119/JxSqUpegHvHckfTo.png" alt="NEWS" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">今日の防災情報が、自動で届く</h3>
              <p className="text-muted-foreground leading-relaxed">
                国内外の防災ニュースをAIが毎日まとめる<br />
                自分で調べる時間がゼロになる
              </p>
            </TechCard>

            <TechCard delay={0.2}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <div className="mb-6 relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                <p className="absolute top-2 left-2 z-10 text-xs font-bold text-primary bg-black/80 px-2 py-1 rounded tracking-widest">DASHBOARD</p>
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/92549119/vVUCMWyZqmSXKkys.png" alt="DASHBOARD" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">自社の防災レベルが、点数でわかる</h3>
              <p className="text-muted-foreground leading-relaxed">
                診断結果で「うちはどこが弱いか」が一目瞭然<br />
                上司への報告資料に、そのまま使える
              </p>
            </TechCard>

            <TechCard delay={0.4}>
              <div className="h-1 bg-primary w-12 mb-8" />
              <div className="mb-6 relative w-full aspect-video rounded-lg overflow-hidden border border-white/10">
                <p className="absolute top-2 left-2 z-10 text-xs font-bold text-primary bg-black/80 px-2 py-1 rounded tracking-widest">COMMUNITY</p>
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/92549119/KuKGDLWLscrlXBrk.png" alt="COMMUNITY" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-4">防災の『困った』を、全国の担当者に聞ける</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yahoo知恵袋のように質問を投稿できる<br />
                同じ悩みを持つ担当者からすぐ回答が来る
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
                専門家1人を雇うより安く、<br />100人分の知識が手に入る。
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch mb-12">
              {/* Old Model */}
              <div className="p-8 border border-white/10 bg-white/5 opacity-60 flex flex-col">
                <h3 className="text-xl font-bold text-muted-foreground mb-6">専門家・コンサル費用</h3>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>スポット相談・顧問契約</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-white/10">
                  <p className="text-2xl font-display font-bold text-muted-foreground">年間 60万円以上</p>
                </div>
              </div>

              {/* New Model */}
              <div className="p-8 border-2 border-primary bg-card relative flex flex-col shadow-[0_0_50px_rgba(var(--primary),0.1)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 uppercase tracking-wider">
                  The New Standard
                </div>
                <h3 className="text-xl font-bold text-white mb-6">The Global Resilience Hub</h3>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>定例会・カンファレンス参加</span>
                  </li>
                  <li className="flex items-center gap-3 text-white bg-primary/10 p-3 -mx-3 border border-primary/20">
                    <Zap className="w-5 h-5 text-primary fill-current" />
                    <span className="font-bold">Hub フルアクセス（AI・コミュニティ）</span>
                  </li>
                </ul>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-baseline gap-4">
                    <p className="text-3xl font-display font-bold text-white">月額 5万円<span className="text-lg font-normal text-muted-foreground ml-2">（年間 60万円）</span></p>
                  </div>
                </div>
              </div>
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
              まず無料デモを見る（3分でわかります）
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
