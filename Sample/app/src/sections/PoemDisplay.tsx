import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Share2, Heart } from 'lucide-react';
import { poems } from '../data/poems';

export default function PoemDisplay() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [likedPoems, setLikedPoems] = useState<Set<number>>(new Set());

  const currentPoem = poems[currentIndex];

  const goToPoem = useCallback((index: number, dir: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(dir);
    
    setTimeout(() => {
      setCurrentIndex(index);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  }, [isAnimating]);

  const nextPoem = useCallback(() => {
    const nextIndex = (currentIndex + 1) % poems.length;
    goToPoem(nextIndex, 'right');
  }, [currentIndex, goToPoem]);

  const prevPoem = useCallback(() => {
    const prevIndex = (currentIndex - 1 + poems.length) % poems.length;
    goToPoem(prevIndex, 'left');
  }, [currentIndex, goToPoem]);

  // 键盘导航
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevPoem();
      } else if (e.key === 'ArrowRight') {
        nextPoem();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPoem, prevPoem]);

  const toggleLike = () => {
    setLikedPoems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentPoem.id)) {
        newSet.delete(currentPoem.id);
      } else {
        newSet.add(currentPoem.id);
      }
      return newSet;
    });
  };

  const sharePoem = async () => {
    const text = `${currentPoem.title}\n${currentPoem.dynasty} · ${currentPoem.author}\n\n${currentPoem.content.join('\n')}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentPoem.title,
          text: text,
        });
      } catch (err) {
        console.log('分享取消');
      }
    } else {
      navigator.clipboard.writeText(text);
      alert('诗词已复制到剪贴板');
    }
  };

  return (
    <section id="poems-section" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 ink-splash opacity-20" />
        <div className="absolute bottom-20 left-10 w-72 h-72 ink-splash opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#1A1A1A]/30" />
            <BookOpen className="w-5 h-5 text-[#8C8C8C]" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#1A1A1A]/30" />
          </div>
          <h2 className="calligraphy text-4xl sm:text-5xl text-[#1A1A1A] mb-3">诗词雅集</h2>
          <p className="text-[#8C8C8C] text-sm tracking-widest">
            共 {poems.length} 首 · 第 {currentIndex + 1} 首
          </p>
        </div>

        {/* 诗歌展示卡片 */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左侧：诗歌内容 */}
          <div className="order-2 lg:order-1">
            <div 
              className={`ink-card rounded-2xl p-8 sm:p-12 rice-paper-texture transition-all duration-500 ${
                isAnimating 
                  ? direction === 'right' 
                    ? 'opacity-0 -translate-x-12 blur-sm' 
                    : 'opacity-0 translate-x-12 blur-sm'
                  : 'opacity-100 translate-x-0 blur-0'
              }`}
            >
              {/* 诗歌标题 */}
              <div className="text-center mb-8">
                <h3 className="calligraphy text-3xl sm:text-4xl text-[#1A1A1A] mb-3">
                  {currentPoem.title}
                </h3>
                <div className="flex items-center justify-center gap-2 text-[#8C8C8C]">
                  <span className="text-sm">{currentPoem.dynasty}</span>
                  <span className="w-1 h-1 rounded-full bg-[#8C8C8C]" />
                  <span className="text-sm">{currentPoem.author}</span>
                </div>
              </div>

              {/* 分隔线 */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/30 to-transparent" />
                <div className="w-2 h-2 rounded-full bg-[#C41E3A]/40" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C41E3A]/30 to-transparent" />
              </div>

              {/* 诗歌正文 */}
              <div className="poem-content text-center space-y-3 mb-10">
                {currentPoem.content.map((line, index) => (
                  <p 
                    key={index} 
                    className="text-lg sm:text-xl text-[#1A1A1A] leading-loose"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      opacity: isAnimating ? 0 : 1,
                      transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
                      transition: `all 0.4s ease-out ${index * 0.1}s`
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>

              {/* 标签 */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {currentPoem.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-xs text-[#8C8C8C] border border-[#1A1A1A]/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 操作按钮 */}
              <div className="flex justify-center gap-4">
                <button
                  onClick={toggleLike}
                  className={`ink-button p-3 rounded-full border border-[#1A1A1A]/10 transition-all ${
                    likedPoems.has(currentPoem.id) 
                      ? 'text-[#C41E3A] bg-[#C41E3A]/10' 
                      : 'text-[#8C8C8C] hover:text-[#C41E3A]'
                  }`}
                  title="收藏"
                >
                  <Heart className={`w-5 h-5 ${likedPoems.has(currentPoem.id) ? 'fill-current' : ''}`} />
                </button>
                <button
                  onClick={sharePoem}
                  className="ink-button p-3 rounded-full border border-[#1A1A1A]/10 text-[#8C8C8C] hover:text-[#1A1A1A]"
                  title="分享"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* 右侧：配图 */}
          <div className="order-1 lg:order-2">
            <div 
              className={`relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
                isAnimating 
                  ? direction === 'right' 
                    ? 'opacity-0 translate-x-12 blur-sm' 
                    : 'opacity-0 -translate-x-12 blur-sm'
                  : 'opacity-100 translate-x-0 blur-0'
              }`}
            >
              <img
                src={currentPoem.image}
                alt={currentPoem.title}
                className="w-full h-full object-cover"
              />
              {/* 水墨遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E8]/10 via-transparent to-[#F5F0E8]/20" />
              
              {/* 角落装饰 */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white/30" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white/30" />
            </div>
          </div>
        </div>

        {/* 导航控制 */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevPoem}
            disabled={isAnimating}
            className="ink-button group flex items-center gap-2 px-6 py-3 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">上一首</span>
          </button>

          {/* 进度指示器 */}
          <div className="flex items-center gap-2">
            {poems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToPoem(index, index > currentIndex ? 'right' : 'left')}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#C41E3A]' 
                    : 'bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/40'
                }`}
                aria-label={`跳转到第 ${index + 1} 首`}
              />
            ))}
          </div>

          <button
            onClick={nextPoem}
            disabled={isAnimating}
            className="ink-button group flex items-center gap-2 px-6 py-3 rounded-full border border-[#1A1A1A]/10 text-[#1A1A1A] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="hidden sm:inline">下一首</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 键盘提示 */}
        <div className="text-center mt-8 text-[#8C8C8C]/60 text-xs">
          可使用键盘 ← → 方向键切换
        </div>
      </div>
    </section>
  );
}
