import React, { useEffect, useRef } from "react";

export default function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId;
    let time = 0;

    // Recursive tree drawing function
    function drawBranch(x, y, length, angle, depth, maxDepth, time) {
      if (depth > maxDepth) return;

      // Calculate end point of branch
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      // Draw the branch
      const alpha = (maxDepth - depth + 1) / (maxDepth + 1);
      const hue = (depth * 30 + time * 20) % 360;
      ctx.strokeStyle = `hsla(${hue}, 70%, 60%, ${alpha * 0.6})`;
      ctx.lineWidth = Math.max(0.5, (maxDepth - depth + 1) * 0.8);
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Recursive calls for branches
      if (depth < maxDepth) {
        const newLength = length * 0.7;
        
        // Create dynamic angle variations with time
        const angleVariation = Math.sin(time + depth * 0.5) * 0.3;
        const leftAngle = angle - 0.5 - angleVariation;
        const rightAngle = angle + 0.5 + angleVariation;
        
        // "Strange loop" twist - occasionally branch back
        const loopAngle = angle + Math.PI + Math.sin(time * 0.5 + depth) * 0.5;
        
        // Main branches
        drawBranch(endX, endY, newLength, leftAngle, depth + 1, maxDepth, time);
        drawBranch(endX, endY, newLength, rightAngle, depth + 1, maxDepth, time);
        
        // Add occasional "strange loop" branch that curves back
        if (depth > 2 && Math.sin(time + depth) > 0.7) {
          drawBranch(endX, endY, newLength * 0.5, loopAngle, depth + 2, maxDepth, time);
        }
      }
    }

    // Animation loop
    function animate() {
      time += 0.01;
      
      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw multiple recursive trees
      const baseLength = Math.min(canvas.width, canvas.height) * 0.15;
      const maxDepth = 7;
      
      // Central tree growing upward
      drawBranch(
        canvas.width / 2,
        canvas.height * 0.8,
        baseLength,
        -Math.PI / 2,
        0,
        maxDepth,
        time
      );
      
      // Left tree growing at angle
      drawBranch(
        canvas.width * 0.25,
        canvas.height * 0.7,
        baseLength * 0.8,
        -Math.PI / 2 - 0.3,
        0,
        maxDepth - 1,
        time + 2
      );
      
      // Right tree growing at angle
      drawBranch(
        canvas.width * 0.75,
        canvas.height * 0.7,
        baseLength * 0.8,
        -Math.PI / 2 + 0.3,
        0,
        maxDepth - 1,
        time + 4
      );

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