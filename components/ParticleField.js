import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

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
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isDark = theme === "dark";
    const ctx = canvas.getContext("2d");
    const noise = new PerlinNoise();

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * window.innerHeight;
      }

      reset() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.vx = 0;
        this.vy = 0;
        this.life = Math.random() * 100 + 150;
        this.maxLife = this.life;
      }

      update(time) {
        let scale = 0.003;
        let noiseValue = noise.get(
          this.x * scale,
          this.y * scale + time * 0.0001,
        );
        let angle = noiseValue * Math.PI * 2;

        this.vx += Math.cos(angle) * 0.1;
        this.vy += Math.sin(angle) * 0.1;

        this.vx *= 0.95;
        this.vy *= 0.95;

        this.x += this.vx;
        this.y += this.vy;

        this.life -= 0.5;

        if (
          this.x < 0 ||
          this.x > window.innerWidth ||
          this.y < 0 ||
          this.y > window.innerHeight ||
          this.life <= 0
        ) {
          this.reset();
        }
      }

      draw() {
        let alpha = (this.life / this.maxLife) * 0.3;
        ctx.fillStyle = isDark
          ? `rgba(120, 170, 255, ${alpha})`
          : `rgba(100, 150, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = [];
    const particleCount = Math.min(
      150,
      Math.floor((window.innerWidth * window.innerHeight) / 8000),
    );

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    let animationId;
    let startTime = Date.now();

    ctx.fillStyle = isDark ? "#111" : "#fff";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    function animate() {
      const time = Date.now() - startTime;

      ctx.fillStyle = isDark
        ? "rgba(17, 17, 17, 0.05)"
        : "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      particles.forEach((particle) => {
        particle.update(time);
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

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
      }}
    />
  );
}
