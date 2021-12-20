class Node {
  public val: number;
  public next: null | Node;
  public prev: null | Node;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  public tail: Node | null;
  public head: Node | null;
  public length: number;
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }
}
