class Node {
  public val;
  public next: any;

  constructor(val: string | number) {
    this.val = val;
    this.next = null;
  }
}

// ! Naive Way
// let tst = new Node('Hi');
// tst.next = new Node('Joe');
// tst.next.next = new Node('how');
// tst.next.next.next = new Node('are');
// console.log(tst);

class SinglyLinkedList {
  public tail: Node | null;
  public head: Node | null;
  public length;

  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }
  push(val: string | number) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();
console.log(list);
list.push('Hi');
list.push('Joe');
console.log(list);
