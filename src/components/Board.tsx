import { useEffect, useRef } from "react";
import rough from "roughjs";

const Board = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas?.getContext("2d");
      const roughCanvas = rough.canvas(canvas);
      const generator = roughCanvas.generator;
      let rect1 = generator.rectangle(10, 10, 100, 100);
      let rect2 = generator.rectangle(10, 120, 100, 100, { fill: "green" });
      roughCanvas.draw(rect1);
      roughCanvas.draw(rect2);
    }
  }, []);

  return (
    <>
      <main className="w-full h-screen">
        <canvas ref={canvasRef} className="w-full h-full "></canvas>
      </main>
    </>
  );
};

export default Board;
