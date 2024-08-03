import Tool from "./Tool";

export default class EraserTool extends Tool {
  mouseDown: boolean;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.mouseDown = false;
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      this.draw(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
    }
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    this.ctx?.beginPath();
    this.ctx?.moveTo(e.pageX - this.canvas.offsetLeft, e.pageY - this.canvas.offsetTop);
  }

  mouseUpHandler() {
    this.mouseDown = false;
    this.ctx?.closePath();
  }

  draw(x: number, y: number) {
    if (!this.mouseDown) return;
    const size = 10;

    this.ctx?.clearRect(x - size / 2, y - size / 2, size, size);
  }
}
