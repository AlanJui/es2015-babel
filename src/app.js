import Member from './model/member';

class API {
  static sayHello() {
    console.log('Hello World');
    return `Hello World`;
  }
}

let alanjui = new Member('Stacy', 'Wu');

let element = document.querySelector('.container');
element.innerHTML = alanjui.greet();