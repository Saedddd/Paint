import React from "react";

const SettingBar: React.FC = () => {
  return (
    <section className="h-14 flex items-center bg-slate-500 shadow-xl">
      <div className="flex items-center m-auto gap-3 max-w-6xl">
        <h1 className="text-slate-200">Толщина линии:</h1>
        <input
          type="number"
          placeholder="0"
          className="input input-bordered input-primary text-center w-full max-w-16 "
        />
      </div>
    </section>
  );
};

export default SettingBar;
