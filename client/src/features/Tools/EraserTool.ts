import BrushTool from "./BrushTool";

export default class EraserTool extends BrushTool {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  draw(x: number, y: number) {
    if (!this.mouseDown) return;
    if (this.ctx) {
      this.ctx.strokeStyle = "white";
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }
}
