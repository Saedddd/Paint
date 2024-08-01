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
    this.tool = tool;
  }
}

export default new ToolState();
