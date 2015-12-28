'use strict';

class API {
  static sayHello() {
    console.log('Hello World');
    return `Hello World`;
  }
}

let element = document.querySelector('.container');
element.innerHTML = API.sayHello();