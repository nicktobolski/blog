import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeContext";

export default function RecursiveTree({ containerRef }) {
  const canvasRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isDark = theme === "dark";
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      if (containerRef?.current) {
        canvas.height = containerRef.current.scrollHeight;
      } else {
        canvas.height = 3000;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let resizeObserver;
    if (containerRef?.current) {
      resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
      });
      resizeObserver.observe(containerRef.current);
    }

    let animationId;
    let time = 0;

    function drawBranch(x, y, length, angle, depth, maxDepth, time) {
      if (depth > maxDepth) return;

      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      const alpha = (maxDepth - depth + 1) / (maxDepth + 1);
      const hue = (depth * 45 + time * 20) % 360;
      const lightness = isDark ? "75%" : "60%";
      ctx.strokeStyle = `hsla(${hue}, 90%, ${lightness}, ${alpha * 0.8})`;
      const widthScale = isDark ? 1.8 : 1.2;
      ctx.lineWidth = Math.max(0.5, (maxDepth - depth + 1) * widthScale);

      if (depth <= 3) {
        ctx.shadowBlur = (maxDepth - depth) * 6;
        ctx.shadowColor = `hsla(${hue}, 90%, ${lightness}, ${alpha * 0.9})`;
      }

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      if (depth <= 3) {
        ctx.shadowBlur = 0;
      }

      if (depth < maxDepth) {
        const newLength = length * 0.7;

        const angleVariation = Math.sin(time + depth * 0.5) * 0.3;
        const leftAngle = angle - 0.5 - angleVariation;
        const rightAngle = angle + 0.5 + angleVariation;
        const centerAngle = angle + Math.sin(time * 1.5 + depth) * 0.15;

        drawBranch(
          endX,
          endY,
          newLength,
          leftAngle,
          depth + 1,
          maxDepth,
          time,
        );
        drawBranch(
          endX,
          endY,
          newLength * 0.85,
          centerAngle,
          depth + 1,
          maxDepth,
          time,
        );
        drawBranch(
          endX,
          endY,
          newLength,
          rightAngle,
          depth + 1,
          maxDepth,
          time,
        );
      }
    }

    ctx.fillStyle = isDark ? "#111" : "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    function animate() {
      time += 0.0045;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = isDark ? "#111" : "#fff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const baseLength = canvas.height * 0.3;
      const maxDepth = 7;

      drawBranch(
        canvas.width / 2,
        0,
        baseLength,
        Math.PI / 2,
        0,
        maxDepth,
        time,
      );

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [containerRef, theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}
