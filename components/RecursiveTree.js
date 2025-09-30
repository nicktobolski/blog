import React, { useEffect, useRef } from "react";

export default function RecursiveTree() {
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
      ctx.lineWidth = Math.max(0.5, (maxDepth - depth + 1) * 1.2);
      
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

      // Draw single tree that spans viewport height
      // Calculate initial length to roughly fill viewport height
      const baseLength = canvas.height * 0.25;
      const maxDepth = 8;
      
      // Single central tree growing upward from bottom
      drawBranch(
        canvas.width / 2,
        canvas.height,
        baseLength,
        -Math.PI / 2,
        0,
        maxDepth,
        time
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
