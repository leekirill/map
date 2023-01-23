import onChahge from "on-change";

export default class State {
  constructor() {
    const state = {
      places: [],
      value: "",
    };

    this.state = onChahge(state, this.update);
  }

  update(path, current, prev) {
    console.log(`${path} changed from ${prev.length} to ${this.value}`);
  }
}
