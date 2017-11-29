const addTwoNumbers = (l1, l2) => {

  let result = null;
  let last = null;
  let carry = 0;

  while (l1 || l2 || carry > 0) {
    let first = !l1 ? 0 : l1.val;
    let second = !l2 ? 0 : l2.val;
    let sum = first + second + carry;
    let pNew = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    if (!result) {
      result = pNew;
    } else {
      last.next = pNew;
    }

    last = pNew;
    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  return result;
};
