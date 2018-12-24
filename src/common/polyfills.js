/* eslint-disable */

Object.defineProperty(Array.prototype, 'takeUntil', {
  value: function(selector) {
    let i = 0;
    fn = !selector
      ? () => true
      : typeof selector !== 'function'
      ? x => x === selector
      : selector;
    while (!fn(this[i]) && i++ < this.length);
    return this.slice(0, i + 1);
  }
});
