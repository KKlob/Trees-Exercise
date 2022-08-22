/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    // covers empty trees
    if (!this.root) {
      return 0;
    }

    const stack = [...this.root.children];
    let sum = this.root.val;

    while (stack.length) {
      let current = stack.pop();
      sum += current.val;
      if (current.children.length) {
        for (let child of current.children) {
          stack.push(child);
        }
      }
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) {
      return 0;
    }

    const stack = [...this.root.children];
    let sum = 0;
    if (this.root.val % 2 == 0) {
      sum++;
    }

    while (stack.length) {
      let current = stack.pop();
      if (current.val % 2 == 0) {
        sum++;
      }
      if (current.children.length) {
        for (let child of current.children) {
          stack.push(child);
        }
      }
    }

    return sum;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) {
      return 0;
    }

    const stack = [...this.root.children];
    let sum = 0;
    if (this.root.val > lowerBound) sum++;

    while (stack.length) {
      let current = stack.pop();
      if (current.val > lowerBound) sum++;
      if (current.children.length) {
        for (let child of current.children) {
          stack.push(child);
        }
      }
    }

    return sum;
  }
}

module.exports = { Tree, TreeNode };
