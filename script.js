const LinkedListFactory = (initialNode) => {
  let head = { value: initialNode.value, nextNode: initialNode.nextNode };

  const giveList = () => {
    return head;
  };

  const getLast = () => {
    let lastNode = head;
    if (lastNode) {
      while (lastNode.nextNode) {
        lastNode = lastNode.nextNode;
      }
    }
    return lastNode;
  };

  const append = (node) => {
    getLast().nextNode = node;
  };

  const prepend = (node) => {
    let temp = head;
    node.nextNode = temp;
    head = node;
  };

  return { head, append, prepend, giveList };
};

const NodeFactory = (value = null, nextNode = null) => {
  return { value, nextNode };
};

let node1 = NodeFactory("This is node 1");
let node2 = NodeFactory("This is node 2");
let node3 = NodeFactory("This is node 3");
let node4 = NodeFactory("This is node 4");

let list = LinkedListFactory(node1);
console.log(list.head);

list.append(node2);
console.log(list.head);

// list.append(node3);
// console.log(list.head);

// list.prepend(node4);
// console.log(list.head);
// console.log(list.head.value.toString());
