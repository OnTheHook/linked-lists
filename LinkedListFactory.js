//linked list factory function
const LinkedListFactory = (initialNode) => {
  //declare initial value of the list
  let head = initialNode;
  let listLength = 1;
  //method to return list
  const giveList = () => {
    return head;
  };

  //method to return last node in list
  const getLast = () => {
    let lastNode = head;
    if (lastNode) {
      while (lastNode.nextNode) {
        lastNode = lastNode.nextNode;
      }
    }
    return lastNode;
  };

  //method to append node to the end of the list
  const append = (node) => {
    getLast().nextNode = node;
    listLength += 1;
  };

  function prepend(node) {
    let temp = this.head; // temp points to the old head
    this.head = node; // overwrite pointer to head on list
    this.head.nextNode = temp; // point to old head
    head = this.head; // keep head and this.head in sync
    listLength += 1;
  }

  const size = () => {
    return listLength;
  };

  const first = () => {
    return head.value;
  };

  const tail = () => {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.nextNode) {
        lastNode = lastNode.nextNode;
      }
    }
    return lastNode;
  };

  const at = (index) => {
    console.log(index);
    if (index < 0 || index > listLength - 1) {
      return;
    }
    let returnNode = head;
    console.log(returnNode);
    for (let i = 0; i < index; i++) {
      returnNode = returnNode.nextNode;
    }
    return returnNode;
  };

  function pop() {
    console.log(size());
    if (size() <= 1) {
      console.log(this);
      this.head = null;
      head = this.head;
      return;
    }
    let temp = head;
    for (let i = 0; i < listLength - 1; i++) {
      if (temp.nextNode.nextNode === null) {
        temp.nextNode = null;
        listLength -= 1;
        return;
      }
      temp = temp.nextNode;
    }
  }
  const contains = (value) => {
    let testNode = head;
    while (testNode) {
      if (testNode.value === value) {
        return true;
      }
      testNode = testNode.nextNode;
    }
    return false;
  };
  const find = (value) => {
    if (!head) {
      return null;
    }
    let testNode = head;
    let index = 0;
    while (testNode) {
      if (testNode.value === value) {
        return index;
      }
      testNode = testNode.nextNode;
      index += 1;
    }
    return null;
  };

  const toString = () => {
    let output = "";
    let current = head;
    while (current) {
      output = `${output}(${current.value}) -> `;
      current = current.nextNode
    }
    output = output + "null"
    return output;
  };

  return {
    head,
    append,
    prepend,
    giveList,
    size,
    first,
    getLast,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

//node factory function to create data nodes
const NodeFactory = (value = null, nextNode = null) => {
  return { value, nextNode };
};

//creating test nodes
let node1 = NodeFactory("This is node 1");
let node2 = NodeFactory("This is node 2");
let node3 = NodeFactory("This is node 3");
let node4 = NodeFactory("This is node 4");

let list = LinkedListFactory(node1);
console.log(list.toString())

list.append(node2);

console.log(list.toString())

list.prepend(node3);
console.log(list.toString())

console.log(list.at(1));

list.pop();

console.log(list.toString())

list.pop();

console.log(list.toString())

list.pop()

console.log(list.toString())

list.prepend(node2);

list.prepend(node1);

console.log(list.toString())

console.log(list.contains("This is node 1"));
console.log(list.contains("Not in list!"));
console.log(list.contains("This is node 3"));

console.log(list.find("This is node 2"));
console.log(list.find("This is not a node"));
console.log(list.find("This is node 1"));
console.log(list.find("This is not a node"));

console.log(list.toString())
