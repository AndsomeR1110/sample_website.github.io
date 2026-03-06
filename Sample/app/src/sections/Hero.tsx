import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToPoems = () => {
    const poemsSection = document.getElementById('poems-section');
    if (poemsSection) {
      poemsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 水墨山水背景 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="水墨山水"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8]/30 via-transparent to-[#F5F0E8]" />
      </div>

      {/* 水墨装饰元素 */}
      <div className="absolute top-20 left-10 w-64 h-64 ink-splash opacity-40 animate-pulse-glow" />
      <div className="absolute bottom-40 right-20 w-48 h-48 ink-splash opacity-30 animate-pulse-glow" style={{ animationDelay: '1s' }} />

      {/* 主内容 */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* 装饰线 */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-ink-fade-in">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#1A1A1A]/40 to-transparent" />
          <span className="text-[#8C8C8C] text-sm tracking-[0.3em] uppercase">Spring Festival</span>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#1A1A1A]/40 to-transparent" />
        </div>

        {/* 主标题 */}
        <h1 className="calligraphy text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#1A1A1A] mb-6 animate-ink-spread ink-text">
          墨韵新春
        </h1>

        {/* 副标题 */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#8C8C8C] tracking-[0.2em] mb-4 animate-ink-fade-in" style={{ animationDelay: '0.3s' }}>
          千年诗韵 · 一纸春风
        </p>

        {/* 描述文字 */}
        <p className="text-base sm:text-lg text-[#8C8C8C]/80 max-w-2xl mx-auto leading-relaxed mb-12 animate-ink-fade-in" style={{ animationDelay: '0.5s' }}>
          撷取唐宋元明清历代名家之佳作，<br className="hidden sm:block" />
          以水墨之意境，呈新春之诗意。
        </p>

        {/* 装饰印章 */}
        <div className="flex justify-center mb-16 animate-ink-fade-in" style={{ animationDelay: '0.7s' }}>
          <div className="w-16 h-16 border-2 border-[#C41E3A]/60 rounded-sm flex items-center justify-center transform rotate-3">
            <span className="text-[#C41E3A] text-xs font-bold tracking-widest">春节<br/>诗词</span>
          </div>
        </div>

        {/* 滚动指示器 */}
        <button
          onClick={scrollToPoems}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[#8C8C8C] hover:text-[#1A1A1A] transition-colors cursor-pointer group"
        >
          <span className="text-sm tracking-widest">开启诗卷</span>
          <ChevronDown className="w-6 h-6 animate-scroll-indicator group-hover:text-[#C41E3A] transition-colors" />
        </button>
      </div>

      {/* 角落装饰 */}
      <div className="absolute top-8 left-8 w-24 h-24 border-l border-t border-[#1A1A1A]/10" />
      <div className="absolute bottom-8 right-8 w-24 h-24 border-r border-b border-[#1A1A1A]/10" />
    </section>
  );
}
