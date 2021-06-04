// eslint-disable-next-line
import { Node } from './class_node.js'

class DoubleLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(value) {
    const node = new Node(value)

    if (!this.head && !this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.previous = this.tail
      this.tail = node
    }
    return this
  }

  getHead() {
    return console.log(this.head.data)
  }

  getTail() {
    return console.log(this.tail.data)
  }

  traverse(order = true) {
    let currentNode = this.head
    const nodes = []

    while (currentNode) {
      nodes.push(currentNode)
      currentNode = currentNode.next
    }

    if (order) {
      nodes.forEach((item) => console.log(item.data))
    } else {
      nodes.reverse().forEach((item) => console.log(item.data))
    }
  }

  getNode(value) {
    return this.findNode(value, this.head)
  }

  findNode(value, node) {
    if (!node) {
      return null
    } if (node.data === value) {
      return node
    }

    return this.findNode(value, node.next)
  }

  addAfter(value, parentNode) {
    const parentValue = this.getNode(parentNode.data)
    const newNode = new Node(value)

    if (parentValue === null) {
      return this
    }

    if (parentValue.next !== null) {
      parentValue.next.previous = newNode
      newNode.next = parentValue.next
    } else {
      this.tail = newNode
      console.log(this.tail)
    }

    newNode.previous = parentValue
    parentValue.next = newNode

    return this
  }

  delete(value) {
    const currNode = this.getNode(value)

    if (currNode === null) {
      return this
    }

    if (currNode.next !== null) {
      currNode.next.previous = currNode.previous
    } else {
      currNode.next = null
      this.tail = currNode.previous
    }
    if (currNode.previous !== null) {
      currNode.previous.next = currNode.next
    } else {
      currNode.previous = null
      this.head = currNode.next
    }

    return this
  }

  isExist(value) {
    return console.log(!!this.getNode(value))
  }
}

const dll = new DoubleLinkedList()

dll.add('two').add('one').add('three').add('four')
dll.traverse() // two -> one -> three -> four
dll.traverse(true) // two -> one -> three -> four
dll.traverse(false) // four -> three -> one -> two

dll.getHead() // Node со значением === 'two'
dll.getTail() // Node со значением === 'four'

const parentNode = dll.getNode('one')
dll.addAfter('ten', parentNode)
dll.traverse() // two -> one -> ten -> three -> four

dll.delete('one')
dll.delete('three')
dll.traverse() // two -> ten -> four

dll.isExist('ten') // true
dll.isExist('one') // false
