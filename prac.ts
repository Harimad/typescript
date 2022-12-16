// type Human = {
//   name: string
// }

// type Animal = {
//   legs: number
// }
// type NewObj = Human & Animal

// let obj: NewObj = {
//   name: 'kim',
//   legs: 2,
// }

// interface Test {
//   address: string
// }

// interface PersonInterface {
//   name: string
//   age: number
// }
// class Person implements PersonInterface {
//   name: string
//   age: number

//   constructor(name: string, age: number) {
//     this.name = name
//     this.age = age
//   }
// }

// let p1 = new Person('harimad', 20)

//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
// 추상 클래스
// abstract class 추상동물 {
//   species: string
//   legs: number

//   constructor(species: string, legs: number) {
//     this.species = species
//     this.legs = legs
//   }
//   info(): void {
//     console.log(`species: ${this.species}, legs: ${this.legs}`)
//   }

//   abstract say(): void
// }

// class 동물 extends 추상동물 {
//   say() {
//     console.log(`${this.species} 입니다.`)
//   }
// }

// let lion = new 동물('사자', 4)
// lion.say()
// lion.info()

// let dog = new 동물('고양이', 2)
// dog.say()
// dog.info()

// ------

interface EmployeeInterface {
  name: string
  age: number
  addr: string
  job: string
  salary: number
}

let person: EmployeeInterface = {
  name: 'Kim',
  age: 20,
  addr: 'Seoul',
  job: 'teacher',
  salary: 100,
}

person
