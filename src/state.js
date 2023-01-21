import onChahge from "on-change";

export default class State {
  constructor() {
    const state = {
      places: [],
    };

    this.state = onChahge(state, this.update);
  }

  update(path, current, prev) {
    return;
    // console.log(`${path} changed from ${prev.length} to ${current.length}`);
  }
}
