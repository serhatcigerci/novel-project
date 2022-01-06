class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
    this.bio = ''
    this.photos = []
    this.likes = []
  }

  greet(person) {
    console.log(`Hello ${person.name}, this is ${this.name}`)
  }

  addPhoto(photo) {
    this.photos.push(photo)
  }

  likePhoto(photo) {
    this.likes.push(photo)
    photo.likedBy.push(this)
  }

  get profile() {
    return `
       # ${this.name} (${this.age})
        Bio: ${this.bio}
        ## Photos (${this.photos.length})
        ${this.photos
          .map(photo => `### ${photo.filename}, ${photo.likedBy.map(person => person.name).join(', ')}`)
          .join('\n')}`
  }

  set profile(newValue) {
    throw new Error('profile is only a getter. You cant override it')
  }
}

module.exports = Person
