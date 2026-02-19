import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let time = 0;
        let mouse = { x: null, y: null };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };
        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Grid settings
        const gridSize = 60;
        const nodeRadius = 1.5;

        // Energy pulses that travel along grid lines
        const pulses = [];
        const maxPulses = 15;

        class Pulse {
            constructor() {
                this.reset();
            }

            reset() {
                // Start at a random grid intersection
                const cols = Math.floor(canvas.width / gridSize);
                const rows = Math.floor(canvas.height / gridSize);
                this.col = Math.floor(Math.random() * cols);
                this.row = Math.floor(Math.random() * rows);
                this.x = this.col * gridSize;
                this.y = this.row * gridSize;

                // Pick a direction: 0=right, 1=down, 2=left, 3=up
                this.dir = Math.floor(Math.random() * 4);
                this.speed = 1.5 + Math.random() * 2;
                this.life = 1;
                this.decay = 0.002 + Math.random() * 0.003;
                this.size = 2 + Math.random() * 2;

                const colorIdx = Math.floor(Math.random() * 3);
                if (colorIdx === 0) this.color = { r: 0, g: 243, b: 255 };      // Cyan
                else if (colorIdx === 1) this.color = { r: 188, g: 19, b: 254 }; // Purple
                else this.color = { r: 0, g: 255, b: 157 };                      // Green

                this.trail = [];
                this.maxTrail = 12 + Math.floor(Math.random() * 10);
                this.targetX = this.x;
                this.targetY = this.y;
                this.pickNextTarget();
            }

            pickNextTarget() {
                const dirs = [
                    { dx: gridSize, dy: 0 },
                    { dx: 0, dy: gridSize },
                    { dx: -gridSize, dy: 0 },
                    { dx: 0, dy: -gridSize }
                ];

                // Prefer current direction but allow turns
                const choices = [];
                for (let i = 0; i < 4; i++) {
                    const weight = (i === this.dir) ? 4 : 1;
                    for (let w = 0; w < weight; w++) choices.push(i);
                }
                this.dir = choices[Math.floor(Math.random() * choices.length)];

                const d = dirs[this.dir];
                this.targetX = this.x + d.dx;
                this.targetY = this.y + d.dy;
            }

            update() {
                this.trail.unshift({ x: this.x, y: this.y, life: this.life });
                if (this.trail.length > this.maxTrail) this.trail.pop();

                // Move toward target
                const dx = this.targetX - this.x;
                const dy = this.targetY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.speed) {
                    this.x = this.targetX;
                    this.y = this.targetY;
                    this.pickNextTarget();
                } else {
                    this.x += (dx / dist) * this.speed;
                    this.y += (dy / dist) * this.speed;
                }

                this.life -= this.decay;

                // Reset if dead or off screen
                if (this.life <= 0 || this.x < -gridSize || this.x > canvas.width + gridSize ||
                    this.y < -gridSize || this.y > canvas.height + gridSize) {
                    this.reset();
                }
            }

            draw() {
                const { r, g, b } = this.color;

                // Trail
                for (let i = 0; i < this.trail.length; i++) {
                    const t = this.trail[i];
                    const alpha = (1 - i / this.trail.length) * this.life * 0.5;
                    const sz = this.size * (1 - i / this.trail.length * 0.5);
                    ctx.beginPath();
                    ctx.arc(t.x, t.y, sz, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                    ctx.fill();
                }

                // Head glow
                const grd = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 6);
                grd.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.life * 0.4})`);
                grd.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 6, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();

                // Head dot
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.life})`;
                ctx.fill();
            }
        }

        // Floating code characters
        const codeChars = [];
        const charCount = 25;
        const codeSymbols = ['0', '1', '{', '}', '<', '>', '/', ';', '=', '#', '+', '*', '(', ')', '&', '|'];

        class CodeChar {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.char = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
                this.size = 10 + Math.random() * 14;
                this.speed = 0.2 + Math.random() * 0.4;
                this.opacity = 0.02 + Math.random() * 0.04;
                this.drift = (Math.random() - 0.5) * 0.3;
            }

            update() {
                this.y -= this.speed;
                this.x += this.drift;

                if (this.y < -20) {
                    this.y = canvas.height + 20;
                    this.x = Math.random() * canvas.width;
                    this.char = codeSymbols[Math.floor(Math.random() * codeSymbols.length)];
                }
            }

            draw() {
                ctx.font = `${this.size}px 'Fira Code', monospace`;
                ctx.fillStyle = `rgba(0, 243, 255, ${this.opacity})`;
                ctx.fillText(this.char, this.x, this.y);
            }
        }

        // Init
        for (let i = 0; i < maxPulses; i++) {
            pulses.push(new Pulse());
        }
        for (let i = 0; i < charCount; i++) {
            codeChars.push(new CodeChar());
        }

        const drawGrid = () => {
            const cols = Math.ceil(canvas.width / gridSize) + 1;
            const rows = Math.ceil(canvas.height / gridSize) + 1;

            // Grid lines
            ctx.strokeStyle = 'rgba(0, 243, 255, 0.025)';
            ctx.lineWidth = 0.5;

            for (let i = 0; i < cols; i++) {
                ctx.beginPath();
                ctx.moveTo(i * gridSize, 0);
                ctx.lineTo(i * gridSize, canvas.height);
                ctx.stroke();
            }
            for (let j = 0; j < rows; j++) {
                ctx.beginPath();
                ctx.moveTo(0, j * gridSize);
                ctx.lineTo(canvas.width, j * gridSize);
                ctx.stroke();
            }

            // Grid nodes (intersections)
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const nx = i * gridSize;
                    const ny = j * gridSize;

                    // Subtle pulse only
                    let alpha = 0.08 + Math.sin(time * 0.02 + i * 0.5 + j * 0.3) * 0.02;

                    ctx.beginPath();
                    ctx.arc(nx, ny, nodeRadius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(0, 243, 255, ${alpha})`;
                    ctx.fill();
                }
            }
        };



        const animate = () => {
            time++;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawGrid();

            codeChars.forEach(c => {
                c.update();
                c.draw();
            });

            pulses.forEach(p => {
                p.update();
                p.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default InteractiveBackground;
