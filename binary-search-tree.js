class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if(this.root === null){
      this.root = new Node(val)
      return this
    }
    let current = this.root;

    while(true){
      if(val < current.val){
        if(current.left === null){
          current.left = new Node(val)
          return this;
        }else{
          current = current.left;
        }
      }else if(val > current.val){
        if(current.right === null){
          current.right = new Node(val)
        }else{
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if(this.root === null){
      this.root = new Node(val)
      return this
    }
    if(val < current.val){
      if(current.left === null){
        current.left = new Node(val)
        return this;
      }
      return this.insertRecursively(val,current.left)
    }
    else{
      if(current.right === null){
        current.right = new Node(val)
        return this;
      }
      return this.insertRecursively(val, current.right)
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let found = false;
    let current = this.root;

    if(current.val === val){
      return current
    }

    while(current && !found){
      if(val < current.val){
        current = current.left
      }
      else if(val > current.val){
        current = current.right
      }
      else{
        found = true;
      }
    }

    if(!found){
      return undefined
    }
    return current
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if(this.root === null){
      return undefined
    }
    if(val < current.val){
      if(current.left === null){
        return undefined
      }
      return this.findRecursively(val, current.left)
    }
    else if(val > current.val){
      if(current.right === null){
        return undefined
      }
      return this.findRecursively(val, current.right)
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let current = this.root;
    let info = [];

    function dfsPreOrderHelper(node){
      info.push(node.val)
      node.left && dfsPreOrderHelper(node.left)
      node.right && dfsPreOrderHelper(node.right)
    }
    dfsPreOrderHelper(current)
    return info;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let current = this.root;
    let info = [];

    function dfsInOrderHelper(node){
      node.left && dfsInOrderHelper(node.left)
      info.push(node.val)
      node.right && dfsInOrderHelper(node.right)
    }
    dfsInOrderHelper(current)
    return info;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let current = this.root;
    let info = [];

    function dfsPostOrderHelper(node){
      node.left && dfsPostOrderHelper(node.left)
      node.right && dfsPostOrderHelper(node.right)
      info.push(node.val)
    }
    dfsPostOrderHelper(current)
    return info;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let info = []
    let node = this.root;
    let arr = []

    arr.push(node)
    while(arr.length){
      node = arr.shift()
      info.push(node.val)
      if(node.left){
        arr.push(node.left)
      }
      if(node.right){
        arr.push(node.right)
      }
    }
    return info
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let parent = null;
    let rmNode = this.root;

    while(rmNode.val !== val){
      parent = rmNode;
      if(val < rmNode.val){
        rmNode = rmNode.left;
      }
      else{
        rmNode = rmNode.right;
      }
    }

    if(rmNode !== this.root){
      if(rmNode.left === null && rmNode.right === null){
        if(rmNode === parent.left){
          parent.left = null
        }
        else{
          parent.right = null
        }
      }
      else if(rmNode.left !== null && rmNode.right !== null){
        let rightParent = rmNode;
        let right = rmNode.right;
        if(right.left === null){
          right.left = rmNode.left
          if(parent.left === rmNode){
            parent.left = right
          }
          else{
            parent.right = right
          }
        }
        else{
          while(right.left !== null){
            rightParent = right;
            right = right.left;
          }
          if(parent.left === rmNode){
            parent.left.val = right.val
          }
          else{
            parent.right.val = right.val
          }
          if(right.right !== null){
            rightParent.left = right.right;
          }
          else{
            rightParent.left = null;
          }
        }
      }
      else{
        if(rmNode === parent.left){
          if(rmNode.right === null){
            parent.left = rmNode.left
          }
          else{
            parent.left = rmNode.right
          }
        }
        else{
          if(rmNode.right === null){
            parent.right = rmNode.left
          }
          else{
            parent.right = rmNode.right
          }
        }
      }
    }
    return rmNode
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(current = this.root) {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
