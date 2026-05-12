// 简单表单提交处理
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you as soon as possible.
');
    this.reset();
});

// 移动菜单切换
document.querySelector('.mobile-menu').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = 
        navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // 移动端点击后关闭菜单
            if (window.innerWidth <= 768) {
                document.querySelector('.nav-links').style.display = 'none';
            }
        }
    });
});

// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'white';
        header.style.backdropFilter = 'none';
    }
});
