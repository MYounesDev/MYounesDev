class AnimatedText {
    constructor() {
        this.technologies = [
            'Love Git & GitHub',
            'Like Next.js',
            'Master Node.js',
            'Work With FastAPI',
            'Use PostgreSQL',
            'Explore MongoDB',
            'Build With React',
            'Style With Tailwind',
            'Code In TypeScript',
            'Write Python',
            'Deploy With Vercel',
            'Know Prisma'
        ];
        this.currentIndex = 0;
        this.currentText = '';
        this.isDeleting = false;
        this.typeSpeed = 30;
        this.deleteSpeed = 10;
        this.pauseTime = 2000;
        this.dynamicTextEl = document.getElementById('dynamicText');
        this.cursorEl = document.getElementById('cursor');
        this.init();
    }
    init() {
        setTimeout(() => {
            this.type();
        }, 500);
    }
    type() {
        const fullText = this.technologies[this.currentIndex];
        if (this.isDeleting) {
            this.currentText = fullText.substring(0, this.currentText.length - 1);
        } else {
            this.currentText = fullText.substring(0, this.currentText.length + 1);
        }
        this.dynamicTextEl.textContent = this.currentText;
        if (this.currentText === '' && this.isDeleting) {
            this.addGlitchEffect();
        }
        let speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        speed += Math.random() * 50;
        if (!this.isDeleting && this.currentText === fullText) {
            speed = this.pauseTime;
            this.isDeleting = true;
            this.addHighlightEffect();
        } else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.currentIndex = (this.currentIndex + 1) % this.technologies.length;
            speed = 200; 
        }
        setTimeout(() => this.type(), speed);
    }
    addGlitchEffect() {
        this.dynamicTextEl.classList.add('glitch');
        this.dynamicTextEl.setAttribute('data-text', this.currentText);
        setTimeout(() => {
            this.dynamicTextEl.classList.remove('glitch');
        }, 300);
    }
    addHighlightEffect() {
        this.dynamicTextEl.style.transform = 'scale(1.05)';
        this.dynamicTextEl.style.textShadow = '0 0 20px rgba(245, 87, 108, 0.8)';
        setTimeout(() => {
            this.dynamicTextEl.style.transform = 'scale(1)';
            this.dynamicTextEl.style.textShadow = 'none';
        }, 300);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new AnimatedText();
});