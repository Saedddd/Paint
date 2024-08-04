import React from "react";

import Brush from "@/shared/icons/Brush";
import Circle from "@/shared/icons/Circle";
import Eraser from "@/shared/icons/Eraser";
import Line from "@/shared/icons/Line";
import Rect from "@/shared/icons/Rect";
import Undo from "@/shared/icons/Undo";
import Redo from "@/shared/icons/Redo";
import Save from "@/shared/icons/Save";
import CanvasState from "@/shared/library/mobx/store/CanvasState";
import ToolState from "@/shared/library/mobx/store/ToolState";

import BrushTool from "@/features/Tools/BrushTool";
import RectTool from "@/features/Tools/RectTool";
import CircleTool from "@/features/Tools/CircleTool";
import EraserTool from "@/features/Tools/EraserTool";
import LineTool from "@/features/Tools/LineTool";

const ToolBar: React.FC = () => {
  return (
    <section className="h-12 bg-slate-500 drop-shadow-xl shadow-xl">
      <div className="flex justify-between m-auto items-center max-w-6xl">
        <div className="flex items-center">
          <button
            className="btn btn-ghost"
            onClick={() => ToolState.setTool(CanvasState.canvas ? new BrushTool(CanvasState.canvas) : null)}
          >
            <Brush />
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => ToolState.setTool(CanvasState.canvas ? new RectTool(CanvasState.canvas) : null)}
          >
            <Rect />
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => ToolState.setTool(CanvasState.canvas ? new CircleTool(CanvasState.canvas) : null)}
          >
            <Circle />
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => ToolState.setTool(CanvasState.canvas ? new EraserTool(CanvasState.canvas) : null)}
          >
            <Eraser />
          </button>
          <button
            className="btn btn-ghost"
            onClick={() => ToolState.setTool(CanvasState.canvas ? new LineTool(CanvasState.canvas) : null)}
          >
            <Line />
          </button>
          <input
            onChange={e => {
              ToolState.setFillColor(e.target.value);
            }}
            className="w-12 h-10  text-base bg-transparent border-none cursor-pointer"
            type="color"
          />
        </div>
        <div className="flex">
          <button onClick={() => CanvasState.undo()} className="btn btn-ghost">
            <Undo />
          </button>
          <button className="btn btn-ghost">
            <Redo />
          </button>
          <button className="btn btn-ghost">
            <Save />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToolBar;
