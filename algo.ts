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
  private length: number;

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

  //  My test code
  pop2(): undefined | Node {
    if (!this.head) return undefined;
    let curr = this.head;
    let newTail = curr;

    while (curr.next) {
      newTail = curr;
      curr = curr.next;
    }

    this.head = newTail;
    this.head.next = null;
    this.length--;

    if (this.length < 1) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  shift(): undefined | Node {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length < 1) {
      this.tail = null;
    }
    return currHead;
  }

  unShift(val: string): SinglyLinkedList {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.length++;
    return this;
  }
}

let list = new SinglyLinkedList();

list.push('Hi');
list.push('Joe');
list.push('Mon');
list.push('Pop');
list.shift();
list.shift();
list.shift();
list.shift();
list.shift();
list.push('New');
list.push('New2');
list.shift();
list.shift();
list.unShift('Hey');

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop2());
// console.log(list.pop2());
// console.log(list.pop2());
// console.log(list.pop2());
// console.log(list.length);

console.log(list);

// class Node2 {
//   public val: string;
//   public next: null | Node2;
//   constructor(val: string) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class Singly2 {
//   public head: Node2 | null;
//   public tail: Node2 | null;
//   public length: number;
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(val: string) {
//     let nwNode = new Node2(val);
//     if (!this.head) {
//       this.head = nwNode;
//       this.tail = nwNode;
//     } else {
//       this.tail.next = nwNode;
//       this.tail = nwNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop(): undefined | Node2 {
//     if (!this.head) return undefined;
//     let curr = this.head;
//     let newTail = curr;
//     while (curr.next) {
//       newTail = curr;
//       curr = curr.next;
//     }
//     this.length--;
//     this.tail = newTail;
//     this.tail.next = null;
//     if (this.length < 1) {
//       this.head = null;
//       this.tail = null;
//     }
//     return curr;
//   }
// }

// let mylist = new Singly2();
// mylist.push('1');
// mylist.push('2');
// mylist.push('3');

// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist.pop());
// console.log(mylist);
