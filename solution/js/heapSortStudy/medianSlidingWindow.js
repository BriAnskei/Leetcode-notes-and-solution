class CustomHeap {
  constructor(compare) {
    this.data = [];
    this.compare = compare;
  }

  size() {
    return this.data.length;
  }

  inspct() {
    return this.data;
  }

  peek() {
    return this.data[0];
  }

  push(val) {
    this.data.push(val);
    this._siftUp();
  }

  pop() {
    if (this.size() === 0) return null;
    const top = this.data[0];
    const end = this.data.pop();
    if (this.size() > 0) {
      this.data[0] = end;
      this._siftDown();
    }
    return top;
  }

  _siftUp() {
    let idx = this.data.length - 1;
    const element = this.data[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.data[parentIdx];

      if (this.compare(element, parent)) {
        this.data[idx] = parent;
        idx = parentIdx;
      } else break;
    }
    this.data[idx] = element;
  }

  _siftDown() {
    let idx = 0;
    const length = this.data.length;
    const element = this.data[0];

    while (true) {
      let leftIdx = idx * 2 + 1;
      let rightIdx = idx * 2 + 2;
      let swapIdx = -1;

      if (leftIdx < length) {
        if (this.compare(this.data[leftIdx], element)) {
          swapIdx = leftIdx;
        }
      }

      if (rightIdx < length) {
        if (
          (swapIdx === -1 && this.compare(this.data[rightIdx], element)) ||
          (swapIdx !== -1 &&
            this.compare(this.data[rightIdx], this.data[swapIdx]))
        ) {
          swapIdx = rightIdx;
        }
      }

      if (swapIdx === -1) break;
      this.data[idx] = this.data[swapIdx];
      idx = swapIdx;
    }

    this.data[idx] = element;
  }
}

class SlidingWindowMedian {
  constructor(k) {
    this.k = k;
    this.small = new CustomHeap((a, b) => a > b);
    this.large = new CustomHeap((a, b) => a < b);
    this.delayed = new Map();
    this.smallSize = 0;
    this.largeSize = 0;
  }

  addNum(num) {
    if (this.small.size() === 0 || num <= this.small.peek()) {
      this.small.push(num);
      this.smallSize++;
    } else {
      this.large.push(num);
      this.largeSize++;
    }
    this._rebalance();
  }

  removeNum(num) {
    this.delayed.set(num, (this.delayed.get(num) || 0) + 1);

    if (this.small.size() > 0 && num <= this.small.peek()) {
      this.smallSize--;
      if (num === this.small.peek()) this._prune(this.small);
    } else {
      this.largeSize--;
      if (this.large.size() > 0 && num === this.large.peek())
        this._prune(this.large);
    }
    this._rebalance();
  }

  _prune(heap) {
    while (heap.size() > 0) {
      const num = heap.peek();
      if (this.delayed.has(num)) {
        this.delayed.set(num, this.delayed.get(num) - 1);
        if (this.delayed.get(num) === 0) this.delayed.delete(num);
        heap.pop();
      } else break;
    }
  }

  _rebalance() {
    if (this.smallSize > this.largeSize + 1) {
      this.large.push(this.small.pop());
      this.smallSize--;
      this.largeSize++;
      this._prune(this.small);
    } else if (this.smallSize < this.largeSize) {
      this.small.push(this.large.pop());
      this.smallSize++;
      this.largeSize--;
      this._prune(this.large);
    }
  }

  findMedian() {
    console.log("finding medin: ", this.small.inspct(), this.large.inspct());
    if (this.k % 2 === 1) {
      return this.small.peek();
    } else {
      return (this.small.peek() + this.large.peek()) / 2;
    }
  }
}

function medianSlidingWindow(nums, k) {
  const mw = new SlidingWindowMedian(k);
  const res = [];

  for (let i = 0; i < k; i++) {
    mw.addNum(nums[i]);
  }
  mw.findMedian();

  for (let i = k; i < nums.length; i++) {
    mw.addNum(nums[i]);
    mw.removeNum(nums[i - k]);
    res.push(mw.findMedian());
  }

  return res;
}
