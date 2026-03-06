import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] ink-splash opacity-10" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 装饰分隔线 */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1A1A1A]/20 to-transparent" />
          <div className="w-3 h-3 rotate-45 border border-[#C41E3A]/40" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#1A1A1A]/20 to-transparent" />
        </div>

        {/* 主要内容 */}
        <div className="text-center space-y-8">
          {/* 品牌 */}
          <div>
            <h3 className="calligraphy text-3xl text-[#1A1A1A] mb-2">墨韵新春</h3>
            <p className="text-[#8C8C8C] text-sm tracking-widest">
              传承千年诗韵，品味中华文化
            </p>
          </div>

          {/* 装饰诗句 */}
          <div className="py-8">
            <p className="poem-content text-lg text-[#8C8C8C]/80 italic">
              "愿得长如此，年年物候新"
            </p>
            <p className="text-sm text-[#8C8C8C]/60 mt-2">
              —— 唐 · 卢照邻《元日述怀》
            </p>
          </div>

          {/* 装饰元素 */}
          <div className="flex justify-center items-center gap-4">
            <div className="w-12 h-px bg-[#1A1A1A]/10" />
            <div className="w-2 h-2 rounded-full bg-[#C41E3A]/30" />
            <div className="w-12 h-px bg-[#1A1A1A]/10" />
          </div>

          {/* 版权信息 */}
          <div className="text-sm text-[#8C8C8C]/60 space-y-2">
            <p className="flex items-center justify-center gap-1">
              用 <Heart className="w-4 h-4 text-[#C41E3A] fill-current" /> 传承文化
            </p>
            <p>
              &copy; {currentYear} 墨韵新春 · 诗词雅集
            </p>
          </div>
        </div>

        {/* 底部装饰 */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#1A1A1A]/20" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/30" />
            <div className="w-2 h-2 rounded-full bg-[#C41E3A]/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/30" />
            <div className="w-1 h-1 rounded-full bg-[#1A1A1A]/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
