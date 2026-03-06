import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import PoemDisplay from './sections/PoemDisplay';
import PoemGrid from './sections/PoemGrid';
import Footer from './sections/Footer';
import './App.css';

function App() {
  const handleSelectPoemFromGrid = () => {
    // 滚动到诗歌展示区
    const poemsSection = document.getElementById('poems-section');
    if (poemsSection) {
      poemsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* 导航栏 */}
      <Navbar />
      
      {/* 主要内容 */}
      <main>
        {/* Hero区域 */}
        <div id="hero-section">
          <Hero />
        </div>
        
        {/* 诗歌展示区域 */}
        <div id="poems-section">
          <PoemDisplay />
        </div>
        
        {/* 诗歌网格 */}
        <div id="poem-grid-section">
          <PoemGrid onSelectPoem={handleSelectPoemFromGrid} />
        </div>
      </main>
      
      {/* 页脚 */}
      <Footer />
      
      {/* 全局装饰 - 水墨点 */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 ink-splash opacity-5" />
        <div className="absolute top-1/2 right-20 w-48 h-48 ink-splash opacity-5" />
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 ink-splash opacity-5" />
      </div>
    </div>
  );
}

export default App;
