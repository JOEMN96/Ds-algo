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
    } else {
      let oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
    }
    this.length++;
    return this;
  }

  get(index: number): Node | undefined {
    if (index >= this.length || index < 0) {
      return undefined;
    }
    let i = 0;
    let curr = this.head;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    return curr;
  }
  // using method 1
  set(index: number, val: string): boolean {
    let nodeToReplace = this.get(index);
    if (!nodeToReplace) return false;
    nodeToReplace.val = val;
    return true;
  }

  set2(index: number, val: string): boolean {
    if (index < 0 || index >= this.length) return false;
    let i = 0;
    let curr = this.head;
    while (i !== index) {
      curr = curr.next;
      i++;
    }
    curr.val = val;
    return true;
  }
  // Naive way (My own way)
  insert(val: string, index: number): boolean {
    if (index < 0 || index > this.length) return false;
    let curr = this.head;
    let newNode = new Node(val);
    let i = 0;
    let prevNode: Node;
    let nextNode: Node;
    while (i < this.length) {
      if (index == i) {
        nextNode = curr;
      } else if (i == index - 1) {
        prevNode = curr;
      }
      curr = curr.next;
      i++;
    }
    if (nextNode == undefined) {
      prevNode.next = newNode;
    } else if (prevNode == undefined) {
      let curr = this.head;
      this.head = newNode;
      this.head.next = curr;
    }
    if (prevNode && nextNode) {
      let nxt = nextNode;
      prevNode.next = newNode;
      prevNode.next.next = nxt;
    }
    this.length++;
    return true;
  }
  //  Proper Way
  insert2(val: string, index: number): boolean {
    if (index > this.length || index < 0) return false;
    if (index == this.length) return !!this.push(val);
    if (index == 0) return (this.unShift(val) as unknown) as boolean;
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

let list = new SinglyLinkedList();

// list.push('Hi');
// list.push('Joe');
// list.push('New');
// list.shift();
// list.shift();
list.unShift('unshift');
list.push('New2');
list.push('New3');
// list.unShift('unshift2');
// console.log(list.get(1));
// console.log(list.set(2, 'setVal'));
// console.log(list.set2(2, 'setVal2'));

// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop());
// console.log(list.pop2());
// console.log(list.pop2());
// console.log(list.pop2());
// console.log(list.pop2());
// console.log(list.length);
console.log(list.insert2('heyD', 0));

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
