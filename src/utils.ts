export function arbitrary(array: Array<string>) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export function collect_variables(expression: string) {
  return expression.match(/[a-z_]\w*(?!\w*\s*\()/ig);
}
export function arb_set(set: Set<any>) {
  for (let e of set) {
    return e;
  }
}
export function allSolutions(assignment: {}, allSolutions: Set<{}>) {
  allSolutions.add(assignment);
}

let solproc = {
  allSolutions: new Set(),
  processSolution: function (assignment: {}) {
    this.allSolutions.add(assignment);
  },
};
