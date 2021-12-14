class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteNode(root: ListNode | null): void {
  let next = root.val;
  while (next) {
    console.log(next);
    next = root.val;
  }
}

let list3 = new ListNode(2, null);

let list2 = new ListNode(1, list3);

deleteNode(list2);
