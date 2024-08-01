import { makeObservable, observable, action } from "mobx";

class ToolState {
  tool: string | null = null;
  constructor() {
    makeObservable(this, {
      tool: observable,
      setTool: action,
    });
  }

  setTool(tool: string) {
    this.tool = tool;
  }
}

export default new ToolState();
