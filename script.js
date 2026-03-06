// ========================================
// 水墨风个人网站 - JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // 主题切换功能
    initThemeToggle();
    
    // 导航栏滚动效果
    initNavbarScroll();
    
    // 平滑滚动
    initSmoothScroll();
});

// 主题切换
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('.theme-icon');
    const body = document.body;

    // 检查本地存储的主题偏好
    const savedTheme = localStorage.getItem('theme');
    
    // 应用保存的主题
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '☀️';
    }

    // 切换逻辑
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '🌙';
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '☀️';
        }
    });
}

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// 平滑滚动到指定区域
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - navHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// 显示文章详情
function showPost(postId) {
    // 隐藏首页
    document.getElementById('view-home').classList.add('hidden');
    
    // 显示详情页
    const detailView = document.getElementById('view-detail');
    detailView.classList.remove('hidden');
    
    // 隐藏所有文章内容
    document.querySelectorAll('.detail-content').forEach(el => {
        el.classList.add('hidden');
    });
    
    // 显示指定文章
    const targetPost = document.getElementById(postId);
    if (targetPost) {
        targetPost.classList.remove('hidden');
    }
    
    // 滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // 更新导航栏状态
    document.querySelector('.navbar').classList.add('scrolled');
}

// 返回首页
function showHome() {
    // 隐藏详情页
    document.getElementById('view-detail').classList.add('hidden');
    
    // 显示首页
    document.getElementById('view-home').classList.remove('hidden');
    
    // 滚动到页面顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // 检查是否需要移除导航栏滚动效果
    if (window.scrollY <= 100) {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
}

// 平滑滚动初始化
function initSmoothScroll() {
    // 为所有锚点链接添加平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// 页面加载动画
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
