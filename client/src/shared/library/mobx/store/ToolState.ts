import Tool from "@/features/Tools/Tool";
import { makeObservable, observable, action } from "mobx";

class ToolState {
  tool: Tool | null = null;
  constructor() {
    makeObservable(this, {
      tool: observable,
      setTool: action,
    });
  }

  setTool(tool: Tool | null) {
    if(this.tool){
      this.tool = tool;
    }
  }

  setFillColor(color: string) {
    if (this.tool) {
      this.tool.fillColor = color;
    }
  }

  setLineWidth(width: number) {
    if (this.tool) {
      this.tool.lineWidth = width;
    }
  }
}

export default new ToolState();
