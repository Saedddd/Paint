import Tool from "./Tool";

export default class CircleTool extends Tool {
  mouseDown: boolean;
  startX: number;
  startY: number;
  saved: string;
  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.mouseDown = false;
    this.startX = 0;
    this.startY = 0;
    this.saved = "";
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown) {
      if (e.target instanceof HTMLCanvasElement) {
        const currentX = e.pageX - e.target.offsetLeft;
        const currentY = e.pageY - e.target.offsetTop;
        const radius = Math.sqrt(Math.pow(currentX - this.startX, 2) + Math.pow(currentY - this.startY, 2));
        this.draw(this.startX, this.startY, radius);
      }
    }
  }

  mouseDownHandler(e: MouseEvent) {
    this.mouseDown = true;
    if (e.target instanceof HTMLCanvasElement) {
      this.startX = e.pageX - e.target.offsetLeft;
      this.startY = e.pageY - e.target.offsetTop;
      this.saved = this.canvas.toDataURL();
      this.ctx?.beginPath();
    }
  }

  mouseUpHandler() {
    this.mouseDown = false;
    this.ctx?.closePath();
  }

  draw(x: number, y: number, radius: number) {
    if (!this.mouseDown) return;
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      // Рисуем круг
      this.ctx?.beginPath();
      this.ctx?.arc(x, y, radius, 0, Math.PI * 2);
      this.ctx?.fill(); // Заполняем круг цветом (если требуется)
      this.ctx?.stroke(); // Обводим круг
      this.ctx?.closePath();
    };
  }
}
