class User<T> {
  constructor(public name: string, public age: number, public phone: T) {}
}

const user1: User<number> = new User('lee', 20, 1234)
const user2: User<string> = new User('kim', 22, '1234')

/////////////////////////////////////////////////////////

interface Animal {
  name: string
  age: number
}

let data = '{"name": "dog", "age": 1}'

function func(x: string): object {
  return JSON.parse(x)
}
func(data)
//

function func2<T>(x: string): T {
  return JSON.parse(x)
}
func2<Animal>(data)

/////////////////////////////////////////////////////////

class Person<T> {
  value: T
  constructor(a: T) {
    this.value = a
  }
}
let a = new Person<string>('어쩌구')
a.value

let b = new Person<number>(1)
b.value

let c = new Person<string[]>(['lee', 'kim'])
c.value

/////////////////////////////////////////////////////////

// interface Arr {
//   sort
// }

function printArray<T>(arr: T[]): T[] {
  return arr.reverse()
}
printArray<number>([1, 2, 3, 4, 5])

printArray<string>(['a', 'b', 'c'])
