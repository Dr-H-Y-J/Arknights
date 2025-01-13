let img = document.querySelector('img');
        let dots = document.querySelectorAll('#selector span');
        let left = document.getElementById('left');
        let right = document.getElementById('right');
        let index = 0;
        let timer;

        function show(index) {
            if (index < 0 || index >= dots.length) return; // 防止索引超出范围
            img.src = `./gallery/photo${index}.jpg`;
            // 更新圆点的样式
            dots.forEach(dot => dot.style.backgroundColor = 'lightsalmon');
            dots[index].style.backgroundColor = '#8A8A8A';
        }

        function autoPlay() {
            timer = setInterval(function() {
                show((index + 1) % dots.length);
                index = (index + 1) % dots.length;
            }, 3000); // 将自动播放间隔调整为3秒
        }
        autoPlay();

        function ctrlPlay() {
            dots.forEach((dot, i) => {
                dot.onclick = function() {
                    clearInterval(timer); // 点击圆点时暂停自动播放
                    show(i);
                    index = i;
                    autoPlay(); // 点击圆点后继续自动播放
                }
            });
        }
        ctrlPlay();

        function clickPlay() {
            left.onclick = function() {
                show((index - 1 + dots.length) % dots.length);
                index = (index - 1 + dots.length) % dots.length;
            };
            right.onclick = function() {
                show((index + 1) % dots.length);
                index = (index + 1) % dots.length;
            };
        }
        clickPlay();

        function eventList() {
            dots.forEach(dot => {
                dot.addEventListener('mouseenter', function() {
                    clearInterval(timer);
                    let currentIndex = Array.from(dots).indexOf(dot);
                    show(currentIndex);
                    index = currentIndex;
                }, false);
            });
        }
        eventList();