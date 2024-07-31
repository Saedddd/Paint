import React from "react";

const Canvas: React.FC = () => {
  return (
    <section className="flex h-svh items-center justify-center">
      <canvas className="w-[800px] h-[600px] border-2 border-slate-50"></canvas>
    </section>
  );
};

export default Canvas;
