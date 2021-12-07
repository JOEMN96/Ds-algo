class Node {
  public val: string;
  public next: Node | null;
  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

// ! Naive Way of Adding or pushing new Node
// let tst = new Node('Hi');
// tst.next = new Node('Joe');
// tst.next.next = new Node('how');
// tst.next.next.next = new Node('are');
// console.log(tst);

class SinglyLinkedList {
  public head: Node | null;
  public tail: Node | null;
  public length: number;

  constructor() {
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  public push(val: string) {
    let nwNode = new Node(val);
    if (!this.head) {
      this.head = nwNode;
      this.tail = nwNode;
    } else {
      this.tail.next = nwNode;
      this.tail = nwNode;
    }
    this.length++;
    return this;
  }

  pop(): undefined | Node {
    if (!this.head) return undefined;
    let curr = this.head;
    let newTail = curr;

    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length < 1) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
}

let list = new SinglyLinkedList();

list.push('Hi');
list.push('Joe');
list.push('Mon');
list.push('Pop');
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());

// console.log(list);
