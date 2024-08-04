import { makeObservable, observable, action } from "mobx";

class CanvasState {
  canvas: HTMLCanvasElement | null = null;
  undoList: string[] = [];
  redoList: string[] = [];
  constructor() {
    makeObservable(this, {
      canvas: observable,
      setCanvas: action,
    });
  }

  setCanvas(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas;
  }

  pushToUndo(data: string) {
    this.undoList.push(data);
  }

  pushToRedo(data: string) {
    this.redoList.push(data);
  }

  undo() {
    const ctx = this.canvas?.getContext("2d");
    if (this.undoList.length > 0) {
      const dataUrl = this.undoList.pop();
      if (dataUrl) {
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
          if (this.canvas) {
            ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
            ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
          }
        };
      }
    } else {
      if (this.canvas) {
        ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }

  redo() {}
}

export default new CanvasState();
