(function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const num = 200;
    const line = 120;
    const rgba = 'rgb(243, 230, 94)';
    let particles = [];

    class Particle {    
        constructor(x, y, velocityX, velocityY, size, color) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.size = size;
            this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            if (this.x + this.size > width || this.x - this.size < 0) {
                this.velocityX = -this.velocityX;
            }
            if (this.y + this.size > height || this.y - this.size < 0) {
                this.velocityY = -this.velocityY;
            }
            this.x += this.velocityX;
            this.y += this.velocityY;
            this.draw();
        }
    }

    function getrandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createParticles() {
        for (let i = 0; i < num; i++) {
            let x = getrandom(0, width);
            let y = getrandom(0, height);
            let velocityX = getrandom(-2, 2);
            let velocityY = getrandom(-2, 2);
            let size = getrandom(1, 3);
            let color = rgba;
            particles.push(new Particle(x, y, velocityX, velocityY, size, color));
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                let distance = Math.sqrt(Math.pow(particles[i].x - particles[j].x, 2) + Math.pow(particles[i].y - particles[j].y, 2));
                if (distance < line) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(255, 250, 224, ${1 - distance / line})`;
                    ctx.stroke();
                }
            }
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, width, height);
        particles.forEach(particle => {
            particle.update();
        });
        connectParticles();
    }

    createParticles();
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        width = canvas.width;
        height = canvas.height;
        particles = [];
        createParticles();
    });
})();