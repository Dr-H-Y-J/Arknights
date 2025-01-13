document.addEventListener('DOMContentLoaded', function() {

    const progressBar = document.getElementById('progressBar');
    const progress_container = document.getElementById('progress-container');
    const progressBar2 = document.getElementById('progressBar2');
    const progressLabel1 = document.getElementById('progressLabel1');
    const progressLabel2 = document.getElementById('progressLabel2');
    const logo1= document.querySelector('.image1');
    // 进度条初始化
    let width = 0;
    // 进度条动画
    function animateProgressBar() {
        const interval = setInterval(function() {
            if (width >= 50) {
                progressBar.style.display = 'none'; 
                progressBar2.style.display = 'none';  
                progress_container.style.display = 'none';  
                window.location.href = './Arknights.html';
            }
            else if (width <= 25) {
                width++;
                progressBar.style.width = width + '%';
                progressBar2.style.width = width + '%';
                progressLabel1.style.left = width + '%';
                progressLabel2.style.right = width + '%';
                progressLabel1.textContent = width*2 + '%';
                progressLabel2.textContent = width*2 + '%';
            }
            else {
                width++;
                width++;
                width++;
                progressBar.style.width = width + '%';
                progressBar2.style.width = width + '%';
                progressLabel1.style.left = width + '%';
                progressLabel2.style.right = width + '%';
                progressLabel1.textContent = width*2 + '%';
                progressLabel2.textContent = width*2 + '%';
            }
        }, 250); 
    }

    const startButton = document.querySelector('.start');
    const container = document.querySelector('.container');
    const center = document.querySelector('.center');

    startButton.addEventListener('click', function() {
        // 修改container和center的样式使其下降到屏幕中央
        container.style.top = '5%';
        center.style.top = '20%';
        startButton.style.display = 'none'; // 隐藏start按钮
        animateProgressBar(); // 启动进度条动画
        document.body.style.backgroundColor = '#101010a9'; // 背景颜色变黑
        logo1.style.backgroundImage = "url('./gallery/logo2.png')"; // 显示logo图片

    });
});