import ToolState from "@/shared/library/mobx/store/ToolState";
import React from "react";

const SettingBar: React.FC = () => {
  return (
    <section className="h-14 flex items-center bg-slate-500 shadow-xl">
      <div className="flex items-center m-auto gap-3 max-w-6xl">
        <label htmlFor="line-width" className="text-slate-200">
          Толщина линии:
        </label>
        <input
          onChange={e => ToolState.setLineWidth(Number(e.target.value))}
          id="line-width"
          type="number"
          placeholder="1"
          min={1}
          max={50}
          className="input input-bordered input-primary text-center w-full max-w-16 "
        />
      </div>
    </section>
  );
};

export default SettingBar;
