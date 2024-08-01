import CanvasState from "@/shared/library/mobx/store/CanvasState";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";

const Canvas: React.FC = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    console.log(canvasRef.current);
    CanvasState.setCanvas(canvasRef.current);
  }, []);

  return (
    <section className="flex h-svh items-center justify-center">
      <canvas ref={canvasRef} className="w-[800px] h-[600px] border-2 border-slate-950 bg-white"></canvas>
    </section>
  );
});

export default Canvas;
