class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.messages = []
  }
  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }

  sendMessage(message) {
    this.messages.push(message)
  }

  newMessage(message) {
    message.sentBy.push(this)
  }
}
class Message {
  constructor(filename) {
    this.filename = filename
    this.sentBy = []
  }
}

const kadri = new Person('kadri', 48)
const kubra = new Person('kubra', 28)
const serhat = new Person('serhat', 22)
const message = new Message('hello there')
serhat.sendMessage(message)
kubra.sendMessage(message)
kubra.newMessage(message)
console.log(kubra, kubra.messages[0].sentBy)
