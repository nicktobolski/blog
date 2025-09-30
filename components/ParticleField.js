import React, { useEffect, useRef } from "react";

// Simplified Perlin noise implementation
class PerlinNoise {
  constructor() {
    this.gradients = {};
    this.memory = {};
  }

  rand_vect() {
    let theta = Math.random() * 2 * Math.PI;
    return { x: Math.cos(theta), y: Math.sin(theta) };
  }

  dot_prod_grid(x, y, vx, vy) {
    let g_vect;
    let d_vect = { x: x - vx, y: y - vy };
    let grid_key = `${vx},${vy}`;
    
    if (this.gradients[grid_key]) {
      g_vect = this.gradients[grid_key];
    } else {
      g_vect = this.rand_vect();
      this.gradients[grid_key] = g_vect;
    }
    
    return d_vect.x * g_vect.x + d_vect.y * g_vect.y;
  }

  smootherstep(x) {
    return 6 * x ** 5 - 15 * x ** 4 + 10 * x ** 3;
  }

  interp(x, a, b) {
    return a + this.smootherstep(x) * (b - a);
  }

  get(x, y) {
    let key = `${x},${y}`;
    if (this.memory[key]) {
      return this.memory[key];
    }
    
    let xf = Math.floor(x);
    let yf = Math.floor(y);
    
    let tl = this.dot_prod_grid(x, y, xf, yf);
    let tr = this.dot_prod_grid(x, y, xf + 1, yf);
    let bl = this.dot_prod_grid(x, y, xf, yf + 1);
    let br = this.dot_prod_grid(x, y, xf + 1, yf + 1);
    
    let xt = this.interp(x - xf, tl, tr);
    let xb = this.interp(x - xf, bl, br);
    let v = this.interp(y - yf, xt, xb);
    
    this.memory[key] = v;
    return v;
  }
}

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const noise = new PerlinNoise();
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = 0;
        this.vy = 0;
        this.life = Math.random() * 100 + 150;
        this.maxLife = this.life;
      }

      update(time) {
        // Use Perlin noise to create flow field
        let scale = 0.003;
        let noiseValue = noise.get(this.x * scale, this.y * scale + time * 0.0001);
        let angle = noiseValue * Math.PI * 2;

        // Apply force based on noise
        this.vx += Math.cos(angle) * 0.1;
        this.vy += Math.sin(angle) * 0.1;

        // Apply friction
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Age particle
        this.life -= 0.5;

        // Wrap around edges or reset
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height || this.life <= 0) {
          this.reset();
        }
      }

      draw() {
        let alpha = (this.life / this.maxLife) * 0.3;
        ctx.fillStyle = `rgba(100, 150, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const particles = [];
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 8000));
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let animationId;
    let startTime = Date.now();

    function animate() {
      const time = Date.now() - startTime;
      
      // Fade out effect instead of clearing
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(time);
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        background: "white",
      }}
    />
  );
}