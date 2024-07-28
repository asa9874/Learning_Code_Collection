class Person {
    // constructor(생성자)
    constructor(name) {
      this._name = name;
    }
    
    //메소드
    sayHi() {
      console.log(`Hi! ${this._name}`);
    }
}
  
// 인스턴스 생성
const human = new Person('Park');
human.sayHi(); 