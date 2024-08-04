import BrushTool from "@/features/Tools/BrushTool";
import CanvasState from "@/shared/library/mobx/store/CanvasState";
import ToolState from "@/shared/library/mobx/store/ToolState";
import { observer } from "mobx-react-lite";
import React, { useEffect, useRef } from "react";

const Canvas: React.FC = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      CanvasState.setCanvas(canvasRef.current);
      ToolState.setTool(new BrushTool(canvasRef.current));
    }
  }, []);

  const mouseDownHandler = () => {
    CanvasState.pushToUndo(canvasRef.current ? canvasRef.current.toDataURL() : "");
  };

  return (
    <section className="flex h-svh items-center justify-center">
      <canvas
        onMouseDown={() => mouseDownHandler()}
        ref={canvasRef}
        className="border-2 border-slate-950 bg-white"
        width={1000}
        height={700}
      ></canvas>
    </section>
  );
});

export default Canvas;
