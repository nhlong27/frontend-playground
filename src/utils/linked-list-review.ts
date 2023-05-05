export class LinkedListNode<T> {
  data: T;
  next: LinkedListNode<T>| null;
  constructor(data: T){
    this.data = data;
    this.next = null;
  }
} 

export class LinkedList<T> {
  head: LinkedListNode<T> | null;
  tail: LinkedListNode<T> | null;
  length: number;
  constructor(){
    this.head=null;
    this.tail=null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  retrieveByIndex(index: number){
    if (index<0 || index>= this.length || !this.head){
      return null;
    }
    let currentNode = this.head;
    for (let i=0; i<index; i++){
      currentNode = currentNode.next!;
    }
    return currentNode
  }

  retrieveByValue(value: T) {
    let currentNode = this.head;
    while(currentNode){
      if (currentNode.data===value){
        break;
      }
      currentNode = currentNode.next
    }
    return currentNode;
  }

  insert(index: number, value: T){
    const newNode = new LinkedListNode(value);

    const nodeAtIndexBefore = this.retrieveByIndex(index-1);
    if (!nodeAtIndexBefore){
      this.head=newNode;
      this.tail=newNode;
    } else {
      if (index === 0){
        newNode.next = this.head;
        this.head = newNode;
      }
      else if (index === this.length){
        this.tail!.next = newNode;
        this.tail = newNode;
      } else{
        newNode.next = nodeAtIndexBefore.next;
        nodeAtIndexBefore.next = newNode;
      }
      this.length++;
    }
  }
}
