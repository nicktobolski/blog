import React, { useEffect, useRef } from "react";
import Head from "next/head";

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

function ParticleField() {
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

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nick Tobolski</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:title"
          content="Nick Tobolski ∞ Human, Software Engineer"
          key="title"
        />
        <meta
          name="description"
          property="og:description"
          content="Personal site of Nick Tobolski, Extraodinaire"
          key="desc"
        />
      </Head>

      <ParticleField />

      <main>
        <h1 className="title">Nick Tobolski</h1>

        <p className="description intro">
          A human who enjoys building {" "}
          <a href="/tools">tools</a> that extend{" "}
          <a href="https://www.youtube.com/watch?v=cEfG1PHNB64" target="_blank">
            the reach
          </a>
          {" of "}
          <a href="https://en.wikipedia.org/wiki/Human">humanity</a> (among other things).
        </p>

        <div className="grid">
          <a href="/projects" className="card">
            <h2>Projects &rarr;</h2>
            <p>Explorations in code</p>
          </a>
          <a href="/words" className="card">
            <h2>Words &rarr;</h2>
            <p>With an appreciation for brevity</p>
          </a>
          <a
            href="https://github.com/nicktobolski"
            className="card"
            target="_blank"
          >
            <h2>Github &rarr;</h2>
            <p>It's pretty random honestly</p>
          </a>
          <a
            href="https://www.linkedin.com/in/ntobolski/"
            className="card"
            target="_blank"
          >
            <h2>LinkedIn &rarr;</h2>
            <p>Say hello</p>
          </a>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .intro {
          max-width: 39rem;
        }
        a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a {
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
        .wip {
          font-weight: bold;
          color: #ccc;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition:
            color 0.15s ease,
            border-color 0.15s ease;
        }

        a.card:hover,
        a.card:focus,
        a.card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
            align-items: stretch;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
