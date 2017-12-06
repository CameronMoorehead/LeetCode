// Merge two sorted linked lists and return it as a new list. The new list should be
// made by splicing together the nodes.

/**
*  * Definition for singly-linked list.
*   * function ListNode(val) {
*    *     this.val = val;
*     *     this.next = null;
*      * }
*       */
/**
*  * @param {ListNode} l1
*   * @param {ListNode} l2
*    * @return {ListNode}
*     */
const mergeTwoLists = (l1, l2) => {
    if (!l1) {
            return l2;
        }
    if (!l2) {
            return l1;
        }
    
    let list1 = l1;
    let list2 = l2;
    let currentHead = null;
    if (list1.val < list2.val) {
            currentHead = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            currentHead = new ListNode(list2.val);
            list2 = list2.next;
        }
    
    let returnHead = currentHead;
    
    while (list1 && list2) {
            let temp1 = list1.val;
            let temp2 = list2.val;
            if (temp1 <= temp2) {
                        currentHead.next = new ListNode(temp1);
                        currentHead = currentHead.next;
                        list1 = list1.next;
                    }
            if (temp2 <= temp1) {
                        currentHead.next = new ListNode(temp2);
                        currentHead = currentHead.next;
                        list2 = list2.next;
                    }
        }
    
    if (list1) {
            currentHead.next = list1;
        }
    if (list2) {
            currentHead.next = list2;
        }
    return returnHead;
};
