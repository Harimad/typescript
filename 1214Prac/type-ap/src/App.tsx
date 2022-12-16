import React from 'react'

const App = () => {
  // 1번
  // interface EmployeeInterface {
  //   name: string
  //   age: number
  //   addr: string
  //   job: string
  //   salary: number
  // }

  // let person: EmployeeInterface = {
  //   name: 'Kim',
  //   age: 20,
  //   addr: 'Seoul',
  //   job: 'teacher',
  //   salary: 100,
  // }

  // function employeeInfo(obj: EmployeeInterface): string {
  //   return `
  //   이름: ${obj.name}
  //   나이: ${obj.age}
  //   주소: ${obj.addr}
  //   직업: ${obj.job}
  //   급여: ${obj.salary}
  //   `
  // }

  // console.log(employeeInfo(person))

  // 2번
  // interface Person {
  //   name: string
  //   age: number
  //   addr: string
  //   job: string
  //   salary?: number
  //   info: () => string
  // }

  // class Employee {
  //   name: string
  //   age: number
  //   addr: string
  //   job: string
  //   salary: number
  //   constructor(
  //     name: string,
  //     age: number,
  //     addr: string,
  //     job: string,
  //     salary: number = 5000
  //   ) {
  //     this.name = name
  //     this.age = age
  //     this.addr = addr
  //     this.job = job
  //     this.salary = salary
  //   }

  //   info(): string {
  //     return `
  //     이름: ${this.name}
  //     나이: ${this.age}
  //     주소: ${this.addr}
  //     직업: ${this.job}
  //     급여: ${this.salary}
  //     `
  //   }
  // }

  // let employee1: Person = new Employee('Lee', 20, 'Seoul', 'teacher', 100)
  // let employee2: Person = new Employee('Kim', 15, 'Jeju', 'student')

  // console.log(employee1.info())
  // console.log(employee2.info())

  // 3번
  // class Employee {
  //   name: string
  //   age: number
  //   addr: string
  //   job: string
  //   salary?: number
  //   private _salary: number
  //   constructor(
  //     name: string,
  //     age: number,
  //     addr: string,
  //     job: string,
  //     salary: number = 5000
  //   ) {
  //     this.name = name
  //     this.age = age
  //     this.addr = addr
  //     this.job = job
  //     this._salary = salary
  //   }

  //   set setSalary(salary: number) {
  //     this._salary = salary
  //   }

  //   get getSalary(): string {
  //     return `직원 급여: ${this._salary}`
  //   }
  // }

  // let person1 = new Employee('kim', 20, 'seoul', 'teacher', 20000)
  // let person2 = new Employee('kim', 20, 'seoul', 'teacher')
  // console.log(person1.getSalary)
  // console.log(person2.getSalary)

  // person1.setSalary = 15000
  // console.log(person1.getSalary)

  // 4 번
  // abstract class Product {
  //   name: string
  //   constructor(name: string) {
  //     this.name = name
  //   }
  //   turnOn(): string {
  //     return `${this.name}을 킵니다.`
  //   }
  //   turnOff(): string {
  //     return `${this.name}을 끕니다.`
  //   }
  //   abstract info(): string
  // }

  // class Tv extends Product {
  //   info(): string {
  //     return `${this.name}을 조작합니다.`
  //   }

  //   volumnUp(): string {
  //     return `${this.name} 볼륨을 높입니다.`
  //   }
  //   volumnDown(): string {
  //     return `${this.name} 볼륨을 내립니다.`
  //   }
  // }

  // let tv = new Tv('TV')

  // console.log(tv.info())
  // console.log(tv.turnOn())
  // console.log(tv.turnOff())
  // console.log(tv.volumnUp())
  // console.log(tv.volumnDown())

  // class 냉장고 extends Product {
  //   info(): string {
  //     return `${this.name}을 조작합니다.`
  //   }
  // }

  // let refrigerator = new 냉장고('냉장고')
  // console.log(refrigerator.turnOn())
  // console.log(refrigerator.turnOff())

  return <div>1</div>
}

export default App
