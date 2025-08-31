class MinStack {
  constructor() {
    this.Stack = [];
    this.Min_Stack = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.Stack.push(val
    if (
      this.Min_Stack.length > 0 &&
      this.Min_Stack[this.Min_Stack.length - 1] <= val
    ) {
      this.Min_Stack.push(this.Min_Stack[this.Min_Stack.length - 1]);
    } else {
      this.Min_Stack.push(val);
    }
  }

  /**
   * @return {void}
   */
  pop() {
    this.Stack.pop();
    this.Min_Stack.pop();
  }

  /**
   * @return {number}
   */
  top() {
    return this.Stack[this.Stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    this.Min_Stack[this.Min_Stack.length - 1];
  }
}
