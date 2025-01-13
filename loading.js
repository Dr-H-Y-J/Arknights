document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.getElementById('progressBar');
    const startButton = document.getElementById('start');
    const progress_container = document.getElementById('progress-container');
    const text = document.getElementById('text');
    
    let width = 0;
    // 进度条动画
    function animateProgressBar() {
        const interval = setInterval(function() {
            if (width >= 100) {
                progressBar.style.display = 'none'; // 隐藏进度条
                startButton.style.display = 'block'; // 显示开始按钮
                progress_container.style.display = 'none';  
            }
            else if (width >= 50) {
                width++;
                progressBar.style.width = width + '%';
                text.textContent =  width + '%';
            }
            else if (width <= 35) {
                width++;
                width++;
                width++;
                progressBar.style.width = width + '%';
                text.textContent =  width + '%';
            }
            else {
                width++;
                width++;
                progressBar.style.width = width + '%';
                text.textContent =  width + '%';
            }
        }, 150); // 每100毫秒更新一次进度
    }

    setTimeout(function() {
        animateProgressBar();
    }, 12000);
});
    
    
