// DOM要素の取得
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section');
const heroTitle = document.querySelector('.hero-title');
const heroSubtitle = document.querySelector('.hero-subtitle');
const heroDescription = document.querySelector('.hero-description');
const heroButtons = document.querySelector('.hero-buttons');
const skillCards = document.querySelectorAll('.skill-card');
const projectCards = document.querySelectorAll('.project-card');
const stats = document.querySelectorAll('.stat');
const contactForm = document.querySelector('.contact-form form');

// ナビゲーションバーのスクロール効果
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // ナビゲーションバーの背景透明度調整
    if (scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
        navbar.style.boxShadow = 'none';
    }
    
    // アクティブなセクションのハイライト
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            navLinks.forEach(link => link.style.color = '#1d1d1f');
            if (navLinks[index]) {
                navLinks[index].style.color = '#007aff';
            }
        }
    });
});

// スムーズスクロール機能
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 60;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// パララックス効果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // ヒーローセクションのパララックス効果
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// インターセクションオブザーバーを使用したアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// アニメーション要素の監視
document.querySelectorAll('.skill-card, .project-card, .stat, .about-description, .quote-text, .quote-author').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// スキルカードのホバー効果
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// プロジェクトカードのホバー効果
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// 統計数値のカウントアップアニメーション
const animateStats = () => {
    stats.forEach(stat => {
        const numberElement = stat.querySelector('h3');
        const targetNumber = parseInt(numberElement.textContent);
        const isPercentage = numberElement.textContent.includes('%');
        const hasPlus = numberElement.textContent.includes('+');
        
        let currentNumber = 0;
        const increment = targetNumber / 50;
        
        const counter = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(counter);
            }
            
            let displayNumber = Math.floor(currentNumber);
            if (isPercentage) {
                numberElement.textContent = displayNumber + '%';
            } else if (hasPlus) {
                numberElement.textContent = displayNumber + '+';
            } else {
                numberElement.textContent = displayNumber;
            }
        }, 30);
    });
};

// 統計セクションが表示されたときにアニメーションを開始
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
});

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// フォーム送信処理
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // フォームデータの取得
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
        const message = formData.get('message') || contactForm.querySelector('textarea').value;
        
        // 送信ボタンのアニメーション
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = '送信中...';
        submitButton.disabled = true;
        submitButton.style.opacity = '0.7';
        
        // 実際の送信処理をシミュレート
        setTimeout(() => {
            submitButton.textContent = '送信完了！';
            submitButton.style.background = '#28a745';
            
            // フォームをリセット
            setTimeout(() => {
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
                submitButton.style.background = '';
            }, 2000);
        }, 1000);
    });
}

// キーボードナビゲーション
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const currentScrollY = window.scrollY;
        const nextSection = Array.from(sections).find(section => 
            section.offsetTop > currentScrollY + 100
        );
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        const currentScrollY = window.scrollY;
        const prevSection = Array.from(sections).reverse().find(section => 
            section.offsetTop < currentScrollY - 100
        );
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// マウスホイールのスムーズスクロール
let isScrolling = false;
window.addEventListener('wheel', (e) => {
    if (isScrolling) return;
    
    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 100);
    
    // スムーズなスクロール効果
    const scrollAmount = e.deltaY * 0.5;
    window.scrollBy({
        top: scrollAmount,
        behavior: 'smooth'
    });
});

// プロフィール画像のクリック効果
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('click', () => {
        profileImage.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            profileImage.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    });
}

// カーソル効果
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        // カスタムカーソルを作成
        const customCursor = document.createElement('div');
        customCursor.className = 'cursor';
        customCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(0, 122, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(customCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    if (cursorElement) {
        cursorElement.style.left = e.clientX - 10 + 'px';
        cursorElement.style.top = e.clientY - 10 + 'px';
    }
});

// ボタンホバー効果
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});

// ページロード時のアニメーション
window.addEventListener('load', () => {
    // ローディングアニメーション
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
    
    // ヒーローセクションのアニメーション
    setTimeout(() => {
        if (heroTitle) heroTitle.style.animation = 'fadeInUp 1s ease-out';
        if (heroSubtitle) heroSubtitle.style.animation = 'fadeInUp 1s ease-out 0.2s both';
        if (heroDescription) heroDescription.style.animation = 'fadeInUp 1s ease-out 0.4s both';
        if (heroButtons) heroButtons.style.animation = 'fadeInUp 1s ease-out 0.6s both';
    }, 200);
});

// レスポンシブメニュー（モバイル対応）
const createMobileMenu = () => {
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    mobileMenuButton.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #1d1d1f;
        cursor: pointer;
        @media (max-width: 768px) {
            display: block;
        }
    `;
    
    const navContainer = document.querySelector('.nav-container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navContainer && navMenu) {
        navContainer.appendChild(mobileMenuButton);
        
        mobileMenuButton.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-menu-active');
        });
    }
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    createMobileMenu();
    
    // スムーズスクロールの設定
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // パフォーマンス最適化
    let ticking = false;
    
    function updateAnimations() {
        // アニメーション更新処理
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}); 