import { makeObservable, observable, action } from "mobx";

class CanvasState {
  canvas: HTMLCanvasElement | null = null;
  constructor() {
    makeObservable(this, {
      canvas: observable,
      setCanvas: action,
    });
  }

  setCanvas(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas;
  }
}

export default new CanvasState();
