import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle2, Globe2, Users2, Zap, LayoutDashboard, MessageSquare, ShoppingBag } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/10 h-16 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-display font-bold text-lg tracking-wide text-white">THE GLOBAL RESILIENCE SUMMIT</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#problem" className="hover:text-white transition-colors">課題</a>
            <a href="#solution" className="hover:text-white transition-colors">解決策</a>
            <a href="#value" className="hover:text-white transition-colors">価値</a>
          </div>
          <Button variant="outline" className="hidden md:flex border-white/20 text-white hover:bg-white/10 text-xs font-medium">
            会員ログイン
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                会員限定プラットフォーム 標準搭載開始
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight tracking-tight">
                国内最高峰の「知」に、<br />
                世界最先端の「武器」を。
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                一般社団法人 The Global Resilience Summit は進化します。<br />
                AI防災プラットフォーム<strong className="text-white font-semibold">「The Global Resilience Hub」</strong>により、<br className="hidden md:block" />
                組織の危機管理能力を劇的に向上させます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium text-lg px-8 h-14 w-full sm:w-auto shadow-lg shadow-primary/20">
                  Summitに入会する
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 font-medium text-lg px-8 h-14 w-full sm:w-auto">
                  資料を請求する
                </Button>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                月額換算 50,000円〜 / 法人契約対応
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Abstract Background Graphic - Clean & Structured */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Problem Section - Clear & Empathic */}
      <section id="problem" className="py-20 bg-card/50 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                防災担当者のデスクは、<br />なぜ<span className="text-primary">「孤独」</span>なのか。
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                災害は待ってくれません。しかし、対策に必要な情報は世界中に散らばり、言語の壁に阻まれ、現場のノウハウは個人の頭の中に眠ったままです。
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="mt-1 bg-red-500/20 p-1 rounded">
                    <span className="text-red-400 text-lg font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">「検索しても、正解が見つからない」</p>
                    <p className="text-sm text-muted-foreground mt-1">信頼できる情報源へのアクセスが限定的</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/5">
                  <div className="mt-1 bg-red-500/20 p-1 rounded">
                    <span className="text-red-400 text-lg font-bold">!</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">「他社がどう動いているか、聞ける相手がいない」</p>
                    <p className="text-sm text-muted-foreground mt-1">横の繋がりが希薄で、孤立無援な状態</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] bg-gradient-to-br from-white/5 to-transparent rounded-xl border border-white/10 p-8 flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Users2 className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">情報の孤立を解消する</h3>
              <p className="text-muted-foreground max-w-xs">
                テクノロジーとコミュニティの力で、<br />
                あなたの組織を「孤独」から救います。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section - Structured & Functional */}
      <section id="solution" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-2 block">Solution</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              あなたの組織に<br />「防災のOS」をインストールする。
            </h2>
            <p className="text-lg text-muted-foreground">
              The Global Resilience Hub が提供する3つのコア機能
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="bg-card border-white/10 hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <LayoutDashboard className="w-6 h-6 text-blue-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">AI Intelligence</CardTitle>
                <p className="text-sm font-medium text-blue-400 uppercase tracking-wide mt-1">情報の構造化</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-bold text-white mb-2">世界中のニュース・論文を、AIが「使える情報」に。</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  国内外の膨大な防災データをAIが収集・分析。あなたの組織に必要な情報だけを、日本語で要約して毎朝お届けします。リサーチにかける時間は、もう必要ありません。
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="bg-card border-white/10 hover:border-green-500/50 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Community & Thread</CardTitle>
                <p className="text-sm font-medium text-green-400 uppercase tracking-wide mt-1">知の共有</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-bold text-white mb-2">教科書にはない「現場のリアル」がここにある。</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Summitに集うエキスパートや、世界の防災担当者と繋がるクローズドなコミュニティ。検索では出てこない「失敗談」や「運用ルール」を、スレッド形式でいつでも質問・相談できます。
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="bg-card border-white/10 hover:border-orange-500/50 transition-colors duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-xl font-bold text-white">Solution Marketplace</CardTitle>
                <p className="text-sm font-medium text-orange-400 uppercase tracking-wide mt-1">技術の実装</p>
              </CardHeader>
              <CardContent>
                <h4 className="font-bold text-white mb-2">課題解決の技術と出会い、即座に導入する。</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  防災テック企業の最新ソリューションが集結。事例を見るだけでなく、そのまま担当者と繋がり、商談や契約までスムーズに進められます。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Section - Comparative & Logical */}
      <section id="value" className="py-24 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                「Summit」への入会ひとつで、<br />すべてが手に入る。
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                これは「会費」ではありません。組織の生存能力を高めるための、最も確実な「投資」です。
              </p>
              
              <div className="space-y-4">
                {/* Old Model */}
                <div className="p-6 rounded-xl bg-background/50 border border-white/5 opacity-70">
                  <div className="flex justify-between items-start mb-2">
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
                <div className="relative p-6 rounded-xl bg-card border-2 border-primary shadow-xl">
                  <div className="absolute -top-3 left-6 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Recommended
                  </div>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-white text-xl">これからの協会</h4>
                    <div className="text-right">
                      <span className="block font-display font-bold text-2xl text-white">年額 60万円</span>
                      <span className="text-xs text-primary font-medium">価格据え置き</span>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-white">
                      <CheckCircle2 className="w-4 h-4 text-primary" /> 定例会・カンファレンス参加
                    </li>
                    <li className="flex items-center gap-2 text-sm text-white font-bold bg-white/5 p-2 rounded">
                      <Zap className="w-4 h-4 text-primary" /> The Global Resilience Hub フルアクセス
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left bg-card/30 p-10 rounded-2xl border border-white/10">
              <p className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-widest">Cost Performance</p>
              <div className="flex items-baseline justify-center lg:justify-start gap-2 mb-4">
                <span className="text-5xl md:text-7xl font-display font-bold text-white">¥50,000</span>
                <span className="text-xl text-muted-foreground">/ 月</span>
              </div>
              <p className="text-lg text-white mb-6">
                アルバイト1人分のコストで、<br />
                世界中の防災知見とAI、<br />
                そして国内最高クラスのネットワークを。
              </p>
              <Button className="w-full bg-white text-background hover:bg-white/90 font-bold h-12">
                今すぐ入会を申し込む
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Simple & Direct */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
            備えるレベルを、世界基準へ。
          </h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            まずは資料で、詳細な機能と導入事例をご確認ください。<br />
            デモ画面のご案内も可能です。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium px-10 h-14 text-lg shadow-lg shadow-primary/20">
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
