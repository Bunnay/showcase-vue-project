class Computer {
  public name: string

  constructor(name: string) {
    this.name = name
  }

  get fullName() {
    return this.name
  }
}

const test = new Computer('hi')
console.log(test)
