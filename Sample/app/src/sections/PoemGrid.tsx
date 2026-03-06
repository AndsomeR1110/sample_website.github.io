import { useState } from 'react';
import { poems } from '../data/poems';
import { Search, X } from 'lucide-react';

interface PoemGridProps {
  onSelectPoem?: (index: number) => void;
}

export default function PoemGrid({ onSelectPoem }: PoemGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // 获取所有标签
  const allTags = Array.from(
    new Set(poems.flatMap(poem => poem.tags))
  ).sort();

  // 过滤诗歌
  const filteredPoems = poems.filter(poem => {
    const matchesSearch = 
      poem.title.includes(searchTerm) ||
      poem.author.includes(searchTerm) ||
      poem.content.some(line => line.includes(searchTerm));
    
    const matchesTag = selectedTag ? poem.tags.includes(selectedTag) : true;
    
    return matchesSearch && matchesTag;
  });

  const handlePoemClick = (index: number) => {
    // 找到原始索引
    const originalIndex = poems.findIndex(p => p.id === filteredPoems[index].id);
    onSelectPoem?.(originalIndex);
    
    // 滚动到诗歌展示区
    const poemsSection = document.getElementById('poems-section');
    if (poemsSection) {
      poemsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-64 h-64 ink-splash opacity-10" />
        <div className="absolute bottom-40 right-10 w-80 h-80 ink-splash opacity-15" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 标题 */}
        <div className="text-center mb-12">
          <h2 className="calligraphy text-4xl sm:text-5xl text-[#1A1A1A] mb-4">诗目一览</h2>
          <p className="text-[#8C8C8C] text-sm tracking-widest">
            点击诗名，即可品读
          </p>
        </div>

        {/* 搜索和筛选 */}
        <div className="mb-10 space-y-4">
          {/* 搜索框 */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8C8C]" />
            <input
              type="text"
              placeholder="搜索诗名、作者或诗句..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-white/50 border border-[#1A1A1A]/10 rounded-full text-[#1A1A1A] placeholder:text-[#8C8C8C]/60 focus:outline-none focus:border-[#C41E3A]/40 focus:ring-1 focus:ring-[#C41E3A]/40 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8C8C8C] hover:text-[#1A1A1A]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* 标签筛选 */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                selectedTag === null
                  ? 'bg-[#1A1A1A] text-[#F5F0E8]'
                  : 'bg-white/50 text-[#8C8C8C] hover:bg-white hover:text-[#1A1A1A]'
              }`}
            >
              全部
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedTag === tag
                    ? 'bg-[#C41E3A] text-white'
                    : 'bg-white/50 text-[#8C8C8C] hover:bg-white hover:text-[#1A1A1A]'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* 诗歌网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPoems.map((poem, index) => (
            <button
              key={poem.id}
              onClick={() => handlePoemClick(index)}
              className="group ink-card rounded-xl p-6 text-left transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* 标题 */}
              <h3 className="calligraphy text-xl text-[#1A1A1A] mb-2 group-hover:text-[#C41E3A] transition-colors">
                {poem.title}
              </h3>
              
              {/* 作者信息 */}
              <div className="flex items-center gap-2 text-sm text-[#8C8C8C] mb-3">
                <span>{poem.dynasty}</span>
                <span className="w-1 h-1 rounded-full bg-[#8C8C8C]" />
                <span>{poem.author}</span>
              </div>

              {/* 预览诗句 */}
              <p className="text-sm text-[#8C8C8C]/80 line-clamp-2 leading-relaxed">
                {poem.content[0]}{poem.content.length > 1 ? '...' : ''}
              </p>

              {/* 标签 */}
              <div className="flex flex-wrap gap-1 mt-3">
                {poem.tags.slice(0, 2).map((tag, i) => (
                  <span 
                    key={i}
                    className="px-2 py-0.5 text-xs text-[#8C8C8C]/70 bg-[#1A1A1A]/5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 悬停装饰 */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C41E3A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
            </button>
          ))}
        </div>

        {/* 无结果提示 */}
        {filteredPoems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#8C8C8C]">未找到匹配的诗词</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedTag(null);
              }}
              className="mt-4 text-[#C41E3A] hover:underline"
            >
              清除筛选条件
            </button>
          </div>
        )}

        {/* 统计 */}
        <div className="text-center mt-8 text-sm text-[#8C8C8C]/60">
          共 {filteredPoems.length} 首
        </div>
      </div>
    </section>
  );
}
