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
  push(val: number) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  pop(): Node | undefined {
    if (this.length < 1) return undefined;
    let lastNode = this.tail;
    this.tail.prev.next = null;
    this.length--;
    return lastNode;
  }

  print(): void {
    let arr: number[] = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
console.log(list.pop());
console.log(list.pop());

list.print();
