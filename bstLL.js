// BST => BST

const bstLL = root => {
  if (!root) {
    return null;
  }

  let queue = new Queue();
  queue.enqueue(root);


  while(queue.getLength()) {
    let n = queue.getLength();
    let i = 0;

    while (0 < n) {
      let item = queue[n];
      console.log(item);
      n--;
    }



  }
};
