class LinkedListNode <T> {
  value: T;
  next: null | LinkedListNode<T>;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: null | LinkedListNode<T>;
  tail: null | LinkedListNode<T>;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  retrieveByValue(value: T) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }
  retrieveByIndex(index: number) {
    if (index < 0 || index >= this.length || !this.head) {
      return null;
    }

    let currentNode: null | LinkedListNode<T> = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      currentNode = currentNode?.next ?? null;
      currentIndex++;
    }

    return currentNode;
  }

  insert(index: number, value: T) {
    if (index < 0 || index > this.length || !this.head) {
      return null;
    }

    const node = new LinkedListNode(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;

      if (!this.tail) {
        this.tail = node;
      }
    } else if (index === this.length) {
      this.tail!.next = node;
      this.tail = node;
    } else {
      const prevNode = this.retrieveByIndex(index - 1);
      node.next = prevNode!.next;
      prevNode!.next = node;
    }

    this.length++;

    return node;
  }

  append(value: T) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }

    this.length++;
  }

  prepend(value: T) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  delete(value: T) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    if (this.head.value === value) {
      deletedNode = this.head;

      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next;
          currentNode.next = deletedNode.next;

          if (deletedNode === this.tail) {
            this.tail = currentNode;
          }

          break;
        }

        currentNode = currentNode.next;
      }
    }
    if (deletedNode) {
      this.length--;
    }

    return deletedNode;
  }

  toArray() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }
}

export {LinkedList, LinkedListNode}