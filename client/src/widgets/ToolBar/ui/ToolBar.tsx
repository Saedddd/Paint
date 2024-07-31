import React from "react";

import Brush from "@/shared/icons/Brush";
import Circle from "@/shared/icons/Circle";
import Eraser from "@/shared/icons/Eraser";
import Line from "@/shared/icons/Line";
import Palette from "@/shared/icons/Palette";
import Rect from "@/shared/icons/Rect";
import Undo from "@/shared/icons/Undo";
import Redo from "@/shared/icons/Redo";
import Save from "@/shared/icons/Save";

const ToolBar: React.FC = () => {
  return (
    <section className="h-12 bg-slate-500 drop-shadow-xl shadow-xl">
      <div className="flex justify-between m-auto items-center max-w-6xl">
        <div className="flex">
          <button className="btn btn-ghost">
            <Brush />
          </button>
          <button className="btn btn-ghost">
            <Rect />
          </button>
          <button className="btn btn-ghost">
            <Circle />
          </button>
          <button className="btn btn-ghost">
            <Eraser />
          </button>
          <button className="btn btn-ghost">
            <Line />
          </button>
          <button className="btn btn-ghost">
            <Palette />
          </button>
        </div>
        <div className="flex">
          <button className="btn btn-ghost">
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
