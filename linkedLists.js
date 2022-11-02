class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// ListNode is the class for the individual node in your linked list

class LinkedList {
  constructor () {
    this.head = null
  }

  // LinkedList is the class that contains the very beginning of the Linked List (the head)

  empty() {
    return this.head === null
  }

  // returns true if the head of the linked list is empty

  insertEnd(value) {
    let newNode = new ListNode(value);
    let walker = this.head;
    while (walker.next) {
      walker = walker.next
    }
    walker.next = newNode
  }

  // inserts a node at the end of our linked list. Note that this example is O(n) because we do not know the value of the last node of the linked list.

  insert (value) {
    if (this.empty()) {
      this.head = new ListNode(value)
    } else {
      this.insertEnd()
    }
  }

  // Inserts a new node to the beginning of the linked list. If the linked list is not empty, it automatically inserts it at the end.



  insertHead(value) {
    let newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode
  }

  // Inserts a new node to the beginning of the linked list -- BEFORE THE HEAD --. This assumes that the head already exists!

  insertBetween(prevNode, value) {
    let newNode = new ListNode(value);
    prevNode.next = newNode;
    newNode.next = prevNode.next
  }

  // Inserts a new node in between two other nodes that are already known. To find these you might need a search algorithm or something similar!
  
}

